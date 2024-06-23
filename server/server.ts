import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Controllers } from "./controllers/authentication";

const app = express();
const port = process.env.PORT || 2001;

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/auth", Controllers);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));