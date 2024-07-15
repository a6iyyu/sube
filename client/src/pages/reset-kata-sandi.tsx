import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { HandleCSRF } from "~/utils/menangani-csrf";
import { HandleResetPasswordForm } from "~/utils/menangani-lupa-kata-sandi";
import { HandleChangeForm } from "~/utils/menangani-perubahan-formulir";

export const ResetKataSandi: React.FC = () => {
  const [XSRFToken, setXSRFToken] = useState<string>("");
  const [errorForm, setErrorForm] = useState<Partial<typeof resetPasswordData>>({});
  const [resetPasswordData, setResetPasswordData] = useState<{ password: string, confirm_password: string }>({ password: "", confirm_password: "" });

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => HandleChangeForm(e, setResetPasswordData, resetPasswordData);
  const HandleSubmit = (e: FormEvent) => HandleResetPasswordForm(e, resetPasswordData, setErrorForm, XSRFToken);

  useEffect(() => {
    HandleCSRF(setXSRFToken, "auth", "reset-kata-sandi");
  }, []);

  return (
    <>
      <WebsiteMeta title="Atur Ulang Kata Sandi Anda" description="" />
      <main className="grid h-[50rem] max-h-[300vh] w-full grid-cols-1 overflow-x-hidden bg-gradient-to-r from-[#0c0c1e] to-[#141414] lg:max-h-[200vh] lg:grid-cols-2">
        <span className="absolute left-0 top-0 h-40 w-40 bg-[#1fddff] opacity-80 [filter:blur(8rem)]" />
        <section className="flex h-full w-full flex-col items-center justify-center text-slate-50">
          <img src="/logo.png?url" alt="Logo" className="w-32 italic" />
          <h3 className="mx-auto mt-10 h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
            Reset Kata Sandi
          </h3>
          <form onSubmit={HandleSubmit} className="mx-auto mt-10 h-fit w-4/5">
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">
                Kata Sandi Baru
              </label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Kata Sandi Baru"
                className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={resetPasswordData.password}
              />
              {errorForm.password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.password}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm_password" className="mt-5 font-semibold">
                Kata Sandi Baru
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Konfirmasi Kata Sandi Baru"
                className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={resetPasswordData.password}
              />
              {errorForm.confirm_password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.confirm_password}</span>}
            </div>
            <button type="submit" className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#0000ee] py-4 text-base font-semibold transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#4d4dff]">
              Reset Kata Sandi
            </button>
          </form>
        </section>
        <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-cover bg-center bg-no-repeat text-slate-50 lg:flex" style={{ backgroundImage: `url()` }} />
      </main>
    </>
  );
};