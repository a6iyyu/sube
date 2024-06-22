import { Router } from "express";
import { Login, Register } from "../lib/authentication";

const router = Router();

export const AuthRoutes = () => {
  router.post("/masuk", Login);
  router.post("/registrasi", Register);
};