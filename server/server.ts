import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 2001;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/masuk", (request: Request, response: Response) => {});

app.get("/registrasi", (request: Request, response: Response) => {});

app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}`)
);