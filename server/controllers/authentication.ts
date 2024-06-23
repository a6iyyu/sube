import { Router } from "express";
import { LoginAuth, RegisterAuth } from "../middleware/authentication";

export const Controllers = () => {
  Router().post("/masuk", LoginAuth);
  Router().post("/registrasi", RegisterAuth);
};