import React from "react";
import { WebsiteMeta } from "../hooks/global/website-meta";
import { SignInForm } from "../components/accounts/sign-in";

export const SignInPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta
        title="Masuk dan Jelajahi Kursus Kami"
        description=""
        icon=""
      />
      <SignInForm />
    </>
  );
};