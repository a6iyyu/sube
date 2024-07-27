import { Dispatch, SetStateAction } from "react";
import axios, { isAxiosError } from "axios"
import { Users } from "~/types/users";

export const MengambilDataPengguna = async (setGetUserData: Dispatch<SetStateAction<Users[]>>, setShowNotification: Dispatch<SetStateAction<{ showMessage: string, isVisible: boolean }>>) => {
  try {
    const response = await axios.get("http://localhost:2001/dashboard", { withCredentials: true });
    if (response.status !== 200) setShowNotification({ showMessage: response.data.message, isVisible: true });
    setGetUserData(response.data.FindUser);
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true }); 
  }
}