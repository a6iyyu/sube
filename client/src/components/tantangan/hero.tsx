import React from "react";

export const TantanganHero: React.FC = () => {
  return (
    <main className="z-20 mx-auto mb-20 mt-28 flex h-fit w-4/5 flex-col-reverse items-center justify-center gap-x-20 text-slate-50 lg:flex-row lg:justify-between">
      <section className="mt-10 flex h-full w-full cursor-default flex-col items-center text-justify lg:mt-0 lg:w-[55%] lg:items-start">
        <h2 className="text-center text-4xl font-bold lg:text-left lg:text-5xl" style={{ lineHeight: "3.5rem" }}>
          Bersiap Menghadapi Tantangan Nyata
        </h2>
        <h4 className="mt-6 w-full text-lg font-medium [text-align-last:center] lg:mt-5 lg:w-full lg:text-xl lg:[text-align-last:left]">
          Uji keterampilan Anda dengan tantangan menarik dan menantang untuk
          meningkatkan kemampuan Anda!
        </h4>
        <button id="saatnya-beraksi" className="mt-10 h-fit w-fit cursor-pointer rounded-xl bg-slate-50 px-9 py-5 text-lg font-bold text-slate-950 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc] hover:bg-slate-200 xl:hover:scale-105">
          Saatnya Beraksi&ensp;<i className="fa-solid fa-arrow-right text-base" />
        </button>
      </section>
      <section className="grid h-full w-full place-items-center lg:w-[45%]">
        <img src="/course.png?url" alt="Kursus" className="transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
      </section>
    </main>
  );
};