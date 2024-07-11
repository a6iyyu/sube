import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { dashboard } from "~/types/dashboard";

const Prisma = new PrismaClient();

// Mengatur RESTful API agar pengguna keluar dari akun.
export const LogoutAuth = async (request: Request, response: Response) => {
  try {
    const { id_user } = request.cookies["id_user"];
    if (!id_user) return response.status(404).send("ID akun Anda tidak ditemukan di dalam cookies!");

    await Prisma.users.delete({ where: { id_user } });
    response.status(200).send("Anda berhasil keluar, jangan lupa datang lagi!");
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server!");
  } finally {
    await Prisma.$disconnect();
  }
};

// Mengimplementasikan logika agar pengguna bisa mengunggah foto profil
// di halaman dashboard.
export const UpdateProfilePicture = async (request: Request, response: Response) => {
  try {
    const { id_user, profile_picture }: dashboard = request.body;
    if (!id_user) return response.status(404).send("ID profil Anda tidak ditemukan!");

    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!FindUser) return response.status(404).send("Pengguna tidak ditemukan!");

    const UpdateProfile = await Prisma.dashboard.update({
      data: { profile_picture, updated_at: new Date() },
      where: { id_user },
    });
    if (!UpdateProfile) return response.status(400).send("Permintaan Anda untuk mengganti foto profil mengalami masalah!");
    response.status(200).send("Foto profil Anda sudah diganti!");
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server!");
  }
};

// Menerapkan logika pada situs web agar pengguna bisa mengganti atau
// mengunggah data pribadi di halaman dashboard.
export const UpdateDataUser = async (request: Request, response: Response) => {
  try {
    const { id_user, bio, nationality }: dashboard = request.body;
    if (!id_user) return response.status(404).send("ID profil Anda tidak ditemukan!");

    const FindUser = await Prisma.users.findUnique({ where: { id_user } });
    if (!FindUser) return response.status(404).send("Pengguna tidak ditemukan!");

    const UpdateData = await Prisma.dashboard.update({
      data: { bio, nationality, updated_at: new Date() },
      where: { id_user },
    });
    if (!UpdateData) return response.status(400).send("Permintaan Anda untuk memperbarui data mengalami masalah!");
    response.status(200).send("Data Anda sudah berhasil diperbarui!");
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server!");
  }
};