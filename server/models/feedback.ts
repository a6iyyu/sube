import { PrismaClient } from "@prisma/client";
import { feedback } from "~/types/feedback";

const Prisma = new PrismaClient();

export const CreateFeedback = async ({ id_feedback, email, subject, description, created_at }: feedback) => {
  const Feedback = await Prisma.feedback.create({
    data: {
      id_feedback,
      email,
      subject,
      description,
      created_at,
    },
  });
  if (!Feedback) throw ("Proses pengiriman kritik dan saran Anda mengalami kesalahan pada server!");
  return Feedback;
};