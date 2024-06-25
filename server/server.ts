import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import dotenv from "dotenv";
import logger from "morgan";
import { LoginAuth, ValidateLogin, RegisterAuth, ValidateRegister } from "./middleware/authentication";

const app = express();
const port = process.env.PORT || 2001;

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:2000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use((request: Request, response: Response, next: NextFunction) => {
  response.cookie("X-CSRF-Token", request.csrfToken());
  next();
});

app.post("/registrasi", bodyParser.urlencoded({ extended: false }), csrf({ cookie: true }), RegisterAuth, ValidateRegister, (request: Request, response: Response) => {
  response.send({ "X-CSRF-Token": request.csrfToken() });
});

app.post("/masuk", bodyParser.urlencoded({ extended: false }), csrf({ cookie: true }), LoginAuth, ValidateLogin, (request: Request, response: Response) => {
  response.send({ "X-CSRF-Token": request.csrfToken() });
});

app.get("/csrf-token", csrf({ cookie: true }), (request: Request, response: Response) => {
  response.json({ "X-CSRF-Token": request.headers["X-CSRF-Token"] });
})

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));