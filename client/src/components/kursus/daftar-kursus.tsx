import React from "react";
import { Link } from "react-router-dom";
import { ModulPembelajaran } from "~/data/props-modul-pembelajaran";
import { MemendekkanKalimat } from "~/utils/memendekkan-kalimat";

export const DaftarKursus: React.FC = () => {
  return (
    <main className="my-40 h-full w-full bg-gradient-to-r from-[#0c0c1e] to-[#141414] [border-radius:45%_55%_10%_10%_/_2.5%_2.5%_0%_0%] lg:[border-radius:20%_20%_10%_10%_/_10%_10%_0%_0%]">
      <hr className="mx-auto mb-14 h-0.5 w-4/5 rounded-full" />
      <h3 id="daftar-kursus" className="mx-auto h-full w-4/5 cursor-default text-center text-4xl font-bold text-slate-50">
        Daftar Kursus yang Tersedia
      </h3>
      <h5 className="mx-auto my-4 h-full w-4/5 cursor-default text-center text-lg font-medium text-slate-50">
        Pilih dari beragam kursus yang dirancang untuk membantu Anda mencapai
        tujuan pembelajaran Anda.
      </h5>
      <section className="mx-auto mb-14 grid h-full w-4/5 grid-cols-1 gap-y-6 text-slate-50 md:grid-cols-2 md:gap-x-10 md:gap-y-4 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-2">
        {ModulPembelajaran.map(modul =>
          <Link to={`/kursus/${modul.judul.replace(/ /g, "-").toLowerCase()}`} className="mt-8 flex h-fit w-fit flex-col transition-all duration-300 ease-in-out">
            <div className="h-72 w-full lg:h-60">
              <img src={modul.gambar} alt={modul.judul} className="h-full w-full rounded-lg object-cover [box-shadow:_0.3rem_0.3rem_0_#bcbcbc99] lg:[box-shadow:_0_0_0]" />
            </div>
            <h2 className="group mt-4 text-center text-2xl font-bold text-slate-50 transition-all duration-300 ease-in-out lg:text-left">
              <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                {modul.judul}
              </span>
            </h2>
            <h4 className="group mt-4 text-justify text-slate-50 transition-all duration-300 ease-in-out">
              <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                {MemendekkanKalimat(modul.deskripsi, 75)}
              </span>
            </h4>
          </Link>
        )}
      </section>
    </main>
  );
};