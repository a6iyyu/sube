import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "../types/express";

export const AuthenticateToken = (request: Request, response: Response, next: NextFunction) => {
  const AuthHeader = request.headers["authorization"];
  const Token = AuthHeader && AuthHeader.split(" ")[1];

  if (Token == null) return response.sendStatus(401);

  jwt.verify(Token, process.env.JWT_SECRET || "", (err: any, user: any) => {
    if (err) return response.sendStatus(403);
    request.user = user;
    next();
  });
};