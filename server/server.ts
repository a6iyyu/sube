import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import dotenv from "dotenv";
import logger from "morgan";
import rateLimit from "express-rate-limit";
import { RegisterAuth, LoginAuth, LogoutAuth, RequireAuth, LoginWithGoogle } from "./models/users";
import { ImportBlog, RenderBlog } from "./models/blogs";
import { CreateFeedback } from "./models/feedback";

dotenv.config();

const app = express();
const port = process.env.PORT || 2001;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:2000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("combined"));
app.use(csrf({ cookie: true }));

app.post("/auth/registrasi", csrf({ cookie: true }), RegisterAuth);
app.post("/auth/masuk", csrf({ cookie: true }), LoginAuth);
app.post("/auth/keluar", csrf({ cookie: true }), LogoutAuth);
app.post("/auth/google", csrf({ cookie: true }), LoginWithGoogle);
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

app.get("/tentang-kami/kritik-dan-saran", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/dashboard", RequireAuth, (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/blog", ImportBlog);
app.get("/blog/:title", RenderBlog);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));