import React, { useState } from "react";
import { PropsDaftarFAQ, TipeMenu } from "~/data/props-daftar-faq";

export const DetailPertanyaanDanJawaban: React.FC<{ FilterQuestions: TipeMenu }> = ({ FilterQuestions }) => {
  const [details, setDetails] = useState<number | null>(null);

  const HandleDetails = (index: number) => setDetails(details === index ? null : index);
  const FilteredFAQs = PropsDaftarFAQ.filter(faq => FilterQuestions === "Semua" || faq.tipe && faq.tipe.includes(FilterQuestions));

  return (
    <section className="mt-10 flex h-fit w-full flex-col text-slate-50 lg:mt-0 lg:w-3/4">
      {FilteredFAQs.slice(3, 17).map((daftar_faq, index: number) => (
        <div key={daftar_faq.id} className="flex cursor-pointer flex-col border-t border-y-slate-200 last:border-b" onClick={() => HandleDetails(index)}>
          {daftar_faq.pertanyaan && (
            <h3 className="group my-4 text-lg font-semibold transition-all duration-300 ease-in-out lg:hover:text-slate-200">
              <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                {daftar_faq.pertanyaan}
              </span>
            </h3>
          )}
          {details === index && <h5 className="mb-4">{daftar_faq.jawaban}</h5>}
        </div>
      ))}
    </section>
  );
};