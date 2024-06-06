import React from "react";

export const IndexHero: React.FC = () => {
  return (
    <main className="mx-auto my-16 flex h-fit w-4/5 flex-col-reverse items-center justify-center gap-x-20 text-slate-50 lg:flex-row lg:justify-between">
      <span className="absolute left-0 top-0 z-0 h-40 w-40" style={{ backgroundColor: "#ff85ad", filter: "blur(8rem)" }} />
      <section className="mt-10 flex h-full w-full cursor-default flex-col items-center text-justify lg:mt-0 lg:items-start">
        <h2 className="text-center text-4xl font-bold lg:text-left lg:text-5xl" style={{ lineHeight: 1.175 }}>
          Manajemen Cerdas,
          <br />
          Sumber Daya Optimal
        </h2>
        <h4 className="mt-6 text-xl font-medium [text-align-last:center] lg:mt-5 lg:text-2xl lg:[text-align-last:left]" style={{ lineHeight: 1.5 }}>
          Kuasai strategi pengelolaan organisasi dengan kursus kami. Mulailah
          perjalanan Anda menuju kesuksesan dengan mendaftar sekarang!
        </h4>
        <button className="mt-10 h-fit w-fit cursor-pointer rounded-xl bg-slate-50 px-8 py-4 text-xl font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200">
          Jelajahi Sekarang
        </button>
      </section>
      <img src="/student.png" alt="" />
    </main>
  );
};