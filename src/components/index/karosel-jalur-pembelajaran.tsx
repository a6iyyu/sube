import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import styled from "styled-components";
import "@splidejs/splide/css";
import { DataKarosel } from "../../hooks/karosel-jalur-pembelajaran";

const SectionHover = styled.section`
  @media screen and (max-width: 3120px) {
    .splide__slide a:hover {
      filter: blur(0);
    }
    &:hover .splide__slide a:not(:hover) {
      transform: scale(0.95);
      filter: blur(0.1rem);
    }
    .splide__slide:nth-child {
      justify-content: center;
    }
    .splide__slide a {
      width: 97.5%;
    }
  }
`;

export const JalurPembelajaran: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      new Splide(carousel.current, {
        arrows: false,
        drag: "free",
        snap: true,
        type: "loop",
        autoScroll: {
          speed: 0.5,
        },
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
      }).mount({ AutoScroll });
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
      <SectionHover className="mx-auto mb-28 grid h-80 w-full place-items-center">
        <div ref={carousel} className="splide h-full w-full overflow-hidden">
          <div className="splide__track h-full w-full py-4">
            <ul className="splide__list">
              {DataKarosel.map((karosel) => (
                <li key={karosel.id} className="splide__slide flex h-full w-full">
                  <Link
                    to={`/${karosel.judul.replace(/ /g, "-").toLowerCase()}`}
                    className="grid h-full w-full place-items-center rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc50]"
                    style={{ backgroundImage: `url(${karosel.gambar})` }}
                  >
                    <h4 className="mx-auto flex h-4/5 w-4/5 items-end justify-center text-4xl font-bold text-slate-50">
                      {karosel.judul}
                    </h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionHover>
      <span className="absolute right-0 top-[120rem] h-40 w-40 bg-[#bf4e0880] [filter:blur(8rem)]" />
    </main>
  );
};