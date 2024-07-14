import React, { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError } from "zod";
import { LupaKataSandiSkema, ResetKataSandiSkema } from "./skema";

type TipeFormulir = "lupa-kata-sandi" | "reset-kata-sandi";

interface ResetKataSandi {
  password: string;
  confirm_password: string;
}

const MenanganiValidasi = (FormData: { username_or_email: string } | ResetKataSandi, FormType: TipeFormulir) => {
  try {
    FormType === "lupa-kata-sandi" ? LupaKataSandiSkema.parse(FormData as { username_or_email: string }) : ResetKataSandiSkema.parse(FormData as ResetKataSandi);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const FieldForm: any = {};
      e.errors.forEach(err => {
        if (err.path.length) FieldForm[err.path[0]] = err.message;
      });
      return FieldForm;
    }
  }
};

const MenanganiPengiriman = async <T extends { username_or_email: string } | ResetKataSandi>(e: FormEvent, FormData: T, FormType: TipeFormulir, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string) => {
  e.preventDefault();

  const ValidasiGagal = MenanganiValidasi(FormData, FormType);
  if (ValidasiGagal) return setErrorForm(ValidasiGagal);

  try {
    const response = await axios.post(FormType === "lupa-kata-sandi" ? "http://localhost:2001/auth/lupa-kata-sandi" : "http://localhost:2001/auth/reset-kata-sandi", FormData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": XSRFToken,
      },
      withCredentials: true,
    });
    response.status === 200 ? (FormType === "lupa-kata-sandi" ? window.location.href = "http://localhost:2000/reset-kata-sandi" : console.error(`${response.data.message}`)) : (FormType === "reset-kata-sandi" ? window.location.href = "http://localhost:2000/masuk" : console.error(`${response.data.message}`));
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data}`);
  }
};

export const FetchXSRFToken = async (setXSRFToken: Dispatch<SetStateAction<string>>, FormType: TipeFormulir) => {
  try {
    const response = await axios.get(FormType === "lupa-kata-sandi" ? "http://localhost:2001/auth/lupa-kata-sandi" : "http://localhost:2001/auth/reset-kata-sandi", { withCredentials: true });
    setXSRFToken(await response.data["XSRF-Token"]);
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data}`);
  }
};

export const HandleChangeForm = <T extends { username_or_email: string } | ResetKataSandi>(e: React.ChangeEvent<HTMLInputElement>, setFormData: Dispatch<SetStateAction<T>>, formData: T) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const HandleForgotPasswordForm = <T extends { username_or_email: string }>(e: FormEvent, FormData: T, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string) => {
  MenanganiPengiriman(e, FormData, "lupa-kata-sandi", setErrorForm, XSRFToken);
};

export const HandleResetPasswordForm = <T extends ResetKataSandi>(e: FormEvent, FormData: T, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string) => {
  MenanganiPengiriman(e, FormData, "reset-kata-sandi", setErrorForm, XSRFToken);
};