import { Dispatch, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { Users } from "~/types/users";

export const UpdateProfilePicture = async (setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  try {
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
  }
};

export const UpdateDataUser = async (setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>, formData: Users, setUpdateUserData: Dispatch<SetStateAction<string>>) => {
  try {
    const response = await axios.patch("https://sube-server.vercel.app/auth/dashboard", formData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (response.status !== 200) setShowNotification({ showMessage: response.data.message || "Terjadi kesalahan!", isVisible: true });
    setUpdateUserData(response.data);
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
  }
};