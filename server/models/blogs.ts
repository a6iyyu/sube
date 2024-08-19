import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

// Mengatur RESTful API agar halaman situs web bisa mengimpor
// data-data yang ada di dalam basis data.
export const ImportBlog = async (_: Request, response: Response) => {
  try {
    const Blogs = await Prisma.blogs.findMany();
    if (!Blogs || Blogs.length === 0) return response.status(404).send("Blog tidak ditemukan di dalam basis data!");
    response.status(200).json({ Blogs });
  } catch (e) {
    console.error(e);
    response.status(500).json({ error: "Terjadi kesalahan pada server!" });
  }
};

// Merender blog setelah berhasil mengimpor blog dari basis data.
export const RenderBlog = async (request: Request, response: Response) => {
  const { title } = request.params;
  try {
    const Blogs = await Prisma.blogs.findUnique({ where: { title } });
    if (!Blogs) return response.status(404).send("Blog tidak ditemukan di dalam basis data!");
    response.status(200).json({ Blogs });
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server dalam memuat blog!");
  }
};