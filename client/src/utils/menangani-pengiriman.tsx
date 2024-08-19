import { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError, ZodSchema } from "zod";
import { Feedback } from "~/types/feedback";
import { Users } from "~/types/users";

const MenanganiValidasi = <T extends Feedback | Users>(
  skema: ZodSchema,
  formData: T,
) => {
  try {
    skema.parse(formData);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const SchemaError: any = {};
      e.errors.forEach(err => err.path.length && (SchemaError[err.path[0]] = err.message));
      return SchemaError;
    }
  }
};

export const MenanganiPengiriman = async <T extends Users>(
  e: FormEvent,
  skema: ZodSchema,
  formData: T,
  POSTRoute: string,
  GETRoute: string,
  setErrorForm: Dispatch<SetStateAction<Partial<T>>>,
  setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>,
) => {
  e.preventDefault();

  const ValidasiGagal = MenanganiValidasi(skema, formData);
  if (ValidasiGagal) return setErrorForm(ValidasiGagal);

  try {
    const response = await axios.post(`https://sube-server.vercel.app/${POSTRoute}`, formData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    response.status === 201 || response.status === 200 ? window.location.href = `https://sukabelajar.vercel.app/${GETRoute}` : setShowNotification({ showMessage: response.data.message || "Terjadi kesalahan!", isVisible: true });
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
  }
};

export const MenanganiKritikSaran = async <T extends Feedback>(
  e: FormEvent,
  skema: ZodSchema,
  formData: T,
  setErrorForm: Dispatch<SetStateAction<Partial<T>>>,
  setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>,
  resetForm: () => void,
) => {
  e.preventDefault();

  const ValidasiGagal = MenanganiValidasi(skema, formData);
  if (ValidasiGagal) return setErrorForm(ValidasiGagal);

  try {
    const response = await axios.post("https://sube-server.vercel.app/tentang-kami/kritik-dan-saran", formData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    response.status === 201 ? resetForm() : setShowNotification({ showMessage: response.data.message || "Terjadi kesalahan!", isVisible: true });
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
  }
};