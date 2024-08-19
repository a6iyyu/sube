import React from "react";

export const SambutanDariPengembang: React.FC = () => {
  return (
    <main className="mx-auto mt-40 grid h-fit w-4/5 cursor-default grid-cols-1 place-items-center gap-x-10 text-slate-50 lg:grid-cols-2">
      <span className="absolute left-0 h-40 w-40 bg-[#ff85ad] opacity-50 [filter:blur(8rem)]" />
      <span className="absolute right-0 h-40 w-40 bg-[#0aa2bd] opacity-50 [filter:blur(8rem)]" />
      <h2 className="flex h-full w-full text-left text-4xl font-medium leading-normal [font-family:'Playwrite_US_Trad',_cursive] lg:justify-end lg:text-right">
        Sambutan
        <br />
        Dari Pengembang
      </h2>
      <section className="mt-16 h-full w-full lg:mt-0">
        <h4 className="text-justify text-lg leading-relaxed">
          Di Sube, kami berkomitmen untuk mencerdaskan anak bangsa melalui
          pendidikan teknologi yang terdepan. Misi kami adalah memberikan akses
          pembelajaran berkualitas tinggi yang dapat diakses oleh semua orang,
          membantu mereka mengembangkan keterampilan yang relevan dengan
          kebutuhan industri masa kini dan masa depan.
          <br />
          <br />
          Kami berharap dapat melihat setiap individu yang bergabung dengan Sube
          berkembang menjadi pemimpin yang inovatif dan berpikir kritis, siap
          menghadapi tantangan global. Di masa depan, kami ingin memperluas
          jangkauan kami, menyediakan lebih banyak program pendidikan yang
          berbasis teknologi mutakhir, dan menjadi pelopor dalam pendidikan
          digital di Indonesia.
        </h4>
      </section>
    </main>
  );
};