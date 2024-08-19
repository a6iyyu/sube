import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const MenanganiPerubahanFormulir = <T extends Object>(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFormData: Dispatch<SetStateAction<T>>, formData: T) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};