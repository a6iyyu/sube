import React from "react";
import styled from "styled-components";
import { PropsFitur } from "~/data/props-fitur";

const FiturYangDisediakanCard = styled.div`
  @media screen and (max-width: 3120px) {
    div:hover {
      filter: blur(0);
      transform: scale(1.05);
    }
    &:hover div:not(:hover) {
      transform: scale(0.95);
      filter: blur(0.1rem);
    }
  }
  @media screen and (max-width: 1024px) {
    div:hover,
    &:hover div:not(:hover) {
      filter: blur(0);
      transform: scale(1);
    }
  }
`;

export const FiturYangDisediakan: React.FC = () => {
  return (
    <main className="h-fit w-full bg-gradient-to-r from-[#141b1f] to-[#1a1f25] py-20">
      <span className="absolute right-0 top-[45rem] h-40 w-40 bg-[#4ea9b9] opacity-50 [filter:blur(8rem)]" />
      <span className="absolute top-[80rem] h-40 w-40 bg-[rgb(8,88,225)] [filter:blur(8rem)]" />
      <section className="mx-auto h-full w-4/5 cursor-default text-center text-slate-50">
        <FiturYangDisediakanCard className="gap-7 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center lg:justify-items-stretch">
          {PropsFitur.map(item =>
            <div key={item.id} className="mt-5 flex transition-all duration-300 ease-in-out first:mt-0 lg:mt-0">
              <span className="grid place-items-center rounded-xl bg-[#222831] p-6 [box-shadow:0.15rem_0.15rem_0_#bcbcbc99]">
                <img src={item.gambar} alt={item.judul} className="w-8 text-xs italic md:w-10" loading="lazy" />
              </span>
              <span className="my-auto ml-4 flex h-fit w-fit flex-col items-start text-left">
                <strong className="text-lg">{item.judul}</strong>
                <h5 className="text-base">{item.deskripsi}</h5>
              </span>
            </div>
          )}
        </FiturYangDisediakanCard>
      </section>
    </main>
  );
};