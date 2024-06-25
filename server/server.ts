import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import csurf from "csurf";
import dotenv from "dotenv";
import logger from "morgan";
import { LoginAuth, ValidateLogin, RegisterAuth, ValidateRegister, CSRFToken } from "./middleware/authentication";

const app = express();
const port = process.env.PORT || 2001;

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(csurf({ cookie: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use((request: Request, response: Response, next: NextFunction) => {
  response.cookie("X-CSRF-Token", request.csrfToken());
  next();
});

app.post("/registrasi", csurf({ cookie: true }), RegisterAuth, ValidateRegister, CSRFToken);
app.post("/masuk", csurf({ cookie: true }), LoginAuth, ValidateLogin, CSRFToken);

app.get("/csrf-token", csurf({ cookie: true }), (request: Request, response: Response) => {
  response.json({ "X-CSRF-Token": request.headers["X-CSRF-Token"] });
})

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));