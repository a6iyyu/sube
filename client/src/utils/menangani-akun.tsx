import axios from "axios";
import React from "react";
import { z } from "zod";
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
    if (formType === "registrasi") {
      RegisterSkema.parse(formData as RegisterAttributes);
    } else {
      LoginSkema.parse(formData as LoginAttributes);
    }
    return null;
  } catch (e) {
    if (e instanceof z.ZodError) {
      const FieldError: any = {};
      e.errors.forEach(err => {
        if (err.path.length) FieldError[err.path[0]] = err.message;
      });
      return FieldError;
    }
    return { general: "Validasi gagal dilakukan!" };
  }
};

const MenanganiPengiriman = async (e: React.FormEvent, formData: RegisterAttributes | LoginAttributes, formType: TipeFormulir, setErrorForm: React.Dispatch<React.SetStateAction<Partial<RegisterAttributes | LoginAttributes>>>) => {
  e.preventDefault();
  const ValidasiGagal = MenanganiValidasi(formData, formType);

  if (ValidasiGagal) {
    setErrorForm(ValidasiGagal);
    return;
  }

  try {
    const response = await axios.post(formType === "registrasi" ? "http://localhost:2001/registrasi" : "http://localhost:2001/masuk", formData);
    
    if (response.status === 201) {
      console.log("Selamat, Anda berhasil registrasi dan membuat akun!");
    } else {
      console.error(`${response.data.message}`);
    }
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) console.error(e.message);
    console.error("Terjadi kesalahan yang tidak terduga");
  }
};

export const HandleChangeForm = <T extends RegisterAttributes | LoginAttributes>(e: React.ChangeEvent<HTMLInputElement>, setData: React.Dispatch<React.SetStateAction<T>>, data: T) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
}

export const HandleRegisterSubmit = (e: React.FormEvent, registerData: RegisterAttributes, setErrorForm: React.Dispatch<React.SetStateAction<Partial<RegisterAttributes>>>) => {
  MenanganiPengiriman(e, registerData, "registrasi", setErrorForm);
};

export const HandleLoginSubmit = (e: React.FormEvent, loginData: LoginAttributes, setErrorForm: React.Dispatch<React.SetStateAction<Partial<LoginAttributes>>>) => {
  MenanganiPengiriman(e, loginData, "masuk", setErrorForm);
};