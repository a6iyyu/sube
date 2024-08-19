import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ModulPembelajaran } from "~/data/props-modul-pembelajaran";
import { MemendekkanKalimat } from "~/utils/memendekkan-kalimat";

const SectionHover = styled.section`
  @media screen and (max-width: 3120px) {
    &:hover a:not(:hover) {
      filter: blur(0.1rem);
      transform: scale(0.975);
    }
  }
  @media screen and (max-width: 1024px) {
    &:hover a:not(:hover) {
      filter: blur(0);
      transform: scale(1);
    }
  }
`;

export const JalurPembelajaran: React.FC = () => {
  return (
    <main className="flex h-fit w-full flex-col bg-gradient-to-r from-[#141b1f] to-[#1a1f25] text-slate-50">
      <h3 className="mx-auto mb-4 mt-6 h-fit w-4/5 cursor-default text-center text-4xl font-bold tracking-wider">
        Jalur Pembelajaran
      </h3>
      <h5 className="mx-auto mb-6 h-fit w-4/5 cursor-default text-justify text-base font-medium tracking-wider [text-align-last:center] lg:w-3/5 lg:text-center lg:text-xl lg:[text-align-last:center]">
        Jalur pembelajaran disusun untuk memberikan Anda pendidikan yang
        menyeluruh berdasarkan tren dan kebutuhan saat ini.
      </h5>
      <SectionHover className="mx-auto grid h-full w-4/5 grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
        {ModulPembelajaran.slice(0, 4).map(modul =>
          <Link key={modul.id} to={`/kursus/${modul.judul.replace(/ /g, "-").toLowerCase()}`} className="mt-8 flex h-fit w-fit flex-col transition-all duration-300 ease-in-out">
            <div className="h-72 w-full lg:h-60">
              <img src={modul.gambar} alt={modul.judul} className="h-full w-full rounded-lg object-cover [box-shadow:0.3rem_0.3rem_0_#bcbcbc]" loading="lazy" />
            </div>
            <h2 className="group mt-6 text-center text-2xl font-bold text-slate-50 transition-all duration-300 ease-in-out lg:text-left lg:text-3xl">
              <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                {modul.judul}
              </span>
            </h2>
            <h4 className="group mt-4 text-justify text-base text-slate-50 transition-all duration-300 ease-in-out lg:text-lg">
              <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                {MemendekkanKalimat(modul.deskripsi, 120)}
              </span>
            </h4>
          </Link>
        )}
      </SectionHover>
      <section className="mx-auto mt-10 grid h-full w-4/5 place-items-center text-base font-bold text-slate-950 lg:text-lg">
        <Link to="/kursus" className="rounded-xl bg-slate-50 px-8 py-4 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc99] hover:bg-slate-200 lg:px-10 lg:py-5 lg:hover:scale-105">
          Pelajari Lebih Lanjut
        </Link>
      </section>
      <span className="absolute right-0 top-[120rem] h-40 w-40 bg-[#bf4e0880] [filter:blur(8rem)]" />
    </main>
  );
};