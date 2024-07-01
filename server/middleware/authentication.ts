import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateUser, LoginUser } from "../models/users";
import { RegisterValidation, LoginValidation } from "./validation";

const Prisma = new PrismaClient();

export const RegisterAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    RegisterValidation.parse(request.body);
    const { id_user, username, email, password, created_at, updated_at } = request.body;
    const User = await CreateUser({ id_user, username, email, password, created_at, updated_at });
    response.status(201).json({ User });
    next();
  } catch (error) {
    response.status(400).json({ error: "Proses registrasi Anda mengalami kesalahan, harap coba lagi!" });
  }
};

export const LoginAuth = async (request: Request, response: Response) => {
  try {
    LoginValidation.parse(request.body);
    const { id_user, username_or_email, password } = request.body;
    const Token = await LoginUser({ id_user, username_or_email, password });
    response.cookie("id_user", id_user, { httpOnly: true });
    response.status(200).json({ Token });
  } catch (error) {
    response.status(400).json({ error: "Proses masuk Anda mengalami kesalahan, harap coba lagi!" });
  }
};

export const RequireAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id_user } = request.cookies["id_user"];
    const FindUser = await Prisma.users.findUnique({
      where: { id_user },
    });

    if (!id_user || !FindUser) return response.status(401).json({ error: "Anda tidak bisa masuk ke halaman profil karena belum memiliki akun atau tidak melakukan autentikasi!" });
    next();
  } catch (error) {
    response.status(500).json({ error: "Terjadi kesalahan pada server!" });
  }
};

export const LoginWithGoogle = async (_: Request, response: Response) => {};