import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Splide from "@splidejs/splide";
import { KaroselProps } from "~/utils/index/karosel-blog";
import "@splidejs/splide/css";

export const KaroselBlog: React.FC = () => {
  const splide = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (splide.current) {
      new Splide(splide.current, {
        arrows: false,
        autoplay: true,
        pagination: false,
        perPage: 1,
        snap: true,
        type: "loop",
      }).mount();
    } else {
      throw new Error("Error: Carousel cannot be loaded!");
    }
  }, []);

  return (
    <div ref={splide} className="splide mt-8 h-full w-full overflow-hidden">
      <div className="splide__track h-full w-full">
        <ul className="splide__list">
          {KaroselProps.map((karosel) => (
            <Link
              to={`/blog/${karosel.judul.replace(/ /g, "-").toLowerCase()}`}
              key={karosel.id}
              className="splide__slide flex h-full w-full"
            >
              <span className="mx-auto h-full w-[95%] flex-col items-center">
                <img
                  src={karosel.gambar}
                  alt={karosel.judul}
                  className="h-72 w-full rounded-2xl object-cover [box-shadow:0.3rem_0.3rem_0_#bcbcbc]"
                />
                <h2 className="group mt-4 text-left text-xl font-bold text-slate-50 transition-all duration-300 ease-in-out lg:text-2xl">
                  <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                    {karosel.judul}
                  </span>
                </h2>
                <h2 className="group mt-4 text-justify text-base font-medium text-slate-50 transition-all duration-300 ease-in-out">
                  <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                    {karosel.deskripsi}
                  </span>
                </h2>
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};