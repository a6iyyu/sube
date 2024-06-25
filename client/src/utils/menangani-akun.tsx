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

let CSRFToken: string = "";

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

const MenanganiPengiriman = async (e: FormEvent, formData: RegisterAttributes | LoginAttributes, formType: TipeFormulir, setErrorForm: Dispatch<SetStateAction<Partial<RegisterAttributes | LoginAttributes>>>) => {
  e.preventDefault();
  const ValidasiGagal = MenanganiValidasi(formData, formType);

  if (ValidasiGagal) {
    setErrorForm(ValidasiGagal);
    return;
  }

  try {
    if (!CSRFToken) await FetchCSRFToken();

    const response = await axios.post(formType === "registrasi" ? "http://localhost:2001/registrasi" : "http://localhost:2001/masuk", formData, {
      headers: {
        "X-CSRF-Token": CSRFToken,
      },
    });
    response.status !== 201 ? console.error(`${response.data.message}`) : null;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) console.error(e.message);
  }
};

export const HandleChangeForm = <T extends RegisterAttributes | LoginAttributes>(e: React.ChangeEvent<HTMLInputElement>, setData: Dispatch<SetStateAction<T>>, data: T) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
};

export const FetchCSRFToken = async () => {
  try {
    const response = await axios.get("http://localhost:2001/csrf-token");
    CSRFToken = response.headers["X-CSRF-Token"];
  } catch (e) {
    console.error(e);
  }
};

export const HandleRegisterSubmit = (e: FormEvent, registerData: RegisterAttributes, setErrorForm: Dispatch<SetStateAction<Partial<RegisterAttributes>>>) => {
  MenanganiPengiriman(e, registerData, "registrasi", setErrorForm);
};

export const HandleLoginSubmit = (e: FormEvent, loginData: LoginAttributes, setErrorForm: Dispatch<SetStateAction<Partial<LoginAttributes>>>) => {
  MenanganiPengiriman(e, loginData, "masuk", setErrorForm);
};