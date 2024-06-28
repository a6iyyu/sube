import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const ImportBlog = async () => {
  try {
    const Blogs = await Prisma.blogs.findMany();
    if (Blogs.length === 0) throw { status: 404 };
    return Blogs;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const RenderBlog = async (request: Request, response: Response) => {
  const { title } = request.params;
  try {
    const Blogs = await Prisma.blogs.findFirst({
      where: { title },
    });

    !Blogs ? response.status(404).send("Blog tidak ditemukan di dalam basis data!").end() : response.status(200).json(Blogs);
  } catch (e) {
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server dalam memuat blog!").end();
  }
};