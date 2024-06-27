import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const ImportBlog = async (_: Request, response: Response) => {
  try {
    const Blogs = await Prisma.blogs.findMany();

    if (Blogs.length === 0) {
      response.status(404).send("Blog tidak ada di dalam database!");
      return;
    };

    response.status(200).json(Blogs);
  } catch (e) {
    response.status(500).send("Terjadi kesalahan pada server!");
  }
};