import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ForgotPasswordForm } from "~/components/akun/lupa-kata-sandi";

export const LupaKataSandi: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Lupa Kata Sandi?" description="" />
      <ForgotPasswordForm />
    </>
  );
};