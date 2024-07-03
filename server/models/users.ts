import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
<<<<<<< HEAD
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RegisterValidation, LoginValidation } from "./validation";
import { registerusers, loginusers } from "../types/users";
=======
import { RegisterValidation, LoginValidation } from "./validation";
import { registerusers, loginusers } from "../types/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
>>>>>>> 18f1cf5 (:boom: Re-push because the git is corrupted.)

const Prisma = new PrismaClient();

export const RegisterAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    RegisterValidation.parse(request.body);
    const { id_user, username, email, password, created_at }: registerusers = request.body;
    const HashedPassword = await bcrypt.hash(password, 10);
    const User = await Prisma.users.create({
      data: {
        id_user,
        username,
        email,
        password: HashedPassword,
        created_at
      },
    });

    if (!User) return response.status(400).json({ error: "Proses registrasi Anda mengalami kesalahan, harap coba lagi!" });
    response.status(201).json({ User });
    next();
  } catch {
    response.status(500).json({ error: "Terjadi kesalahan pada server saat membuat akun Anda!" });
  }
};

export const LoginAuth = async (request: Request, response: Response) => {
  try {
    LoginValidation.parse(request.body);
    const { username_or_email, password }: loginusers = request.body;
    const User = await Prisma.users.findFirst({
      where: {
        OR: [
          { username: username_or_email },
          { email: username_or_email },
        ],
      },
    });
    if (!User) return response.status(404).json({ error: "Pengguna tidak ditemukan!" });

    const CheckPasswordValidation = await bcrypt.compare(password, User.password);
    if (!CheckPasswordValidation) return response.status(403).json({ error: "Akun Anda tidak valid!" });

    const Token = jwt.sign({ id_user: User.id_user }, process.env.JWT_SECRET || "", { expiresIn: "4h" });
    response.cookie("id_user", Token, { httpOnly: true });
    response.status(200).json({ Token });
  } catch {
    response.status(500).json({ error: "Terjadi kesalahan pada server saat proses masuk ke Sube!" });
  }
};

export const RequireAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const Token = request.cookies["id_user"];
    if (!Token) return response.status(401).json({ error: "Autentikasi diperlukan untuk mengakses halaman dashboard!" });

    const Decoded = jwt.verify(Token, process.env.JWT_SECRET || "");
    if (!Decoded) return response.status(403).json({ error: "Token Anda tidak valid!" });

    const id_user = (Decoded as { id_user: string }).id_user;
    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!FindUser) return response.status(404).json({ error: "Pengguna tidak ditemukan!" });
    next();
  } catch {
    response.status(500).json({ error: "Terjadi kesalahan pada server!" });
  }
};

export const Logout = async (request: Request, response: Response, next: NextFunction) => {
  try {
  } catch {
    response.status(500).json({ error: "Terjadi kesalahan pada server!" });
  }
};

export const LoginWithGoogle = async (_: Request, response: Response) => {
  try {
  } catch {
    response.status(500).json({ error: "Terjadi kesalahan pada server!" });
  }
};