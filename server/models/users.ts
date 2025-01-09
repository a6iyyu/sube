import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";
import { RegisterValidation, LoginValidation } from "@/validation";
import { Users } from "~/users";

const Prisma = new PrismaClient();

// Mengatur RESTful API ketika pengguna ingin membuat akun.
export const RegisterAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    RegisterValidation.parse(request.body);
    const { id_user, username, email, password, created_at }: Users = request.body;
    const FindUser = await Prisma.users.findFirst({ where: { OR: [{ username }, { email }] }});
    if (FindUser) return response.status(409).send("Data sudah ada!");

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

    if (!User) return response.status(422).send("Validasi gagal!");
    response.status(201).json(User);
    next();
  } catch (e) {
    console.error(e);
    e instanceof ZodError ? response.status(400).send("Permintaan tidak valid!") : response.status(500).send("Terjadi kesalahan!");
  }
};

// Mengatur RESTful API pada pengguna setelah berhasil membuat akun
// dan melakukan proses masuk ke dalam situs web.
export const LoginAuth = async (request: Request, response: Response) => {
  try {
    LoginValidation.parse(request.body);
    const { id_user, username_or_email, password }: Users = request.body;
    const User = await Prisma.users.findFirst({
      where: {
        OR: [{ username: username_or_email }, { email: username_or_email }],
      },
    });

    if (!User) return response.status(404).send("Pengguna tidak ditemukan!");

    const CheckPasswordValidation = await bcrypt.compare(password, User.password);
    if (!CheckPasswordValidation) return response.status(403).send("Akun Anda tidak valid!");

    const Token = jwt.sign({ id_user: User.id_user }, process.env.JWT_SECRET || "", { expiresIn: "6h" });
    response.cookie(id_user || "id_user", Token, { httpOnly: true, secure: process.env.NODE_ENV === "production" || true, maxAge: 6 * 60 * 60 * 1000 });
    response.status(200).json(Token);
  } catch (e) {
    console.error(e);
    e instanceof ZodError ? response.status(400).send("Data Anda tidak valid!") : response.status(500).send("Terjadi kesalahan pada server saat proses masuk ke Sube!");
  }
};