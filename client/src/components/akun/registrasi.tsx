import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FetchXSRFToken, HandleChangeForm, HandleRegisterSubmit } from "~/utils/menangani-akun";
import School from "/school.jpg?url";

export const FormulirRegistrasi: React.FC = () => {
  const centang = useRef<HTMLDivElement | null>(null);
  const kata_sandi = useRef<HTMLInputElement | null>(null);
  const konfirmasi_kata_sandi = useRef<HTMLInputElement | null>(null);
  const [XSRFToken, setXSRFToken] = useState<string>("");
  const [errorForm, setErrorForm] = useState<Partial<typeof registerData>>({});
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const ToggleChecked = () => {
    if (centang.current && kata_sandi.current && konfirmasi_kata_sandi.current) (kata_sandi.current as HTMLInputElement || null).type = (konfirmasi_kata_sandi.current as HTMLInputElement || null).type = centang.current!.querySelector("input")!.checked ? "text" : "password";
  };

  useEffect(() => {
    FetchXSRFToken(setXSRFToken, "registrasi");
    if (centang.current) centang.current.addEventListener("click", ToggleChecked);
    return () => {
      if (centang.current) centang.current.removeEventListener("click", ToggleChecked);
    }
  }, [centang.current]);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => HandleChangeForm(e, setRegisterData, registerData);
  const HandleSubmit = (e: FormEvent) => HandleRegisterSubmit(e, registerData, setErrorForm, XSRFToken);

  return (
    <main className="grid h-[80rem] max-h-[300vh] w-full grid-cols-1 overflow-x-hidden bg-gradient-to-r from-[#0c0c1e] to-[#141414] lg:max-h-[200vh] lg:grid-cols-2">
      <span className="absolute left-0 top-0 h-40 w-40 bg-[#1fddff] opacity-80 [filter:blur(8rem)]" />
      <section className="flex h-full w-full flex-col items-center justify-center text-slate-50">
        <img src="/logo.png?url" alt="Logo" className="w-32 italic" />
        <h3 className="mx-auto mt-10 h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
          Buat Akun
        </h3>
        <h5 className="mx-auto mt-3 h-fit w-4/5 cursor-default text-center text-lg font-medium">
          Jadilah bagian dari generasi unggul!
        </h5>
        <form onSubmit={HandleSubmit} className="mx-auto mt-10 h-fit w-4/5">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Masukkan Nama"
              className="mt-4 rounded-lg px-6 py-4 text-slate-950 focus:outline-none lg:px-4 lg:py-3"
              onChange={HandleChange}
              value={registerData.username}
            />
            {errorForm.username && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.username}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mt-5 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan Surel"
              className="mt-4 rounded-lg px-6 py-4 text-slate-950 focus:outline-none lg:px-4 lg:py-3"
              onChange={HandleChange}
              value={registerData.email}
            />
            {errorForm.email && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.email}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mt-5 font-semibold">
              Password
            </label>
            <input
              ref={kata_sandi}
              type="password"
              name="password"
              placeholder="Masukkan Kata Sandi"
              className="mt-4 rounded-lg px-6 py-4 text-slate-950 focus:outline-none lg:px-4 lg:py-3"
              onChange={HandleChange}
              value={registerData.password}
            />
            {errorForm.password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.password}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm_password" className="mt-5 font-semibold">
              Confirm Password
            </label>
            <input
              ref={konfirmasi_kata_sandi}
              type="password"
              name="confirm_password"
              placeholder="Konfirmasi Kata Sandi"
              className="mt-4 rounded-lg px-6 py-4 text-slate-950 focus:outline-none lg:px-4 lg:py-3"
              onChange={HandleChange}
              value={registerData.confirm_password}
            />
            {errorForm.confirm_password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.confirm_password}</span>}
          </div>
          <div className="mt-5 flex flex-col justify-between sm:flex-row">
            <span ref={centang} className="h-fit w-fit">
              <input type="checkbox" name="centang" id="centang" className="cursor-pointer" />
              <label htmlFor="centang" className="ml-3 cursor-pointer">
                Tampilkan Kata Sandi
              </label>
            </span>
            <span className="mt-2 flex h-fit w-fit items-start text-[#a0a0ff] transition-all duration-300 ease-in-out sm:mt-0 lg:items-end">
              <Link to={`/masuk`} className="hover:text-[#babaff] hover:underline">
                Sudah punya akun?
              </Link>
            </span>
          </div>
          <button type="submit" className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#0000ee] py-4 text-base font-semibold transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#4d4dff]">
            Registrasi
          </button>
        </form>
        <span className="h-fit w-4/5">
          <Link to={`/auth/google`}>
            <button type="submit" className="mx-auto mt-7 flex h-fit w-full items-center justify-center gap-x-3 rounded-lg bg-slate-50 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-300 md:py-5">
              <img src="/google.png?url" alt="" className="h-5 w-5" />
              <h5>Masuk dengan Google</h5>
            </button>
          </Link>
        </span>
        <Link to={`/`} className="mx-auto mt-10 flex h-fit w-4/5 items-center justify-center font-semibold transition-all duration-300 ease-in-out lg:hover:text-slate-200 lg:hover:underline">
          <i className="fa-solid fa-arrow-left" />
          <h4>&emsp;Kembali Ke Halaman Awal</h4>
        </Link>
      </section>
      <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-cover bg-center bg-no-repeat text-slate-50 lg:flex" style={{ backgroundImage: `url(${School})` }}>
        <span className="absolute"></span>
        <h3></h3>
      </section>
    </main>
  );
};