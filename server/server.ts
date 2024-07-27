import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import dotenv from "dotenv";
import logger from "morgan";
import passport from "passport";
import rateLimit from "express-rate-limit";
import session from "express-session";
import { ImportBlog, RenderBlog } from "./models/blogs";
import { GetUserData, LogoutAuth, UpdateDataUser, UpdateProfilePicture } from "./controllers/dashboard";
import { CreateFeedback } from "./models/feedback";
import { ForgotPassword, ResetPassword } from "./controllers/forgot-reset-password";
import LoginWithGoogle from "./models/login-with-google";
import { RegisterAuth, LoginAuth, RequireAuth, UserAuthenticated } from "./models/users";

dotenv.config();

const app = express();
const port = process.env.PORT || 2001;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:2000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("common"));
app.use(csrf({ cookie: true }));
app.use(session({ secret: process.env.SESSION_SECRET || "", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(LoginWithGoogle);

app.post("/auth/registrasi", csrf({ cookie: true }), RegisterAuth, UserAuthenticated);
app.post("/auth/masuk", csrf({ cookie: true }), LoginAuth, UserAuthenticated);
app.post("/auth/keluar", csrf({ cookie: true }), LogoutAuth);
app.post("/auth/lupa-kata-sandi", csrf({ cookie: true }), ForgotPassword);
app.post("/auth/reset-kata-sandi", csrf({ cookie: true }), ResetPassword);
app.post("/dashboard/memperbarui-data-pengguna", csrf({ cookie: true }), UpdateDataUser);
app.post("/dashboard/memperbarui-foto-profil", csrf({ cookie: true }), UpdateProfilePicture);
app.post("/tentang-kami/kritik-dan-saran", csrf({ cookie: true }), CreateFeedback, rateLimit({
  keyGenerator: (request: Request) => request.body.email,
  max: 3,
  message: "Terlalu banyak permintaan dari IP, silakan coba lagi nanti.",
  windowMs: 60 * 60 * 1000,
}));

app.get("/auth/registrasi", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/auth/masuk", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/auth/lupa-kata-sandi", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/auth/reset-kata-sandi", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/tentang-kami/kritik-dan-saran", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/dashboard", RequireAuth, GetUserData, (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/blog", ImportBlog);
app.get("/blog/:title", RenderBlog);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));