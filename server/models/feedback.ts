import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { feedback } from "../types/feedback";

const Prisma = new PrismaClient();

export const CreateFeedback = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id_feedback, email, subject, description, created_at }: feedback = request.body;
    const FeedbackCount = await Prisma.feedback.count({ where: { email } });

    if (FeedbackCount >= 3) return response.status(429).json({ error: "Anda telah mencapai batas maksimal pengiriman kritik dan saran!" });

    const Feedback = await Prisma.feedback.create({
      data: {
        id_feedback,
        email,
        subject,
        description,
        created_at,
        submission_count: FeedbackCount + 1,
      },
    });

    if (!Feedback) throw new Error("Proses pengiriman kritik dan saran Anda mengalami kesalahan!");
    response.status(201).json({ Feedback });
    next();
  } catch (e) {
    response.status(500).json({ error: "Terjadi kesalahan pada server saat ingin mengirimkan kritik dan saran Anda!" });
  }
};