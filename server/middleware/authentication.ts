import { Request, Response } from "express";
import { CreateUser, LoginUser } from "../models/users";

export const LoginAuth = async (request: Request, response: Response) => {
  try {
    const { id_user, username, email, password, created_at, updated_at } = request.body;
    const User = await CreateUser(id_user, username, email, password, created_at, updated_at);
    response.status(201).json(User);
  } catch (error) {
    response.status(400).json({ error });
  }
};

export const RegisterAuth = async (request: Request, response: Response) => {
  try {
    const { username, email, password } = request.body;
    const Token = await LoginUser(username, email, password);
    response.status(200).json({ Token });
  } catch (error) {
    response.status(400).json({ error });
  }
};