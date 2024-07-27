import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Users } from "~/types/users";

const Prisma = new PrismaClient();

export const GetUserData = async (request: Request, response: Response) => {
  try {
    const { username, email, password }: Users = request.body;
    const FindUser = await Prisma.users.findFirst({
      where: {
        AND: [{ username }, { email }, { password }],
      },
    });

    if (!FindUser) return response.status(404).send("Pengguna tidak dtemukan!");
    response.status(200).json({ FindUser });
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

// Mengimplementasikan logika agar pengguna bisa mengunggah foto profil
// di halaman dashboard.
export const UpdateProfilePicture = async (request: Request, response: Response) => {
  try {
    const { id_user, dashboard }: Users = request.body;
    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!id_user || !FindUser) return response.status(404).send("Pengguna tidak ditemukan!");

    const UpdateProfile = await Prisma.dashboard.update({
      data: { profile_picture: dashboard.profile_picture, updated_at: new Date() },
      where: { id_user },
    });
    if (!UpdateProfile) return response.status(400).send("Permintaan Anda mengalami masalah!");
    response.status(200).send("Foto profil sudah diganti!");
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan!");
  }
};

// Menerapkan logika pada situs web agar pengguna bisa mengganti atau
// mengunggah data pribadi di halaman dashboard.
export const UpdateDataUser = async (request: Request, response: Response) => {
  try {
    const { id_user, dashboard }: Users = request.body;
    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!id_user || !FindUser) return response.status(404).send("Pengguna tidak ditemukan!");

    const UpdateData = await Prisma.dashboard.update({
      data: { bio: dashboard.bio, nationality: dashboard.nationality, updated_at: new Date() },
      where: { id_user },
    });
    if (!UpdateData) return response.status(400).send("Permintaan Anda untuk memperbarui data mengalami masalah!");
    response.status(200).send("Data Anda sudah berhasil diperbarui!");
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server!");
  }
};