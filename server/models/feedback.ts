import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { feedback } from "~/types/feedback";

const Prisma = new PrismaClient();

export const CreateFeedback = async ({ id_feedback, email, subject, description, created_at }: feedback, _: Request, response: Response) => {
  try {
    const Feedback = await Prisma.feedback.create({
      data: {
        id_feedback,
        email,
        subject,
        description,
        created_at,
      },
    });
    if (!Feedback) response.status(400).json({ error: "Permintaan kritik dan saran Anda mengalami masalah, harap coba lagi!" });
    return Feedback;
  } catch (e) {
    console.error(e);
  }
};