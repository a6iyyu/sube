import React, { useState } from "react";
import { PropsFAQ } from "~/data/props-faq";

export const PertanyaanYangSeringDiajukan: React.FC = () => {
  const [details, setDetails] = useState<number | null>(null);

  const HandleDetails = (i: number) => setDetails((prevDetail) => (prevDetail === i ? null : i));

  return (
    <main className="mx-auto mb-60 mt-32 grid h-fit w-4/5 grid-cols-2 gap-x-10 text-slate-50 lg:mt-40">
      <section className="flex flex-col items-center gap-y-4">
        {PropsFAQ.slice(0, 3).map((faq, i: number) => (
          <div
            key={faq.id}
            className={`flex w-full flex-col rounded-2xl bg-gradient-to-r from-[#181822] to-[#1e1829] px-8 py-6 text-justify leading-relaxed tracking-wide transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#bcbcbc50]`}
            onClick={() => HandleDetails(i)}
          >
            {faq.pertanyaan && <span className="cursor-pointer text-lg font-semibold transition-all duration-300 ease-in-out hover:underline lg:hover:text-slate-200">{faq.pertanyaan}</span>}
            {details === i && <span className="cursor-default"><br />{faq.jawaban}</span>}
          </div>
        ))}
      </section>
      <section>
        <img src="" alt="" />
      </section>
    </main>
  );
};