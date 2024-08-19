import React from "react";
import styled from "styled-components";
import { PropsSilabusKurikulum } from "~/data/props-tujuan-kurikulum";

const SilabusKurikulumCard = styled.div`
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

export const SilabusKurikulum: React.FC = () => {
  return (
    <main className="-mt-24 h-fit w-full bg-gradient-to-r from-[#141b1f] to-[#1a1f25] pt-40 [border-radius:45%_55%_10%_10%_/_2.5%_2.5%_0%_0%] lg:-mt-16 lg:pt-32 lg:[border-radius:20%_20%_10%_10%_/_10%_10%_0%_0%]">
      <span className="absolute right-0 top-[45rem] h-40 w-40 bg-[#1fddff38] opacity-50 [filter:blur(8rem)]" />
      <section id="silabus" className="mx-auto h-full w-4/5 cursor-default text-center text-slate-50">
        <h2 className="text-4xl font-bold tracking-wider">
          Tujuan Kurikulum Kami
        </h2>
        <SilabusKurikulumCard className="mt-24 flex flex-col lg:grid lg:grid-cols-3 lg:place-items-center lg:justify-items-stretch">
          {PropsSilabusKurikulum.map(item =>
            <div key={item.id} className="mt-24 flex h-full w-full flex-col justify-start rounded-2xl bg-[#222831] text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc50] first:mt-0 lg:mt-0 lg:w-[90%]">
              <span className="mx-auto -mt-16 grid h-32 w-32 place-items-center rounded-full bg-[#272d37]">
                <img src={item.gambar} alt={item.judul} className="h-[4.5rem] w-[4.5rem] text-xs italic" loading="lazy" />
              </span>
              <h3 className="mx-auto my-6 h-fit w-4/5 text-xl font-bold lg:text-2xl xl:text-xl">
                {item.judul}
              </h3>
              <h5 className="mx-auto mb-12 h-fit w-4/5 text-justify">
                {item.deskripsi}
              </h5>
            </div>
          )}
        </SilabusKurikulumCard>
      </section>
    </main>
  );
};