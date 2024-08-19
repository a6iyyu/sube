import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HandleMouseEnter, HandleMouseLeave, Headline } from "~/utils/hover-setiap-karakter";

export const BlogHero: React.FC = () => {
  const kalimat = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (kalimat.current) {
      const typed = new Typed(kalimat.current, {
        backSpeed: 50,
        loop: true,
        strings: [
          "Bingung mau ngapain?",
          "Kamu gabut ya?",
          "Pengen belajar?",
          "Cari inspirasi baru?",
        ],
        typeSpeed: 50,
      });
      return () => typed.destroy();
    } else {
      throw new Error("Ada kesalahan dalam memuat tipografi!");
    }
  }, []);

  return (
    <main className="mx-auto mb-28 mt-28 flex h-fit w-4/5 cursor-default flex-col justify-center text-slate-50 lg:w-3/5">
      <span className="absolute left-0 h-40 w-40 bg-[#4ea9b9] opacity-50 [filter:blur(8rem)]" />
      <span className="absolute right-0 h-40 w-40 bg-[#0aa2bd] opacity-50 [filter:blur(8rem)]" />
      <div className="mb-4 inline text-5xl font-bold">
        <span ref={kalimat} />
      </div>
      <h2 className="hidden text-5xl font-bold xl:inline">
        {Headline("Yuk, bacain artikelnya disini!", HandleMouseEnter, HandleMouseLeave)}
      </h2>
      <h2 className="inline text-5xl font-bold xl:hidden">
        Yuk, bacain artikelnya disini!
      </h2>
      <h5 className="mt-6 text-justify text-base font-medium italic lg:text-lg">
        Di sini, Anda dapat menemukan berbagai artikel menarik yang akan
        menambah wawasan dan pengetahuan Anda dalam berbagai bidang.
        <span className="hidden lg:inline">
          &nbsp;Jangan lewatkan kesempatan untuk belajar hal-hal baru setiap
          hari melalui artikel-artikel bermanfaat dan informatif yang kami
          sediakan.
        </span>
      </h5>
    </main>
  );
};