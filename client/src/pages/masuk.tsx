import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { FormulirMasuk } from "~/components/akun/masuk";

export const Masuk: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Masuk dan Jelajahi Kursus Kami" description="" />
      <FormulirMasuk />
    </>
  );
};