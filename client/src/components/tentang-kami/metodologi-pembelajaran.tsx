import React from "react";

export const MetodologiPembelajaran: React.FC = () => {
  return (
    <main className="mx-auto mt-20 grid h-fit w-4/5 cursor-default grid-cols-1 place-items-center gap-x-10 text-slate-50 lg:mt-28 lg:grid-cols-2">
      <span className="absolute left-0 top-[125rem] h-40 w-40 bg-[#ff85ad] opacity-50 [filter:blur(8rem)]" />
      <span className="absolute right-0 top-[125rem] h-40 w-40 bg-[#0aa2bd] opacity-50 [filter:blur(8rem)]" />
      <section className="flex h-full w-full text-left text-4xl font-bold leading-tight lg:justify-end lg:text-right">
        Metodologi
        <br />
        Pembelajaran
      </section>
      <section className="mt-16 h-full w-full lg:mt-0">
        <h4 className="text-justify text-lg leading-relaxed">
          Di Sube, kami menerapkan metodologi pengajaran yang interaktif dan
          berpusat pada siswa. Setiap materi disusun dengan tujuan untuk
          memudahkan pemahaman dan penerapan langsung di dunia nyata. Kami
          menggunakan berbagai alat pembelajaran digital untuk memastikan
          pengalaman belajar yang menyenangkan dan efektif.
        </h4>
      </section>
    </main>
  );
};