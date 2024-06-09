import React from "react";
import { HandleMouseEnter, HandleMouseLeave, Headline } from "../../hooks/hover-foreach-character";

export const IndexHero: React.FC = () => {
  return (
    <main className="z-20 mx-auto mt-16 flex h-fit w-4/5 flex-col-reverse items-center justify-center gap-x-20 text-slate-50 lg:flex-row lg:justify-between">
      <span className="absolute left-0 top-0 z-0 h-40 w-40 bg-[#ff85ad] [filter:blur(8rem)]" />
      <section className="mt-10 flex h-full w-full cursor-default flex-col items-center text-justify lg:mt-0 lg:items-start">
        <h2 className="text-center text-4xl font-bold [line-height:1.175] lg:text-left lg:text-5xl">
          {Headline("Manajemen Cerdas,", HandleMouseEnter, HandleMouseLeave)}
          <br />
          {Headline("Sumber Daya Optimal", HandleMouseEnter, HandleMouseLeave)}
        </h2>
        <h4 className="mt-6 text-xl font-medium [line-height:1.5] [text-align-last:center] lg:mt-5 lg:text-2xl lg:[text-align-last:left]">
          Kuasai strategi pengelolaan organisasi dengan kursus kami. Mulailah
          perjalanan Anda menuju kesuksesan dengan mendaftar sekarang!
        </h4>
        <button id="jelajahi-sekarang" className="mt-10 h-fit w-fit cursor-pointer rounded-xl bg-slate-50 px-8 py-4 text-xl font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200">
          Jelajahi Sekarang
        </button>
      </section>
      <img src="/student.png" alt="Welcome to Sube!" className="transition-all duration-300 ease-in-out hover:scale-105" />
    </main>
  );
};