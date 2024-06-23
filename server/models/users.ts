import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "~/types/users";

const Prisma = new PrismaClient();

export const CreateUser = async (id_user: string, username: string, email: string, password: string, created_at: Date, updated_at: Date): Promise<users> => {
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
  return User;
};

export const LoginUser = async (username_or_email: string, password: string) => {
  const User = await Prisma.users.findFirst({
    where: {
      OR: [
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