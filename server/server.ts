import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());

app.get("/", (_: Request, response: Response) => {
  response.json();
});

app.listen(2001, () => console.log("Server berjalan di http://localhost:2001"));