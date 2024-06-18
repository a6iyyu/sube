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
    <div ref={splide} className="splide h-full w-full overflow-hidden">
      <div className="splide__track h-full w-full py-4">
        <ul className="splide__list">
          {KaroselProps.map(karosel => (
            <Link to={`/blog/${karosel.judul.replace(/ /g, "-").toLowerCase()}`} key={karosel.id} className="splide__slide flex h-full w-full flex-col">
              <img src={karosel.gambar} alt={karosel.judul} />
              <h2 className="text-2xl font-bold">{karosel.judul}</h2>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};