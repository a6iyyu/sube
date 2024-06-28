import axios from "axios";
import React, { Dispatch, FormEvent, SetStateAction } from "react";
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

const MenanganiValidasi = (formData: RegisterAttributes | LoginAttributes, formType: TipeFormulir) => {
  try {
    formType === "registrasi" ? RegisterSkema.parse(formData as RegisterAttributes) : LoginSkema.parse(formData as LoginAttributes);
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

const MenanganiPengiriman = async <T extends RegisterAttributes | LoginAttributes>(e: FormEvent, formData: T, formType: TipeFormulir, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, CSRFToken: string) => {
  e.preventDefault();
  const ValidasiGagal = MenanganiValidasi(formData, formType);

  if (ValidasiGagal) {
    setErrorForm(ValidasiGagal);
    return;
  }

  try {
    const response = await axios.post(formType === "registrasi" ? "http://localhost:2001/registrasi" : "http://localhost:2001/masuk", formData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": CSRFToken,
      },
      withCredentials: true,
    });
    response.status !== 201 ? console.error(`${response.data.message}`) : (formType === "registrasi" ? window.location.href = "http://localhost:2000/masuk" : window.location.href = "http://localhost:2000/dashboard");
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) console.error(e.response.data);
  }
};

export const FetchCSRFToken = async (setCSRFToken: Dispatch<SetStateAction<string>>, formType: TipeFormulir) => {
  try {
    const response = await axios.get(formType === "registrasi" ? "http://localhost:2001/registrasi" : "http://localhost:2001/masuk", {
      withCredentials: true,
    });

    const data = await response.data["XSRF-Token"];
    setCSRFToken(data);
  } catch (e) {
    console.error("Tidak bisa mendapatkan token CSRF karena " + e);
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