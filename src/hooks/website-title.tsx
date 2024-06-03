import { useEffect } from "react";

export const Title = (title: string) => {
  useEffect(() => {
    document.title = title;
  });
};