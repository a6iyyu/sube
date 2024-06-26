import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FetchCSRFToken, HandleChangeForm, HandleLoginSubmit } from "~/utils/menangani-akun";
import Student3 from "/student-3.jpg?url"

interface LoginAttributes {
  username_or_email: string;
  password: string;
}

export const FormulirMasuk: React.FC = () => {
  const centang = useRef<HTMLInputElement | null>(null);
  const kata_sandi = useRef<HTMLInputElement | null>(null);
  const [CSRFToken, setCSRFToken] = useState<string>("");
  const [errorForm, setErrorForm] = useState<Partial<LoginAttributes>>({});
  const [loginData, setLoginData] = useState<LoginAttributes>({
    username_or_email: "",
    password: "",
  });

  const ToggleVisible = () => {
    if (centang.current && kata_sandi.current) {
      (kata_sandi.current as HTMLInputElement || null).type = centang.current!.querySelector("input")!.checked ? "text" : "password";
    }
  };

  useEffect(() => {
    FetchCSRFToken(setCSRFToken, "masuk");
    if (centang.current) centang.current.addEventListener("click", ToggleVisible);
    return () => {
      if (centang.current) centang.current.removeEventListener("click", ToggleVisible);
    };
  }, [centang.current]);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => HandleChangeForm(e, setLoginData, loginData);
  const HandleSubmit = async (e: React.FormEvent) => HandleLoginSubmit(e, loginData, setErrorForm, CSRFToken);

  return (
    <main className="grid h-[55rem] max-h-[300vh] w-full grid-cols-1 overflow-x-hidden bg-gradient-to-r from-[#0c0c1e] to-[#141414] lg:max-h-[200vh] lg:grid-cols-2">
      <span className="absolute left-0 top-0 h-40 w-40 bg-[#ff1fa9] opacity-80 [filter:blur(8rem)]" />
      <section className="flex h-full w-full flex-col items-center justify-center text-slate-50">
        <img src="" alt="Logo" className="h-16 w-16 italic" />
        <h3 className="mx-auto h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
          Selamat Datang!
        </h3>
        <h5 className="mx-auto mt-3 h-fit w-4/5 cursor-default text-center text-lg font-medium">
          Siapkah Anda menjadi yang terdepan?
        </h5>
        <form onSubmit={HandleSubmit} className="mx-auto mt-10 h-fit w-4/5">
          {/* <input type="hidden" name="_csrf" value={GetCSRFToken() || ""} /> */}
          <div className="flex flex-col">
            <label htmlFor="username_or_email">Username/Email</label>
            <input
              type="text"
              name="username_or_email"
              placeholder="Masukkan Nama"
              className="mt-4 rounded-lg px-6 py-4 text-slate-950 focus:outline-none lg:px-4 lg:py-3"
              onChange={HandleChange}
            />
            {errorForm.username_or_email && (<span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.username_or_email}</span>)}
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
            />
            {errorForm.password && (<span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.password}</span>)}
          </div>
          <div className="mt-5 flex flex-col justify-between sm:flex-row">
            <span ref={centang} className="h-fit w-fit">
              <input type="checkbox" name="centang" id="centang" className="cursor-pointer" />
              <label htmlFor="centang" className="ml-3 cursor-pointer">
                Tampilkan Kata Sandi
              </label>
            </span>
            <span className="mt-2 flex h-fit w-fit flex-col items-start text-[#a0a0ff] transition-all duration-300 ease-in-out sm:mt-0 lg:items-end">
              <Link to={`/registrasi`} className="hover:text-[#babaff] hover:underline">
                Belum punya akun?
              </Link>
              <Link to={`/lupa-kata-sandi`} className="mt-0.5 hover:text-[#babaff] hover:underline">
                Lupa kata sandi?
              </Link>
            </span>
          </div>
          <button className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#0000ee] py-4 text-base font-semibold transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#4d4dff]">
            Masuk
          </button>
        </form>
        <span className="h-fit w-4/5">
          <Link to={`/auth/goole`}>
            <button className="mx-auto mt-7 flex h-fit w-full items-center justify-center gap-x-3 rounded-lg bg-slate-50 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-300 md:py-5">
              <img src="/google.png?url" alt="" className="h-5 w-5" />
              <h5>Masuk dengan Google</h5>
            </button>
          </Link>
        </span>
      </section>
      <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-cover bg-center bg-no-repeat text-slate-50 lg:flex" style={{ backgroundImage: `url(${Student3})` }}>
        <span className="absolute"></span>
        <h3></h3>
      </section>
    </main>
  );
};