import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { Users } from "~/users";

const Prisma = new PrismaClient();

// Jika pengguna tidak melakukan proses masuk atau belum membuat akun,
// tetapi masuk ke halaman profil secara paksa, maka halaman profil
// akan otomatis mengarahkan ke halaman masuk.
// Mendapatkan data pengguna di dalam basis data.
export const RequireAuthAndGetUserData = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id_user }: Users = request.body;
    const Cookie = request.cookies[id_user || "id_user"]
    if (!Cookie) return response.status(401).send("Autentikasi diperlukan!");

    const Decoded = jwt.verify(Cookie, process.env.JWT_SECRET || "") as { id_user: string };
    if (!Decoded) return response.status(403).send("Token Anda tidak valid!");

    const user = await Prisma.users.findUnique({
      where: { id_user: Decoded.id_user },
      include: { dashboard: true },
    });
    
    if (!user) return response.status(404).send("Pengguna tidak ditemukan!");
    response.status(200).json(user);
    next();
  } catch (e) {
    console.error(e);
    e instanceof jwt.JsonWebTokenError ? response.status(403).send("Token Anda tidak valid!") : response.status(500).send("Terjadi kesalahan!");
  }
};

// Mengatur RESTful API agar pengguna keluar dari akun.
export const LogoutAuth = async (request: Request, response: Response) => {
  try {
    response.clearCookie("id_user");
    response.status(200).send("Berhasil keluar!");
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