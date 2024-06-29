import React from "react";

export const Komunitas: React.FC = () => {
  return (
    <main className="mx-auto mt-20 grid h-fit w-4/5 cursor-default grid-cols-1 place-items-center gap-x-10 text-slate-50 lg:mt-28 lg:grid-cols-2">
      <section className="mt-16 h-full w-full lg:mt-0">
        <h4 className="text-justify text-lg leading-relaxed lg:[text-align-last:right]">
          Sube tidak hanya tentang belajar, tetapi juga tentang membangun
          komunitas yang saling mendukung dan menginspirasi. Kami memiliki forum
          diskusi di mana pengguna dapat berbagi pengetahuan, bertanya, dan
          mendapatkan dukungan dari sesama pelajar serta mentor berpengalaman.
          Komunitas kami adalah tempat yang sempurna untuk berkolaborasi dan
          berkembang bersama. Namun, fitur ini belum tersedia karena masih dalam
          tahap perencanaan.
        </h4>
      </section>
      <section className="order-first flex h-full w-full text-4xl font-bold lg:order-last">
        Komunitas
      </section>
    </main>
  );
};