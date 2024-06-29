import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import dotenv from "dotenv";
import logger from "morgan";
import { LoginAuth, RegisterAuth } from "./middleware/authentication";
import { ImportBlog, RenderBlog } from "./models/blogs";

dotenv.config();

const app = express();
const port = process.env.PORT || 2001;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:2000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(csrf({ cookie: true }));

app.post("/registrasi", csrf({ cookie: true }), RegisterAuth);
app.post("/masuk", csrf({ cookie: true }), LoginAuth);
app.post("/tentang-kami/kritik-dan-saran", csrf({ cookie: true }));

app.get("/registrasi", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/masuk", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/tentang-kami/kritik-dan-saran", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/dashboard", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/blog", async (response: Response) => {
  try {
    const Blogs = await ImportBlog();
    response.status(200).json(Blogs);
  } catch (e: any) {
    response.status(e.status === 404 ? 404 : 500).send(e.status === 404 ? "Blog tidak ada di dalam basis data!" : "Terjadi kesalahan pada server!").end();
  }
});

app.get("/blog/:title", RenderBlog);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));