import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Splide } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import { DataKarosel } from "../../hooks/karosel-jalur-pembelajaran";

export const JalurPembelajaran: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      new Splide(carousel.current, {
        autoplay: true,
        drag: true,
        snap: true,
        type: "loop",
        breakpoints: {
          3120: {
            perPage: 3,
          },
          1280: {
            perPage: 2,
          },
          768: {
            perPage: 1,
          },
        },
      });
    }
  }, []);

  return (
    <main className="flex h-fit w-full flex-col bg-gradient-to-r from-[#141b1f] to-[#1a1f25] text-slate-50">
      <h3 className="mx-auto mb-4 mt-6 h-fit w-4/5 cursor-default text-center text-4xl font-bold tracking-wider">
        Alur Pembelajaran
      </h3>
      <h5 className="mx-auto mb-6 h-fit w-4/5 cursor-default text-justify text-base font-medium tracking-wider [text-align-last:center] lg:w-3/5 lg:text-center lg:text-xl lg:[text-align-last:center]">
        Alur pembelajaran disusun untuk memberikan Anda pendidikan yang
        menyeluruh berdasarkan tren dan kebutuhan saat ini.
      </h5>
      <section className="mx-auto mb-10 grid h-80 w-4/5 place-items-center">
        <div ref={carousel} className="h-full w-full overflow-hidden">
          <div className="splide__track h-full w-full px-10 py-4">
            <ul className="splide__list">
              {DataKarosel.map((karosel) => (
                <Link
                  key={karosel.id}
                  to={`/${karosel.judul.replace(/ /g, "-").toLowerCase()}`}
                  className="splide__slide grid h-full w-full place-items-center rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:scale-105"
                  style={{ backgroundImage: `url(${karosel.gambar})` }}
                >
                  <h4 className="mx-auto flex h-4/5 w-4/5 items-end justify-center text-4xl font-bold text-slate-50">
                    {karosel.judul}
                  </h4>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};