import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import { RegisterSkema } from "./skema";
import School from "/school.jpg?url";

interface RegisterAttributes {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const FormulirRegistrasi: React.FC = () => {
  const centang = useRef<HTMLDivElement | null>(null);
  const kata_sandi = useRef<HTMLInputElement | null>(null);
  const konfirmasi_kata_sandi = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [errorForm, setErrorForm] = useState<Partial<RegisterAttributes>>({});
  const [registerData, setRegisterData] = useState<RegisterAttributes>({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const HandleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      RegisterSkema.parse(registerData);
      const response = await axios.post("http://localhost:2001/auth/registrasi", registerData);
      if (response.status === 201) {
        console.log("Selamat, Anda berhasil registrasi dan membuat akun!");
        navigate("/masuk");
      } else {
        console.error(`Maaf, regitrasi Anda mengalami kesalahan karena ${response.data.message}`);
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        const FieldError: Partial<RegisterAttributes> = {};
        e.errors.forEach(err => {
          if (err.path.length) {
            FieldError[err.path[0] as keyof RegisterAttributes] = err.message;
          }
        });
        setErrorForm(FieldError);
      }

      if (axios.isAxiosError(e) && e.response) throw e;
    }
  };

  const ToggleChecked = () => {
    if (centang.current && kata_sandi.current && konfirmasi_kata_sandi.current) {
      (kata_sandi.current as HTMLInputElement || null).type = (konfirmasi_kata_sandi.current as HTMLInputElement || null).type = centang.current!.querySelector("input")!.checked ? "text" : "password";
    }
  };

  useEffect(() => {
    if (centang.current) centang.current.addEventListener("click", ToggleChecked);
    return () => {
      if (centang.current) centang.current.removeEventListener("click", ToggleChecked);
    }
  }, []);

  return (
    <main className="grid h-[70rem] max-h-[300vh] w-full grid-cols-1 overflow-x-hidden bg-gradient-to-r from-[#0c0c1e] to-[#141414] lg:max-h-[200vh] lg:grid-cols-2">
      <span className="absolute left-0 top-0 h-40 w-40 bg-[#1fddff] opacity-80 [filter:blur(8rem)]" />
      <section className="flex h-full w-full flex-col items-center justify-center text-slate-50">
        <img src="" alt="Logo" className="h-16 w-16 italic" />
        <h3 className="mx-auto h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
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
              onChange={HandleChangeForm}
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
              onChange={HandleChangeForm}
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
              onChange={HandleChangeForm}
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
              onChange={HandleChangeForm}
              value={registerData.confirm_password}
            />
            {errorForm.confirm_password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.confirm_password}</span>}
          </div>
          <div ref={centang} className="mt-5 h-fit w-fit">
            <input type="checkbox" name="centang" id="centang" className="cursor-pointer" />
            <label htmlFor="centang" className="ml-3 cursor-pointer">Tampilkan Kata Sandi</label>
          </div>
          <button className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#0000ee] py-4 text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#4d4dff] md:py-5">
            Registrasi
          </button>
        </form>
        <span className="h-fit w-4/5">
          <Link to={`/auth/google`}>
            <button className="mx-auto mt-7 flex h-fit w-full items-center justify-center gap-x-3 rounded-lg bg-slate-50 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-300 md:py-5">
              <img src="/google.png?url" alt="" className="h-5 w-5" />
              <h5>Masuk dengan Google</h5>
            </button>
          </Link>
        </span>
      </section>
      <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-cover bg-center bg-no-repeat text-slate-50 lg:flex" style={{ backgroundImage: `url(${School})` }}>
        <span className="absolute"></span>
        <h3></h3>
      </section>
    </main>
  );
};