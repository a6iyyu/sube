import { Request, Response, NextFunction } from "express";
import { CreateUser, LoginUser } from "../models/users";
import { LoginValidation, RegisterValidation } from "./validation";

export const LoginAuth = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const Token = await LoginUser(email, password);
    response.status(200).json({ Token });
  } catch (error) {
    response.status(400).json({ error });
  }
};

export const ValidateLogin = (request: Request, response: Response, next: NextFunction) => {
  try {
    LoginValidation.parse(request.body);
    next();
  } catch (error) {
    response.status(400).json({ error });
  }
}

export const RegisterAuth = async (request: Request, response: Response) => {
  try {
    const { id_user, username, email, password, created_at, updated_at } = request.body;
    const User = await CreateUser(id_user, username, email, password, created_at, updated_at);
    response.status(201).json(User);
  } catch (error) {
    response.status(400).json({ error });
  }
};

export const ValidateRegister = (request: Request, response: Response, next: NextFunction) => {
  try {
    RegisterValidation.parse(request.body);
    next();
  } catch (error) {
    response.status(400).json({ error });
  }
};

export const CSRFToken = (request: Request, response: Response) => {
  const Token = request.headers["X-CSRF-Token"];
  if (!Token || Token !== request.csrfToken()) return response.status(403).json({ message: "Token CSRF Anda tidak valid!" });
};

export const LoginWithGoogle = async (response: Response) => {};