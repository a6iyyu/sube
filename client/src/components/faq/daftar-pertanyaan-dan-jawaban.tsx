import React, { useState } from "react";
import { TigaPertanyaan } from "./tiga-pertanyaan";
import { MenuPertanyaan } from "./menu-pertanyaan";
import { DetailPertanyaanDanJawaban } from "./detail-pertanyaan-dan-jawaban";
import { TipeMenu } from "~/data/props-daftar-faq";

export const DaftarPertanyaanDanJawaban: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<TipeMenu[]>(["Semua", "Akun", "Kursus", "Memulai", "Tantangan", "Umum"]);

  return (
    <main className="mx-auto mb-32 mt-20 flex h-fit w-4/5 flex-col items-center justify-center">
      <TigaPertanyaan />
      <img src="/faq.png?url" alt="Frequently Asked Question" className="mt-20 h-fit w-fit italic text-slate-50 transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
      <section className="mt-20 flex h-fit w-full flex-col lg:flex-row">
        <MenuPertanyaan setFilteredQuestions={setFilteredQuestions} />
        <DetailPertanyaanDanJawaban filteredQuestions={filteredQuestions} />
      </section>
    </main>
  );
};