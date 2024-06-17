import React from "react";
import { WebsiteMeta } from "../hooks/global/website-meta";
import { FormulirMasuk } from "../components/akun/masuk";

export const Masuk: React.FC = () => {
  return (
    <>
      <WebsiteMeta
        title="Masuk dan Jelajahi Kursus Kami"
        description=""
        icon=""
      />
      <FormulirMasuk />
    </>
  );
};