import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registerusers, loginusers } from "~/types/users";

const Prisma = new PrismaClient();

export const CreateUser = async ({ id_user, username, email, password, created_at, updated_at }: registerusers) => {
  const HashedPassword = await bcrypt.hash(password, 10);
  const User = await Prisma.users.create({
    data: {
      id_user,
      username,
      email,
      password: HashedPassword,
      created_at,
      updated_at,
    },
  });
  if (!User) throw ("Proses registrasi Anda mengalami kesalahan pada server!");
  return User;
};

export const LoginUser = async ({ id_user, username_or_email, password }: loginusers) => {
  const User = await Prisma.users.findFirst({
    where: {
      OR: [
        { id_user },
        { username: username_or_email },
        { email: username_or_email },
      ]
    }
  });

  if (!User) throw new Error("Pengguna tidak ditemukan!");

  const CheckPasswordValidation = await bcrypt.compare(password, User.password);
  if (!CheckPasswordValidation) throw new Error("Kredensial Anda tidak valid!");

  const Token = jwt.sign({ id_user: User.id_user }, process.env.JWT_SECRET || "", { expiresIn: "1h" });
  return Token;
};