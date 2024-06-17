import React, { useEffect, useRef } from "react";
import { DapatMDX } from "./render-mdx";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

export const KaroselBlog: React.FC = () => {
  const splide = useRef<HTMLDivElement | null>(null);
  const KontenMDX = DapatMDX();

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
          {KontenMDX.map(({ frontmatter }, i) => 
            <li key={i} className="splide__slide">
              <h4>{frontmatter.judul}</h4>
              {frontmatter.gambar && <img src={frontmatter.gambar} alt={frontmatter.judul} />}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};