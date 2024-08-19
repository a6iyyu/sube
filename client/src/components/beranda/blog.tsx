import React from "react";
import { Link } from "react-router-dom";
import { KaroselBlog } from "./karosel-blog";

export const Blog: React.FC = () => {
  return (
    <main className="-mt-28 h-full w-full cursor-default bg-gradient-to-r from-[#161e2c] to-[#222230] pb-20 pt-52 text-slate-50 [border-radius:45%_55%_10%_10%_/_2.5%_2.5%_0%_0%] lg:[border-radius:20%_20%_10%_10%_/_10%_10%_0%_0%]">
      <section className="mx-auto grid h-fit w-4/5 grid-cols-1 gap-x-10 lg:grid-cols-2">
        <div className="flex h-full w-full flex-col justify-center">
          <h2 className="text-center text-3xl font-bold lg:text-justify">
            Temukan Wawasan Terbaru di Blog Kami
          </h2>
          <h4 className="mt-5 hidden text-justify text-base font-medium lg:flex lg:text-lg">
            Eksplorasi bagaimana teknologi digital mengubah pendidikan, strategi
            manajemen proyek untuk sukses, cara mendorong inovasi di tempat
            kerja, pentingnya keterampilan berpikir kritis bagi pemimpin masa
            depan, dan panduan mengembangkan kepemimpinan yang relevan di era
            digital.
          </h4>
          <Link to="/blog" className="mt-10 hidden h-fit w-fit rounded-lg bg-slate-50 px-8 py-4 text-base font-extrabold text-slate-950 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc20] hover:scale-105 hover:bg-slate-200 lg:flex lg:text-lg">
            Lihat Selengkapnya
          </Link>
        </div>
        <div className="h-full w-full">
          <KaroselBlog />
        </div>
        <Link to="/blog" className="mx-auto mt-7 flex h-fit w-fit rounded-lg bg-slate-50 object-cover px-8 py-4 text-base font-extrabold text-slate-950 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc20] hover:bg-slate-200 lg:hidden lg:text-lg">
          Lihat Selengkapnya
        </Link>
      </section>
    </main>
  );
};