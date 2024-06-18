import React from "react";
import { KaroselBlog } from "./karosel-blog";

export const RingkasanBlog: React.FC = () => {
  return (
    <main className="-mt-28 h-full w-full cursor-default bg-gradient-to-r from-[#161e2c] to-[#222230] pb-28 pt-52 text-justify text-slate-50 [border-radius:45%_55%_10%_10%_/_2.5%_2.5%_0%_0%] lg:[border-radius:20%_20%_10%_10%_/_10%_10%_0%_0%]">
      <section className="mx-auto grid h-fit w-4/5 grid-cols-1 gap-x-10 lg:grid-cols-2">
        <div className="flex h-full w-full flex-col">
          <h2 className="text-center text-3xl font-bold lg:text-justify">
            Temukan Wawasan Terbaru di Blog Kami
          </h2>
          <h4 className="mt-5 hidden text-base font-medium lg:flex">
            Eksplorasi bagaimana teknologi digital mengubah pendidikan, strategi
            manajemen proyek untuk sukses, cara mendorong inovasi di tempat
            kerja, pentingnya keterampilan berpikir kritis bagi pemimpin masa
            depan, dan panduan mengembangkan kepemimpinan yang relevan di era
            digital.
          </h4>
        </div>
        <div className="h-full w-full">
          <KaroselBlog />
        </div>
      </section>
    </main>
  );
};