import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { ConnectionToMongoDB } from "./utils/connection-to-mongodb";
// import router from "./routes/authentication";

const app = express();
const port = process.env.PORT || 2001;

// ConnectionToMongoDB();
dotenv.config();
app.use(cors());
app.use(express.json());
// app.use("/api/auth", router);

app.get("/", (_: Request, response: Response) => {
  response.json();
});

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));