import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const Menus: string[] = [ "Blog", "Kursus", "Tantangan", "FAQ", "Hubungi Kami"];

  return (
    <footer className="z-0 -mt-16 h-fit w-full bg-gradient-to-r from-[#141b1f] to-[#1a1f25] py-24 [border-radius:45%_55%_10%_10%_/_2.5%_2.5%_0%_0%] lg:-mt-10 lg:[border-radius:20%_20%_10%_10%_/_10%_10%_0%_0%]">
      <main className="mx-auto mt-10 flex h-full w-4/5 flex-col gap-x-10 text-slate-50 lg:flex-row">
        <section className="flex h-full w-full cursor-default flex-col lg:w-1/3">
          <img src="" alt="Logo" className="mx-auto font-bold italic lg:mx-0" />
          <h4 className="mt-7 text-center text-2xl font-semibold lg:text-left">
            E-Learning Sube
          </h4>
          <h5 className="mt-4 text-justify text-base font-thin [text-align-last:center] lg:text-justify lg:[text-align-last:left]">
            Sube berupaya dan mendukung dalam mencerdaskan anak bangsa serta
            merupakan langkah kecil untuk mewujudkan cita-cita Indonesia di
            bidang kepemimpinan.
          </h5>
        </section>
        <section className="grid h-full w-full grid-cols-1 grid-rows-2 lg:w-2/3 lg:grid-cols-2 lg:grid-rows-1">
          <div className="mt-14 lg:mt-0">
            <h3 className="cursor-default text-xl font-extrabold leading-normal tracking-wide lg:text-2xl">
              Learn Today
              <br />
              Lead Tomorrow
            </h3>
            <Link to={`/tentang-kami`}>
              <h2 className="group mt-2 text-slate-50 transition-all duration-300 ease-in-out lg:mt-4">
                <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                  Tentang Kami
                </span>
              </h2>
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 lg:mt-0">
            <span className="flex h-full w-full flex-col gap-y-3">
              {Menus.slice(0, 3).map((menu, i) => (
                <h2 key={i} className="group h-fit w-fit text-slate-50 transition-all duration-300 ease-in-out">
                  <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                    <Link to={`/${menu.replace(/ /g, "-").toLowerCase()}`}>
                      {menu}
                    </Link>
                  </span>
                </h2>
              ))}
            </span>
            <span className="flex h-full w-full flex-col gap-y-3">
              {Menus.slice(3, 5).map((menu, i) => (
                <h2 key={i} className="group h-fit w-fit text-slate-50 transition-all duration-300 ease-in-out">
                  <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                    <Link to={`/${menu.replace(/ /g, "-").toLowerCase()}`}>
                      {menu}
                    </Link>
                  </span>
                </h2>
              ))}
            </span>
          </div>
        </section>
      </main>
    </footer>
  );
};