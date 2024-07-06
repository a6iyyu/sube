import React, { useEffect, useState } from "react";
import { Notifikasi } from "~/common/notification";
import { FetchXSRFToken, HandleChangeForm, HandleSubmitForm } from "~/utils/menangani-kritik-&-saran";

export const FormulirKritikDanSaran: React.FC = () => {
  const [countCharacter, setCountCharacter] = useState<number>(0);
  const [XSRFToken, setXSRFToken] = useState<string>("");
  const [errorForm, setErrorForm] = useState<Partial<typeof feedbackData>>({});
  const [successForm, setSuccessForm] = useState<boolean>(false);
  const [feedbackData, setFeedbackData] = useState({
    email: "",
    subject: "",
    description: "",
  });

  useEffect(() => {
    FetchXSRFToken(setXSRFToken);
    setCountCharacter(feedbackData.description.length);

    const textarea = (document.querySelector("textarea") as HTMLTextAreaElement) || null;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [feedbackData.description]);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => HandleChangeForm(e, setFeedbackData, feedbackData);
  const HandleSubmit = (e: React.FormEvent) => HandleSubmitForm(e, feedbackData, setErrorForm, XSRFToken, setSuccessForm, () => setFeedbackData({ email: "", subject: "", description: "" }));

  return (
    <main className="mx-auto mb-60 mt-24 h-fit w-4/5 text-slate-50 lg:mt-32">
      {successForm && <Notifikasi title="Pengiriman Berhasil!" onclose={() => setSuccessForm(false)} />}
      <form onSubmit={HandleSubmit} className="flex flex-col">
        <section className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Surel
            </label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan Surel"
              className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
              onChange={HandleChange}
              value={feedbackData.email}
            />
            {errorForm.email && (<span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.email}</span>)}
          </div>
          <div className="mt-8 flex flex-col lg:mt-0">
            <label htmlFor="subject" className="font-semibold">
              Subjek
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Masukkan Subjek"
              className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
              onChange={HandleChange}
              value={feedbackData.subject}
            />
            {errorForm.subject && (<span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.subject}</span>)}
          </div>
        </section>
        <section className="mt-8 flex flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="description">Deskripsi</label>
            <span>{countCharacter} / 3000</span>
          </div>
          <textarea
            name="description"
            placeholder="Masukkan kritik dan saran Anda."
            maxLength={3000}
            rows={1}
            className="mt-4 resize-none border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
            onChange={HandleChange}
            value={feedbackData.description}
          />
          {errorForm.description && (<span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.description}</span>)}
        </section>
        <button className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#0000ee] py-4 text-base font-semibold transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#4d4dff]">
          Kirim
        </button>
      </form>
    </main>
  );
};