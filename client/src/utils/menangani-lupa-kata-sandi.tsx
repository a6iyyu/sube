import { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError } from "zod";
import { LupaKataSandiSkema, ResetKataSandiSkema } from "./skema";
import { resetpassword } from "~/types/users";

type TipeFormulir = "lupa-kata-sandi" | "reset-kata-sandi";

const MenanganiValidasi = (FormData: { username_or_email: string } | resetpassword, FormType: TipeFormulir) => {
  try {
    FormType === "lupa-kata-sandi" ? LupaKataSandiSkema.parse(FormData as { username_or_email: string }) : ResetKataSandiSkema.parse(FormData as resetpassword);
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

const MenanganiPengiriman = async <T extends { username_or_email: string } | resetpassword>(e: FormEvent, FormData: T, FormType: TipeFormulir, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
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
    response.status === 200 ? (FormType === "lupa-kata-sandi" ? window.location.href = "http://localhost:2000/reset-kata-sandi" : setShowNotification({ showMessage: response.data.message, isVisible: true })) : (FormType === "reset-kata-sandi" ? window.location.href = "http://localhost:2000/masuk" : setShowNotification({ showMessage: response.data.message, isVisible: true }));
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data}`);
  }
};

export const HandleForgotPasswordForm = <T extends { username_or_email: string }>(e: FormEvent, forgotPasswordData: T, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  MenanganiPengiriman(e, forgotPasswordData, "lupa-kata-sandi", setErrorForm, XSRFToken, setShowNotification);
};

export const HandleResetPasswordForm = <T extends resetpassword>(e: FormEvent, resetPasswordData: T, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  MenanganiPengiriman(e, resetPasswordData, "reset-kata-sandi", setErrorForm, XSRFToken, setShowNotification);
};