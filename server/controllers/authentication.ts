import { Router } from "express";
import { LoginAuth, ValidateLogin, RegisterAuth, ValidateRegister } from "../middleware/authentication";

export const Controllers = () => {
  Router().post("/masuk", ValidateLogin, LoginAuth);
  Router().post("/registrasi", ValidateRegister, RegisterAuth);
};