import React from "react";
import { HandleMouseEnter, HandleMouseLeave, Headline } from "~/utils/hover-setiap-karakter";

export const KursusHero: React.FC = () => {
  return (
    <main className="z-20 mx-auto mt-28 flex h-fit w-4/5 flex-col-reverse items-center justify-center gap-x-20 text-slate-50 lg:flex-row lg:justify-between">
      <section className="mt-10 flex h-full w-full cursor-default flex-col items-center text-justify lg:mt-0 lg:w-[55%] lg:items-start">
        <h2 className="hidden text-left text-5xl font-bold [line-height:1.175] lg:inline">
          {Headline("Pelajari Keterampilan Baru di Sube", HandleMouseEnter, HandleMouseLeave)}
        </h2>
        <h2 className="inline text-center text-4xl font-bold leading-tight lg:hidden lg:text-5xl">
          Pelajari Keterampilan Baru di Sube
        </h2>
        <h4 className="mt-6 w-full text-lg font-medium [line-height:1.5] [text-align-last:center] lg:mt-5 lg:w-full lg:text-xl lg:[text-align-last:left]">
          Temukan berbagai kursus yang dirancang untuk meningkatkan kemampuan
          Anda di bidang teknologi dan manajemen.
        </h4>
        <button id="eksplor-minatmu" className="mt-10 h-fit w-fit cursor-pointer rounded-xl bg-slate-50 px-9 py-5 text-lg font-bold text-slate-950 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc] hover:bg-slate-200 xl:hover:scale-105">
          Eksplor Minatmu&ensp;<i className="fa-solid fa-arrow-right text-base" />
        </button>
      </section>
      <section className="grid h-full w-full place-items-center lg:w-[45%]">
        <img src="/course.png?url" alt="" className="transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
      </section>
    </main>
  );
};