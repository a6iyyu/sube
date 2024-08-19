import React, { useState } from "react";
import { PropsDaftarFAQ } from "~/data/props-daftar-faq";

export const TigaPertanyaan: React.FC = () => {
  const [details, setDetails] = useState<number | null>(null);
  const HandleDetails = (index: number) => setDetails(details === index ? null : index);

  return (
    <section className="mt-20 grid grid-cols-1 place-items-center gap-y-8 text-slate-50 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0">
      <span className="absolute right-0 top-[45rem] h-40 w-40 bg-[#cc0a92] opacity-50 [filter:blur(8rem)]" />
      <div className="mb-4 h-full w-full cursor-default text-justify lg:mb-0">
        <h3 className="text-3xl font-bold">Perkenalan&ensp;✨</h3>
        <br />
        <h5>
          Kami telah menyiapkan jawaban atas pertanyaan-pertanyaan untuk Anda
          yang ingin lebih mengenal Sube. Mulailah perjalanan belajar Anda
          bersama Sube sekarang!
        </h5>
      </div>
      <div className="flex h-full w-full flex-col">
        {PropsDaftarFAQ.slice(0, 3).map((faq, index: number) =>
          <div key={faq.id} className="flex h-fit w-full cursor-pointer flex-col border-t border-y-slate-200 last:border-b" onClick={() => HandleDetails(index)}>
            {faq.pertanyaan && 
              <h3 className="group my-4 text-lg font-semibold transition-all duration-300 ease-in-out lg:hover:text-slate-200">
                <span className="lg:bg-gradient-to-r lg:from-sky-500 lg:to-sky-500 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                  {faq.pertanyaan}
                </span>
              </h3>
            }
            {details === index && <h5 className="mb-6 text-justify">{faq.jawaban}</h5>}
          </div>
        )}
      </div>
    </section>
  );
};