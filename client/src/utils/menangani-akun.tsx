import React, { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError } from "zod";
import { RegisterSkema, LoginSkema } from "~/utils/skema";

type TipeFormulir = "registrasi" | "masuk";

interface RegisterAttributes {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface LoginAttributes {
  username_or_email: string;
  password: string;
}

const MenanganiValidasi = (FormData: RegisterAttributes | LoginAttributes, FormType: TipeFormulir) => {
  try {
    FormType === "registrasi" ? RegisterSkema.parse(FormData as RegisterAttributes) : LoginSkema.parse(FormData as LoginAttributes);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const FieldError: any = {};
      e.errors.forEach(err => {
        if (err.path.length) FieldError[err.path[0]] = err.message;
      });
      return FieldError;
    }
    return { general: "Validasi gagal dilakukan!" };
  }
};

const MenanganiPengiriman = async <T extends RegisterAttributes | LoginAttributes>(e: FormEvent, FormData: T, FormType: TipeFormulir, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, CSRFToken: string) => {
  e.preventDefault();
  const ValidasiGagal = MenanganiValidasi(FormData, FormType);

  if (ValidasiGagal) {
    setErrorForm(ValidasiGagal);
    return;
  }

  try {
    const response = await axios.post(FormType === "registrasi" ? "http://localhost:2001/registrasi" : "http://localhost:2001/masuk", FormData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": CSRFToken,
      },
      withCredentials: true,
    });
    response.status !== 201 ? console.error(`${response.data.message}`) : (FormType === "registrasi" ? window.location.href = "http://localhost:2000/masuk" : window.location.href = "http://localhost:2000/dashboard");
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(e.response.data);
  }
};

export const FetchCSRFToken = async (setCSRFToken: Dispatch<SetStateAction<string>>, FormType: TipeFormulir) => {
  try {
    const response = await axios.get(FormType === "registrasi" ? "http://localhost:2001/registrasi" : "http://localhost:2001/masuk", {
      withCredentials: true,
    });

    const data = await response.data["XSRF-Token"];
    setCSRFToken(data);
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data}`);
  }
};

export const HandleChangeForm = <T extends RegisterAttributes | LoginAttributes>(e: React.ChangeEvent<HTMLInputElement>, setData: Dispatch<SetStateAction<T>>, data: T) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
};

export const HandleRegisterSubmit = (e: FormEvent, registerData: RegisterAttributes, setErrorForm: Dispatch<SetStateAction<Partial<RegisterAttributes>>>, CSRFToken: string) => {
  MenanganiPengiriman(e, registerData, "registrasi", setErrorForm, CSRFToken);
};

export const HandleLoginSubmit = (e: FormEvent, loginData: LoginAttributes, setErrorForm: Dispatch<SetStateAction<Partial<LoginAttributes>>>, CSRFToken: string) => {
  MenanganiPengiriman(e, loginData, "masuk", setErrorForm, CSRFToken);
};