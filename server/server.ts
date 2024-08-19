import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import logger from "morgan";
import passport from "passport";
import rateLimit from "express-rate-limit";
import session from "express-session";
import { ImportBlog, RenderBlog } from "./models/blogs";
import { LogoutAuth, RequireAuthAndGetUserData } from "./controllers/dashboard";
import { CreateFeedback } from "./models/feedback";
import { ForgotPassword, ResetPassword } from "./controllers/forgot-reset-password";
import LoginWithGoogle from "./models/login-with-google";
import { RegisterAuth, LoginAuth } from "./models/users";

dotenv.config();

const app = express();
const port = process.env.PORT || 2001;
const Prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: ["*", "https://sukabelajar.vercel.app"], optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("common"));
app.use(session({ secret: process.env.SESSION_SECRET || "", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(LoginWithGoogle);
app.options("*", cors({ origin: "https://sukabelajar.vercel.app", optionsSuccessStatus: 200 }));

app.post("/auth/registrasi", RegisterAuth);
app.post("/auth/masuk", LoginAuth);
app.post("/auth/keluar", LogoutAuth);
app.post("/auth/lupa-kata-sandi", ForgotPassword);
app.post("/auth/reset-kata-sandi", ResetPassword);
app.post("/dashboard/memperbarui-data-pengguna");
app.post("/tentang-kami/kritik-dan-saran", CreateFeedback, rateLimit({
  keyGenerator: (request: Request) => request.body.email,
  max: 3,
  message: "Terlalu banyak permintaan dari IP, silakan coba lagi nanti.",
  windowMs: 60 * 60 * 1000,
}));

app.get("/dashboard", RequireAuthAndGetUserData);
app.get("/blog", ImportBlog);
app.get("/blog/:title", RenderBlog);

app.listen(port, () => console.log(`Server berjalan di https://localhost:${port}`));

module.exports = app;