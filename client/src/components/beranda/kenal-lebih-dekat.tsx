import React from "react";
import { Link } from "react-router-dom";
import Teamwork from "/teamwork-2.jpg";

export const KenalLebihDekat: React.FC = () => {
  return (
    <main className="h-fit w-full bg-gradient-to-r from-[#161e2c] to-[#222230] pb-20">
      <span className="absolute left-0 top-[215rem] h-40 w-40 bg-[#1fddff] opacity-50 [filter:blur(8rem)]" />
      <Link to="/tentang-kami">
        <section className="mx-auto h-full w-4/5 rounded-xl bg-[#222831] bg-cover bg-center bg-no-repeat text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc50] lg:bg-contain lg:bg-right lg:hover:scale-[1.025]" style={{ backgroundImage: `url(${Teamwork})` }}>
          <h4 className="group hidden h-fit w-1/2 p-12 text-justify font-medium leading-relaxed text-slate-50 transition-all duration-300 ease-in-out lg:inline-block">
            <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
              Kami adalah program edukasi yang berkomitmen untuk mengembangkan
              keterampilan dalam manajemen proyek, kepemimpinan, dan inovasi
              digital. Melalui berbagai kelas daring, program pelatihan, dan
              sertifikasi yang terjamin kualitasnya, kami membantu profesional
              meningkatkan kemampuan mereka untuk bersaing di dunia bisnis yang
              terus berkembang. Dukungan penuh kami hadir dalam bentuk tinjauan
              proyek mendalam dan forum diskusi yang aktif, memastikan setiap
              peserta mendapatkan bimbingan dan umpan balik yang konstruktif.
            </span>
          </h4>
          <h4 className="flex justify-center px-10 pb-10 pt-60 text-2xl font-semibold lg:hidden">
            Tak kenal, maka tak sayang.
          </h4>
        </section>
      </Link>
    </main>
  );
};