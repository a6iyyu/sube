import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { FormulirRegistrasi } from "~/components/akun/registrasi";

export const Registrasi: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Daftarkan Dirimu Sekarang!" description="" />
      <FormulirRegistrasi />
    </>
  );
};