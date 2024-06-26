import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { PropsKaroselBlog } from "~/data/props-karosel-blog";
import { MemendekkanKalimat } from "~/utils/memendekkan-kalimat";

export const KaroselBlog: React.FC = () => {
  const karosel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (karosel.current) {
      new Splide(karosel.current, {
        arrows: false,
        pagination: false,
        type: "loop",
        snap: true,
        breakpoints: {
          3120: {
            perPage: 4,
            speed: 0.25,
          },
          1800: {
            perPage: 3,
          },
          1024: {
            perPage: 2,
            speed: 0.125,
          },
          768: {
            perPage: 1,
          },
        },
      }).mount({ AutoScroll });
    }
  }, []);

  return (
    <main ref={karosel} className="splide h-fit w-full overflow-x-hidden">
      <section className="splide__track h-full w-full">
        <ul className="splide__list">
          {PropsKaroselBlog.slice(0, 5).map(karosel => (
            <Link to={`/${karosel.judul.replace(/ /g, "-").toLowerCase()}`} key={karosel.id} className="splide__slide flex h-full w-full">
              <div className="mx-auto h-full w-[90%] flex-col items-center">
                <img src={karosel.gambar} alt={karosel.judul} className="h-72 w-full rounded-2xl object-cover [box-shadow:0.3rem_0.3rem_0_#bcbcbc]" />
                <h2 className="group mt-4 text-justify text-xl font-bold text-slate-50 transition-all duration-300 ease-in-out [text-align-last:left] lg:text-2xl">
                  <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                    {karosel.judul}
                  </span>
                </h2>
                <h2 className="group mt-4 text-justify text-base font-medium text-slate-50 transition-all duration-300 ease-in-out [text-align-last:left]">
                  <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                    {MemendekkanKalimat(karosel.deskripsi, 100)}
                  </span>
                </h2>
              </div>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
};