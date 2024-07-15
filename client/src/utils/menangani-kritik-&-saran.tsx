import { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError } from "zod";
import { KritikSaranSkema } from "./skema";

interface KritikSaranAttributes {
  email: string;
  subject: string;
  description: string;
}

const MenanganiValidasi = (FormData: KritikSaranAttributes) => {
  try {
    KritikSaranSkema.parse(FormData);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const FieldError: any = {};
      e.errors.forEach((err) => {
        if (err.path.length) FieldError[err.path[0]] = err.message;
      });
      return FieldError;
    }
  }
};

const MenanganiPengiriman = async <T extends KritikSaranAttributes>(e: FormEvent, FormData: T, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string, setSuccessForm: Dispatch<SetStateAction<boolean>>, ResetForm: () => void) => {
  e.preventDefault();

  const ValidasiGagal = MenanganiValidasi(FormData);
  if (ValidasiGagal) return setErrorForm(ValidasiGagal);

  try {
    const response = await axios.post("http://localhost:2001/tentang-kami/kritik-dan-saran", FormData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": XSRFToken,
      },
      withCredentials: true,
    });
    response.status === 201 ? (setSuccessForm(true), ResetForm()) : console.error(`${response.data.message}`);
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(e.response.data);
  }
};

export const HandleSubmitForm = (e: FormEvent, FormData: KritikSaranAttributes, setErrorForm: Dispatch<SetStateAction<Partial<KritikSaranAttributes>>>, XSRFToken: string, setSuccessForm: Dispatch<SetStateAction<boolean>>, ResetForm: () => void) => {
  MenanganiPengiriman(e, FormData, setErrorForm, XSRFToken, setSuccessForm, ResetForm);
};