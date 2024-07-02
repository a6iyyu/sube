import { Request, Response, NextFunction } from "express";
import { CreateFeedback } from "../models/feedback";

export const SendFeedback = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id_feedback, email, subject, description, created_at } = request.body;
    const Feedback = await CreateFeedback({ id_feedback, email, subject, description, created_at });
    response.status(201).json({ Feedback });
    next();
  } catch (error) {
    response.status(500).json({ error: "Terjadi kesalahan pada server!" });
  }
};