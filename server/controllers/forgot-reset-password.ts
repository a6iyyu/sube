import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";
import { ForgotPasswordValidation, ResetPasswordValidation } from "../utils/validation";
import { Users } from "../types/users";

const Prisma = new PrismaClient();

export const ForgotPassword = async (request: Request, response: Response, next: NextFunction) => {
  try {
    ForgotPasswordValidation.parse(request.body);
    const { username_or_email }: Users = request.body;
    const FindUser = await Prisma.users.findFirst({
      where: {
        OR: [
          { username: username_or_email },
          { email: username_or_email },
        ],
      },
    });
    
    if (!FindUser) return response.status(404).send("Data tidak ditemukan!")
    response.status(200).json({ FindUser });
    next();
  } catch (e) {
    console.error(e);
    e instanceof ZodError ? response.status(400).send("Data Anda tidak valid!") : response.status(500).send("Terjadi kesalahan!");
  }
};

export const ResetPassword = async (request: Request, response: Response, next: NextFunction) => {
  try {
    ResetPasswordValidation.parse(request.body);
    const { id_user, password, updated_at }: Users = request.body;
    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!FindUser) return response.status(404).send("Data tidak ditemukan!");

    const HashedPassword = await bcrypt.hash(password, 10);
    const ResetPassword = await Prisma.users.update({
      data: { password: HashedPassword, updated_at },
      where: { id_user },
    });

    if (!ResetPassword) return response.status(422).send("Permintaan Anda mengalami masalah!");
    response.status(200);
    next();
  } catch (e) {
    console.error(e);
    e instanceof ZodError ? response.status(400).send("Data Anda tidak valid!") : response.status(500).send("Terjadi kesalahan!");
  }
};