import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { RegisterValidation, LoginValidation } from "./validation";
import { registerusers, loginusers } from "../types/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Prisma = new PrismaClient();

// Mengatur RESTful API ketika pengguna ingin membuat akun.
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

    if (!User) return response.status(400).send("Proses registrasi Anda mengalami kesalahan, harap coba lagi!");
    response.status(201).json({ User });
    next();
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server saat membuat akun Anda!");
  }
};

// Mengatur RESTful API pada pengguna setelah berhasil membuat akun
// dan melakukan proses masuk ke dalam situs web.
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
    if (!User) return response.status(404).send("Pengguna tidak ditemukan!");

    const CheckPasswordValidation = await bcrypt.compare(password, User.password);
    if (!CheckPasswordValidation) return response.status(403).send("Akun Anda tidak valid!");

    const Token = jwt.sign({ id_user: User.id_user }, process.env.JWT_SECRET || "", { expiresIn: "4h" });
    response.cookie("id_user", Token, { httpOnly: true });
    response.status(200).json({ Token });
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server saat proses masuk ke Sube!");
  }
};

// Jika pengguna tidak melakukan proses masuk atau belum membuat akun,
// tetapi masuk ke halaman profil secara paksa, maka halaman profil
// akan otomatis mengarahkan ke halaman masuk.
export const RequireAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const Token = request.cookies["id_user"];
    if (!Token) return response.status(401).send("Autentikasi diperlukan untuk mengakses halaman profil!");

    const Decoded = jwt.verify(Token, process.env.JWT_SECRET || "");
    if (!Decoded) return response.status(403).send("Token Anda tidak valid!");

    const id_user = (Decoded as { id_user: string }).id_user;
    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!FindUser) return response.status(404).send("Pengguna tidak ditemukan!");
    next();
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server!");
  }
};