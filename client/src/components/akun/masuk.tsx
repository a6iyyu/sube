import React, { useState } from "react";
import { z } from "zod";
import { LoginSkema } from "./skema";

interface LoginAttributes {
  email: string;
  password: string;
}

export const FormulirMasuk: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginAttributes>({
    email: "",
    password: "",
  });

  return (
    <main className="grid max-h-[200vh] grid-cols-1 overflow-x-hidden bg-gradient-to-r from-[#0c0c1e] to-[#141414] sm:max-h-[150vh] lg:max-h-screen lg:grid-cols-2">
      <section className="flex h-full w-full flex-col items-center justify-center">
        <h3>Selamat Datang Kembali!</h3>
      </section>
      <section className="flex h-full w-full cursor-default flex-col items-end justify-center bg-cover bg-center bg-no-repeat text-slate-50">
        <span className="absolute"></span>
        <h3></h3>
      </section>
    </main>
  );
};