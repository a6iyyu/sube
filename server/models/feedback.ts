import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { FeedbackValidation } from "./validation";
import { feedback } from "../types/feedback";

const Prisma = new PrismaClient();

// Mengatur RESTful API agar pengguna bisa mengirim kritik dan saran
// ke basis data dengan batasan sebanyak 3.
export const CreateFeedback = async (request: Request, response: Response, next: NextFunction) => {
  try {
    FeedbackValidation.parse(request.body);
    const { id_feedback, email, subject, description, created_at }: feedback = request.body;
    const FeedbackCount = await Prisma.feedback.count({ where: { email } });
    if (FeedbackCount >= 3) return response.status(429).send("Anda telah mencapai batas maksimal pengiriman kritik dan saran!");

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
    console.error(e);
    response.status(500).send("Terjadi kesalahan pada server saat ingin mengirimkan kritik dan saran Anda!");
  }
};