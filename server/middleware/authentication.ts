import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateUser, LoginUser } from "../models/users";
import { LoginValidation, RegisterValidation } from "./validation";

const Prisma = new PrismaClient();

export const RegisterAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id_user, username, email, password, created_at, updated_at } = request.body;
    const User = await CreateUser({ id_user, username, email, password, created_at, updated_at });
    RegisterValidation.parse(request.body);
    response.status(200).json({ User });
    next();
  } catch (error) {
    response.status(400).json({ error: "Proses registrasi Anda mengalami kesalahan, harap coba lagi!" });
  }
};

export const LoginAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id_user, username_or_email, password } = request.body;
    const Token = await LoginUser({ id_user, username_or_email, password });
    LoginValidation.parse(request.body);
    response.status(200).json({ Token });
    next();
  } catch (error) {
    response.status(400).json({ error: "Maaf, Anda belum memiliki akun!" });
  }
};

export const RequireAuth = async (id_user: string, _: Request, response: Response) => {
  const User = await Prisma.users.findUnique({
    where: { id_user },
  });

  !User ? response.redirect("/masuk") : response.redirect("/dashboard");
};

export const LoginWithGoogle = async (request: Request, response: Response) => {};