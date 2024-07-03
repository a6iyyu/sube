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
  if (ValidasiGagal) return setErrorForm(ValidasiGagal);

  try {
    const response = await axios.post(FormType === "registrasi" ? "http://localhost:2001/auth/registrasi" : "http://localhost:2001/auth/masuk", FormData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": CSRFToken,
      },
      withCredentials: true,
    });
    
    FormType === "registrasi" ? (response.status === 201 ? window.location.href = "http://localhost:2000/masuk" : console.error(`${response.data.message}`)) : (response.status === 200 ? window.location.href = "http://localhost:2000/dashboard" : console.error(`${response.data.message}`));
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(e.response.data);
  }
};

export const FetchCSRFToken = async (setCSRFToken: Dispatch<SetStateAction<string>>, FormType: TipeFormulir) => {
  try {
    const response = await axios.get(FormType === "registrasi" ? "http://localhost:2001/auth/registrasi" : "http://localhost:2001/auth/masuk", {
      withCredentials: true,
    });

    setCSRFToken(await response.data["XSRF-Token"]);
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data}`);
  }
};

export const HandleChangeForm = <T extends RegisterAttributes | LoginAttributes>(e: React.ChangeEvent<HTMLInputElement>, setFormData: Dispatch<SetStateAction<T>>, formData: T) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const HandleRegisterSubmit = (e: FormEvent, registerData: RegisterAttributes, setErrorForm: Dispatch<SetStateAction<Partial<RegisterAttributes>>>, CSRFToken: string) => {
  MenanganiPengiriman(e, registerData, "registrasi", setErrorForm, CSRFToken);
};

export const HandleLoginSubmit = (e: FormEvent, loginData: LoginAttributes, setErrorForm: Dispatch<SetStateAction<Partial<LoginAttributes>>>, CSRFToken: string) => {
  MenanganiPengiriman(e, loginData, "masuk", setErrorForm, CSRFToken);
};