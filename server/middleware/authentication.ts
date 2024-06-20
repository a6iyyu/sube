import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const AuthenticateJWT = (request: Request, response: Response, next: NextFunction) => {
  const Token = request.header("Authorization")?.split(" ")[1];
  if (!Token) {
    return response.status(401).json({ error: "401: Tidak ada token, akses ditolak!" });
  }

  try {
    const decoded = jwt.verify(Token, process.env.JWT_SECRET!);
    (request as any).user = (decoded as any).user_id;
    next();
  } catch {
    response.status(401).json({ error: "401: Token tidak valid!" });
  }
};