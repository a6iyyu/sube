import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { blogs } from "~/types/blogs";

export const ImporBlog = async (setImportBlogs: Dispatch<SetStateAction<blogs[]>>) => {
  try {
    const response = await axios.get("https://sube-server.vercel.app/blog");
    setImportBlogs(response.data);
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) console.error(e.message);
  }
};