import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import dotenv from "dotenv";
import logger from "morgan";
import { LoginAuth, RegisterAuth } from "./middleware/authentication";
import { ImportBlog } from "./models/blogs";

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

app.get("/registrasi", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/masuk", (request: Request, response: Response) => {
  response.json({ "XSRF-Token": request.csrfToken() });
});

app.get("/blog", ImportBlog);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));