import { Dispatch, SetStateAction } from "react";
import { isAxiosError } from "axios";

export const UpdateProfilePicture = async (_: Dispatch<SetStateAction<string>>) => {
  try {
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data.message}`);
  }
};

export const UpdateDataUser = async (_: Dispatch<SetStateAction<string>>) => {
  try {
  } catch (e) {
    if (isAxiosError(e) && e.response) console.error(`${e.response.data.message}`);
  }
};