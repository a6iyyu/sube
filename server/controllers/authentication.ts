import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import users from "../models/users";

export const Register = async (request: Request, response: Response) => {
  const { username, email, password } = request.body;
  try {
    const HashPassword = await bcrypt.hash(password, 10);
    const NewUser = new users({ username, email, password: HashPassword });
    await NewUser.save();
    response.status(200).json({ message: "Selamat, akun anda berhasil dibuat!" });
  } catch {
    response.status(500).json({ error: "500: Ada kesalahan saat mendaftar akun!" });
  }
};

export const Login = async (request: Request, response: Response) => {
  const { username, password } = request.body;
  try {
    const user = await users.findOne({ username });
    if (!user) {
      return response.status(404).json({ error: "400: Maaf, akun Anda tidak ditemukan!" });
    }
    const IsMatch = await bcrypt.compare(password, user.password);
    if (!IsMatch) {
      return response.status(400).json({ error: "400: Maaf, kredensial akun tidak valid!" });
    }
    const Token = jwt.sign({ id_user: user.id_user }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    response.json({ Token });
  } catch {
    response.status(500).json({ error: "Ada kesalahan saat proses masuk!" });
  }
};