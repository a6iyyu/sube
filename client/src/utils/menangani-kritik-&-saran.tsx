import { Dispatch, FormEvent, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import axios, { isAxiosError } from "axios";
import { ZodError } from "zod";
import { KritikSaranSkema } from "./skema";

interface KritikSaranAttributes {
  username: string;
  email: string;
  kritik_dan_saran: string;
}

const navigate = useNavigate();

const MenanganiValidasi = (FormData: KritikSaranAttributes) => {
  try {
    KritikSaranSkema.parse(FormData);
    return null;
  } catch (e) {
    if (e instanceof ZodError) {
      const FieldError: any = {};
      e.errors.forEach((err) => {
        if (err.path.length) FieldError[err.path[0]] === err.message;
      });
      return FieldError;
    }
  }
};

const MenanganiPengiriman = async <T extends KritikSaranAttributes>(e: FormEvent, FormData: T, setErrorForm: Dispatch<SetStateAction<Partial<T>>>, XSRFToken: string) => {
  e.preventDefault();
  const ValidasiGagal = MenanganiValidasi(FormData);

  if (ValidasiGagal) {
    setErrorForm(ValidasiGagal);
    return;
  }

  try {
    const response = await axios.post("http://localhost:2001/tentang-kami/kritik-dan-saran", FormData, {
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": XSRFToken,
      },
      withCredentials: true,
    });
    response.status !== 201 ? console.error(`${response.data.message}`) : navigate("http://localhost:/2000/tentang-kami/berhasil");
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(e.response.data);
  }
};

export const FetchCSRFToken = async (setCSRFToken: Dispatch<SetStateAction<string>>) => {
  try {
    const response = await axios.get("http://localhost:2001/tentang-kami/kritik-dan-saran", {
      withCredentials: true,
    });
    
    const data = await response.data["XSRF-Token"];
    setCSRFToken(data);
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(e.response.data);
  }
};

export const HandleChangeForm = <T extends KritikSaranAttributes>(e: React.ChangeEvent<HTMLInputElement>, setFormData: Dispatch<SetStateAction<T>>, FormData: T) => {
  const { name, value } = e.target;
  setFormData({ ...FormData, [name]: value });
};

export const HandleSubmit = (e: FormEvent, FormData: KritikSaranAttributes, setErrorForm: Dispatch<SetStateAction<Partial<KritikSaranAttributes>>>, XSRFToken: string) => {
  MenanganiPengiriman(e, FormData, setErrorForm, XSRFToken);
};