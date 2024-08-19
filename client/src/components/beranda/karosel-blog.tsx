import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Splide from "@splidejs/splide";
import { PropsKaroselBlog } from "~/data/props-karosel-blog";
import { MemendekkanKalimat } from "~/utils/memendekkan-kalimat";

export const KaroselBlog: React.FC = () => {
  const splide = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (splide.current) {
      new Splide(splide.current, {
        arrows: false,
        autoplay: true,
        pagination: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        perPage: 1,
        snap: true,
        type: "loop",
      }).mount();
    } else {
      throw new Error("Ada kesalahan dalam memuat karosel!");
    }
  }, []);

  return (
    <div ref={splide} className="splide mt-8 h-full w-full overflow-x-hidden">
      <div className="splide__track h-full w-full">
        <ul className="splide__list">
          {PropsKaroselBlog.slice(0, 5).map(karosel =>
            <Link to={`/blog/${karosel.judul.replace(/ /g, "-").toLowerCase()}`} key={karosel.id} className="splide__slide flex h-full w-full">
              <span className="mx-auto h-full w-[95%] flex-col items-center">
                <img src={karosel.gambar} alt={karosel.judul} className="h-72 w-full rounded-2xl object-cover [box-shadow:0.3rem_0.3rem_0_#bcbcbc]" loading="lazy" />
                <h2 className="group mt-4 text-justify text-xl font-bold text-slate-50 transition-all duration-300 ease-in-out [text-align-last:center] lg:text-left lg:text-2xl lg:[text-align-last:left]">
                  <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                    {karosel.judul}
                  </span>
                </h2>
                <h2 className="group mt-4 text-justify text-base font-medium text-slate-50 transition-all duration-300 ease-in-out [text-align-last:center] lg:[text-align-last:left]">
                  <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                    {MemendekkanKalimat(karosel.deskripsi, 100)}
                  </span>
                </h2>
              </span>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};