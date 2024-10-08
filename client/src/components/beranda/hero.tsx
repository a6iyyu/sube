import React from "react";
import { HandleMouseEnter, HandleMouseLeave, Headline } from "~/utils/hover-setiap-karakter";

export const BerandaHero: React.FC = () => {
  return (
    <main className="z-20 mx-auto mt-16 flex h-fit w-4/5 flex-col-reverse items-center justify-center gap-x-20 text-slate-50 xl:flex-row xl:justify-between">
      <span className="absolute left-0 top-24 z-0 h-40 w-40 bg-[#ff85ad] [filter:blur(8rem)]" />
      <section className="mt-10 flex h-full w-full cursor-default flex-col items-center text-justify xl:mt-0 xl:items-start">
        <h2 className="hidden text-left text-5xl font-bold [line-height:1.175] xl:inline">
          {Headline("Manajemen Cerdas,", HandleMouseEnter, HandleMouseLeave)}
          <br />
          <span className="hidden">&nbsp;</span>
          {Headline("Sumber Daya Optimal", HandleMouseEnter, HandleMouseLeave)}
        </h2>
        <h2 className="inline text-center text-4xl font-bold leading-tight md:text-5xl xl:hidden">
          Manajemen Cerdas,
          <br />
          Sumber Daya Optimal
        </h2>
        <h4 className="mt-6 w-full text-xl font-medium [line-height:1.5] [text-align-last:center] md:w-3/5 xl:mt-5 xl:w-full xl:text-2xl xl:[text-align-last:left]">
          Kuasai strategi pengelolaan organisasi dengan kursus kami. Mulailah
          perjalanan Anda menuju kesuksesan dengan mendaftar sekarang!
        </h4>
        <button id="jelajahi-sekarang" className="mt-10 h-fit w-fit cursor-pointer rounded-xl bg-slate-50 px-9 py-5 text-lg font-bold text-slate-950 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc] hover:bg-slate-200 xl:hover:scale-105">
          Jelajahi Sekarang&ensp;<i className="fa-solid fa-arrow-right text-base" />
        </button>
      </section>
      <img src="/student.png?url" alt="Welcome to Sube!" className="transition-all duration-300 ease-in-out xl:hover:scale-105" loading="lazy" />
    </main>
  );
};