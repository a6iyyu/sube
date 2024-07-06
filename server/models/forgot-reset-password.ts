import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { ForgotPasswordValidation, ResetPasswordValidation } from "./validation";
import { forgotpassword, resetpassword } from "~/types/users";

const Prisma = new PrismaClient();

export const RequireUserAccount = async (request: Request, response: Response, next: NextFunction) => {
  try {
    ForgotPasswordValidation.parse(request.body);
    const { id_user, username_or_email }: forgotpassword = request.body;
    const FindUser = await Prisma.users.findFirst({
      where: {
        OR: [
          { id_user },
          { username: username_or_email },
          { email: username_or_email },
        ],
      },
    });
    if (!FindUser) return response.status(404).send("Nama atau surel tidak ada di dalam basis data!");
    response.status(200).send("Nama atau surel Anda ditemukan!");
    next();
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server saat ingin mencari data Anda!");
  }
};

export const ResetPassword = async (request: Request, response: Response, next: NextFunction) => {
  try {
    ResetPasswordValidation.parse(request.body);
    const { id_user, password }: resetpassword = request.body;
    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!FindUser) return response.status(404).send("Nama atau surel tidak ada di dalam basis data!");

    const HashedPassword = await bcrypt.hash(password, 10);
    const ResetPassword = await Prisma.users.update({
      data: { password: HashedPassword },
      where: { id_user },
    });
    if (!ResetPassword) return response.status(400).send("Permintaan perubahan kata sandi Anda mengalami masalah, harap coba lagi nanti!");
    response.status(200).send("Sukses untuk merubah kata sandi Anda!");
    next();
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server saat ingin mengatur ulang kata sandi Anda!");
  }
};