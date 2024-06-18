import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { FormulirRegistrasi } from "~/components/akun/registrasi";

export const Registrasi: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Daftarkan Dirimu Sekarang!" description="" icon="" />
      <FormulirRegistrasi />
    </>
  );
};