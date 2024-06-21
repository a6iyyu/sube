import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="-mt-16 h-fit w-full bg-gradient-to-r from-[#141b1f] to-[#1a1f25] py-24 [border-radius:45%_55%_10%_10%_/_2.5%_2.5%_0%_0%] lg:-mt-10 lg:[border-radius:20%_20%_10%_10%_/_10%_10%_0%_0%]">
      <section className="mx-auto mt-10 flex h-full w-4/5 flex-col text-slate-50 lg:flex-row">
        <div className="flex h-full w-full cursor-default flex-col lg:w-2/5">
          <img src="" alt="Logo" className="mx-auto font-bold italic lg:mx-0" />
          <h4 className="mt-7 text-center text-2xl font-semibold lg:text-left">
            E-Learning Sube
          </h4>
          <h5 className="mt-4 text-justify text-base font-thin [text-align-last:center] lg:text-justify lg:[text-align-last:left]">
            Dengan ilmu pengetahuan dan keterampilan, Sube mendukung dalam
            mencerdaskan anak bangsa dan mewujudkan cita-cita Indonesia. Melalui
            pendidikan teknologi, kita membangun generasi unggul berdaya saing
            global.
          </h5>
        </div>
        <div className="grid h-full w-full grid-cols-3 lg:w-3/5"></div>
      </section>
    </footer>
  );
};