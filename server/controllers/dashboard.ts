import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import CryptoJS from "crypto-js";
import { Users } from "~/types/users";

const Prisma = new PrismaClient();

export const GetUserData = async (request: Request, response: Response) => {
  try {
    const { username, email, password }: Users = request.body;
    const DecryptedPassword = CryptoJS.AES.decrypt(password, process.env.ENCRYPT_KEY || "").toString(CryptoJS.enc.Utf8);
    const User = await Prisma.users.findMany({
      where: {
        AND: [{ username }, { email }, { password: DecryptedPassword }],
      },
    });

    if (!User || User.length === 0) return response.status(404).send("Pengguna tidak dtemukan!");
    response.status(200).json({ User });
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan!");
  }
};

// Mengatur RESTful API agar pengguna keluar dari akun.
export const LogoutAuth = async (request: Request, response: Response) => {
  try {
    const { id_user } = request.cookies["id_user"];
    if (!id_user) return response.status(404).send("Pengguna tidak ditemukan!");

    await Prisma.users.delete({ where: { id_user } });
    response.status(200);
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan!");
  } finally {
    await Prisma.$disconnect();
  }
};

// Menerapkan logika pada situs web agar pengguna bisa mengganti atau
// mengunggah data pribadi di halaman dashboard.
export const UpdateDataUser = async (request: Request, response: Response) => {
  try {
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server!");
  }
};