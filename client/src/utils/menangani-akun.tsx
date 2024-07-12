import React, { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError } from "zod";
import { RegisterSkema, LoginSkema } from "~/utils/skema";
import { registerusers, loginusers } from "~/types/users";

type TipeFormulir = "registrasi" | "masuk";

const MenanganiValidasi = (FormData: registerusers | loginusers, FormType: TipeFormulir) => {
  try {
    FormType === "registrasi" ? RegisterSkema.parse(FormData as registerusers) : LoginSkema.parse(FormData as loginusers);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const FieldError: any = {};
      e.errors.forEach(err => {
        if (err.path.length) FieldError[err.path[0]] = err.message;
      });
      return FieldError;
    }
  }
};

const MenanganiPengiriman = async <T extends registerusers | loginusers>(e: FormEvent, FormData: T, FormType: TipeFormulir, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  e.preventDefault();

  const ValidasiGagal = MenanganiValidasi(FormData, FormType);
  if (ValidasiGagal) return setErrorForm(ValidasiGagal);

  try {
    const response = await axios.post(FormType === "registrasi" ? "http://localhost:2001/auth/registrasi" : "http://localhost:2001/auth/masuk", FormData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": XSRFToken,
      },
      withCredentials: true,
    });

    FormType === "registrasi" ? (response.status === 201 ? window.location.href = "http://localhost:2000/masuk" : setShowNotification({ showMessage: response.data.message || "", isVisible: true })) : (response.status === 200 ? window.location.href = "http://localhost:2000/dashboard" : setShowNotification({ showMessage: response.data.message || "", isVisible: true }));
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
  }
};

export const FetchXSRFToken = async (setXSRFToken: Dispatch<SetStateAction<string>>, FormType: TipeFormulir) => {
  try {
    const response = await axios.get(FormType === "registrasi" ? "http://localhost:2001/auth/registrasi" : "http://localhost:2001/auth/masuk", { withCredentials: true });
    setXSRFToken(await response.data["XSRF-Token"]);
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data}`);
  }
};

export const HandleChangeForm = <T extends registerusers | loginusers>(e: React.ChangeEvent<HTMLInputElement>, setFormData: Dispatch<SetStateAction<T>>, formData: T) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const HandleRegisterSubmit = (e: FormEvent, registerData: registerusers, setErrorForm: Dispatch<SetStateAction<Partial<registerusers>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  MenanganiPengiriman(e, registerData, "registrasi", setErrorForm, XSRFToken, setShowNotification);
};

export const HandleLoginSubmit = (e: FormEvent, loginData: loginusers, setErrorForm: Dispatch<SetStateAction<Partial<loginusers>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  MenanganiPengiriman(e, loginData, "masuk", setErrorForm, XSRFToken, setShowNotification);
};