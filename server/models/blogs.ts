import { Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const ImportBlog = async (response: Response) => {
  try {
    const Blogs = await Prisma.blogs.findMany();
    response.status(Blogs.length === 0 ? 404 : 200).json(Blogs.length === 0 ? "Blog tidak ada di dalam database!" : Blogs);
  } catch (e) {
    response.status(500).send("Terjadi kesalahan pada server!");
  }
};