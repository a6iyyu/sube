import { Dispatch, FormEvent, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { ZodError, ZodSchema } from "zod";
import { Feedback } from "~/types/feedback";
import { Users } from "~/types/users";

const MenanganiValidasi = <T extends Feedback | Users>(
  Skema: ZodSchema,
  FormData: T,
) => {
  try {
    Skema.parse(FormData);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const SchemaError: any = {};
      e.errors.forEach(err => err.path.length && (SchemaError[err.path[0]] = err.message));
      return SchemaError;
    }
  }
};

// prettier-ignore
export const MenanganiPengiriman = async <T extends Feedback | Users>(
  e: FormEvent,
  Skema: ZodSchema,
  FormData: T,
  setErrorForm: Dispatch<SetStateAction<Partial<T>>>,
  setShowNotification: Dispatch<SetStateAction<{ showMessage: string; isVisible: boolean }>> | null,
  setSuccessForm: Dispatch<SetStateAction<boolean>> | null,
  POSTRoute: string | T,
  GETRoute: string | null,
  XSRFToken: string,
  ResetForm: () => void | null,
) => {
  e.preventDefault();

  const ValidasiGagal = MenanganiValidasi(Skema, FormData);
  if (ValidasiGagal) return setErrorForm(ValidasiGagal);

  try {
    const response = await axios.post(`http://sube-server.vercel.app/${POSTRoute}`, FormData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": XSRFToken,
      },
      withCredentials: true,
    });

    POSTRoute ? (response.status === 201 || response.status === 200 ? window.location.href = `http://sukabelajar.vercel.app/${GETRoute}` : (setShowNotification && setShowNotification({ showMessage: response.data.message, isVisible: true }))) : (response.status === 200 ? window.location.href = `http://sukabelajar.vercel.app/${GETRoute}` : (setShowNotification && setShowNotification({ showMessage: response.data.message, isVisible: true })));
    POSTRoute === "tentang-kami/kritik-dan-saran" && response.status === 201 ? (setSuccessForm && setSuccessForm(true), ResetForm()) : (setShowNotification && setShowNotification({ showMessage: response.data.message, isVisible: true }));
  
    const NotificationTimeout = setTimeout(() => setShowNotification && setShowNotification({ showMessage: "", isVisible: false }), 3000);
    return () => clearTimeout(NotificationTimeout);
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification && setShowNotification({ showMessage: e.response.data.message, isVisible: true });
  }
};