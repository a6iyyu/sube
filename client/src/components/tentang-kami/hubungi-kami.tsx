import React from "react";
import { Link } from "react-router-dom";

export const HubungiKami: React.FC = () => {
  return (
    <main className="mx-auto mb-60 mt-20 h-fit w-4/5 text-slate-50 lg:mt-28">
      <h3 className="cursor-default text-4xl font-bold lg:text-center">
        Hubungi Kami
      </h3>
      <section className="mt-7 grid grid-cols-1 gap-x-10 lg:grid-cols-2">
        <h4 className="cursor-default text-justify text-lg lg:[text-align-last:right]">
          Jika Anda memiliki pertanyaan tentang layanan kami atau butuh bantuan,
          jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda.
        </h4>
        <div className="mt-4 flex w-full flex-col text-base lg:mt-0">
          <Link to="mailto:mizukinako7@gmail.com" className="mt-1 flex h-fit w-fit items-center" target="_blank">
            <img src="/gmail.png?url" alt="Gmail" className="h-5" />
            <h2 className="group ml-4 text-justify text-base font-medium text-slate-50 transition-all duration-300 ease-in-out [text-align-last:left]">
              <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                mizukinako7@gmail.com
              </span>
            </h2>
          </Link>
          <Link to="https://www.instagram.com/a6iyyu" className="mt-4 flex h-fit w-fit items-center" target="_blank">
            <img src="/instagram.png?url" alt="Gmail" className="h-7" />
            <h2 className="group ml-4 text-justify text-base font-medium text-slate-50 transition-all duration-300 ease-in-out [text-align-last:left]">
              <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                a6iyyu
              </span>
            </h2>
          </Link>
        </div>
      </section>
    </main>
  );
};