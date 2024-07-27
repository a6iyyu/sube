import { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError } from "zod";
import { RegisterSkema, LoginSkema } from "~/utils/skema";
import { Users } from "~/types/users";

type TipeFormulir = "registrasi" | "masuk";

const MenanganiValidasi = (FormData: Users, FormType: TipeFormulir) => {
  try {
    FormType === "registrasi" ? RegisterSkema.parse(FormData) : LoginSkema.parse(FormData);
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

const MenanganiPengiriman = async <T extends Users>(e: FormEvent, FormData: T, FormType: TipeFormulir, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
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

    FormType === "registrasi" ? (response.status === 201 ? window.location.href = "http://localhost:2000/masuk" : setShowNotification({ showMessage: response.data.message, isVisible: true })) : (response.status === 200 ? window.location.href = "http://localhost:2000/dashboard" : setShowNotification({ showMessage: response.data.message, isVisible: true }));
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
  }
};

export const HandleRegisterSubmit = (e: FormEvent, registerData: Users, setErrorForm: Dispatch<SetStateAction<Partial<Users>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  MenanganiPengiriman(e, registerData, "registrasi", setErrorForm, XSRFToken, setShowNotification);
};

export const HandleLoginSubmit = (e: FormEvent, loginData: Users, setErrorForm: Dispatch<SetStateAction<Partial<Users>>>, XSRFToken: string, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  MenanganiPengiriman(e, loginData, "masuk", setErrorForm, XSRFToken, setShowNotification);
};