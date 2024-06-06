import React from "react";
import { WebsiteMeta } from "../hooks/website-meta";
import { SignUpForm } from "../components/accounts/sign-up";

export const SignUpPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Daftarkan Dirimu Sekarang!" description="" icon="" />
      <SignUpForm />
    </>
  );
};