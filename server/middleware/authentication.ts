import { Request, Response, NextFunction } from "express";
import { CreateUser, LoginUser } from "../models/users";
import { LoginValidation, RegisterValidation } from "./validation";

export const LoginAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { email, password } = request.body;
    const Token = await LoginUser(email, password);
    LoginValidation.parse(request.body);
    response.status(200).json({ Token });
    next();
  } catch (error) {
    response.status(400).json({ error });
  }
};

export const RegisterAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id_user, username, email, password, created_at, updated_at } = request.body;
    const User = await CreateUser({ id_user, username, email, password, created_at, updated_at });
    RegisterValidation.parse(request.body);
    response.status(201).json({ User });
    next();
  } catch (error) {
    response.status(400).json({ error });
  }
};

export const LoginWithGoogle = async (response: Response) => {};