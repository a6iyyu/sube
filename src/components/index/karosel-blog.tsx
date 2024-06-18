import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
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
      });
    } else {
      throw new Error("Error: Carousel cannot be loaded!");
    }
  }, []);

  return (
    <div ref={splide} className="splide h-full w-full overflow-hidden">
      <div className="splide__track h-full w-full py-4">
        <ul className="splide__list">
          <li className="splide__slide"></li>
        </ul>
      </div>
    </div>
  );
};