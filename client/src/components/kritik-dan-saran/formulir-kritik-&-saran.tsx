import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Notifikasi } from "~/common/notification";
import { MenanganiKritikSaran } from "~/utils/menangani-pengiriman";
import { MenanganiPerubahanFormulir } from "~/utils/menangani-perubahan-formulir";
import { KritikSaranSkema } from "~/utils/skema";

export const FormulirKritikDanSaran: React.FC = () => {
  const [countCharacter, setCountCharacter] = useState<number>(0);
  const [errorForm, setErrorForm] = useState<Partial<typeof feedbackData>>({});
  const [showNotification, setShowNotification] = useState<{ showMessage: string, isVisible: boolean }>({ showMessage: "", isVisible: false });
  const [feedbackData, setFeedbackData] = useState({ email: "", subject: "", description: "" });

  useEffect(() => {
    setCountCharacter(feedbackData.description.length);

    if (showNotification.isVisible) {
      const NotificationUnmounted = setTimeout(() => setShowNotification({ showMessage: "", isVisible: false }), 4000);
      return () => clearTimeout(NotificationUnmounted);
    };

    const textarea = (document.querySelector("textarea") as HTMLTextAreaElement) || null;
    if (textarea) textarea.style.height = "auto", textarea.style.height = `${textarea.scrollHeight}px`;
    
  }, [feedbackData.description, showNotification.isVisible]);

  const HandleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => MenanganiPerubahanFormulir(e, setFeedbackData, feedbackData);
  const HandleSubmit = (e: FormEvent) => MenanganiKritikSaran(e, KritikSaranSkema, feedbackData, setErrorForm, setShowNotification, () => setFeedbackData({ email: "", subject: "", description: "" }));

  return (
    <main className="mx-auto mb-60 mt-24 h-fit w-4/5 text-slate-50 lg:mt-32">
      {showNotification.isVisible && <Notifikasi title="Pengiriman Berhasil!" onclose={() => setShowNotification({ showMessage: "", isVisible: false })} />}
      <form onSubmit={HandleSubmit} className="flex flex-col">
        <section className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Surel
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan Surel"
              autoComplete="on"
              className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
              onChange={HandleChange}
              value={feedbackData.email}
            />
            {errorForm.email && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.email}</span>}
          </div>
          <div className="mt-8 flex flex-col lg:mt-0">
            <label htmlFor="subject" className="font-semibold">
              Subjek
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Masukkan Subjek"
              autoComplete="off"
              className="mt-4 border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
              onChange={HandleChange}
              value={feedbackData.subject}
            />
            {errorForm.subject && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.subject}</span>}
          </div>
        </section>
        <section className="mt-8 flex flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="description">Deskripsi</label>
            <span>{countCharacter} / 3000</span>
          </div>
          <textarea
            name="description"
            id="description"
            placeholder="Masukkan kritik dan saran Anda."
            autoComplete="off"
            maxLength={3000}
            rows={1}
            className="mt-4 resize-none border-b-2 border-slate-50/50 bg-transparent text-slate-50 focus:border-slate-50 focus:outline-none lg:py-3"
            onChange={HandleChange}
            value={feedbackData.description}
          />
          {errorForm.description && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.description}</span>}
        </section>
        <button className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#0000ee] py-4 text-base font-semibold transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#4d4dff]">
          Kirim
        </button>
      </form>
    </main>
  );
};