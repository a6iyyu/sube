import React, { useEffect, useState } from "react";
import { PropsDaftarFAQ, TipeMenu } from "~/data/props-daftar-faq";

export const DetailPertanyaanDanJawaban: React.FC<{ filteredQuestions: TipeMenu[] }> = ({ filteredQuestions }) => {
  const [details, setDetails] = useState<number | null>(null);
  const [filteredFAQs, setFilteredFAQs] = useState<typeof PropsDaftarFAQ>([]);

  useEffect(() => {
    setFilteredFAQs(filteredQuestions.includes("Semua") ? PropsDaftarFAQ : PropsDaftarFAQ.filter(faq => filteredQuestions.includes(faq.tipe || "Semua")));
  }, [filteredQuestions]);

  const HandleDetails = (index: number) => setDetails(details === index ? null : index);

  return (
    <section className="flex h-fit w-full flex-col text-slate-50 lg:w-3/4">
      {filteredFAQs.filter(faq => faq.tipe?.includes(faq.tipe)).map((faq, index: number) =>
        <div key={faq.id} className="flex cursor-pointer flex-col border-t border-y-slate-200 last:border-b" onClick={() => HandleDetails(index)}>
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
    </section>
  );
};