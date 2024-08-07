import { Dispatch, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";

export const HandleCSRF = async (setXSRFToken: Dispatch<SetStateAction<string>>, paramater: string, route: string) => {
  try {
    const response = await axios.get(`http://sube-server.vercel.app/${paramater}/${route}`, { withCredentials: true });
    setXSRFToken(await response.data["XSRF-Token"]);
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data.message}`);
  }
};