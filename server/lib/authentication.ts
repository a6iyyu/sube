import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CreateUser, FindUserByUsername } from "../models/users";

export const Login = async (request: Request, response: Response) => {
  const { username, password } = request.body;

  try {
    const user = await FindUserByUsername(username);
    if (!user) {
      return response.status(400).json({ error: "Ada kesalahan dalam menemukan pengguna tersebut!" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const AccessToken = jwt.sign({ username: user.username, id_user: user.id_user }, process.env.JWT_SECRET || "");
      response.json({ id_user: user.id_user, username: user.username, signed_at: new Date(), AccessToken });
    } else {
      response.status(403).json({ error: "Kata sandi tidak benar!" });
    }
  } catch (error) {
    response.status(500).json({ error });
  }
};

export const Register = async (request: Request, response: Response) => {
  const { id_user, username, email, password, confirm_password, created_at } = request.body;
  if (password != confirm_password) {
    return response.status(400).json({ error: "Kata sandi tidak cocok!" });
  }

  try {
    const HashedPassword = await bcrypt.hash(password, 10);
    const User = { id_user, username, email, password: HashedPassword, created_at: new Date(created_at) };

    await CreateUser(User);

    response.status(201).json({ message: "Selamat, akun Anda berhasil dibuat!" });
  } catch (error) {
    response.status(500).json({ error });
  }
};