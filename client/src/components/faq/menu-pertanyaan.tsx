import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { TipeMenu } from "~/data/props-daftar-faq";

export const MenuPertanyaan: React.FC<{ setFilteredQuestions: Dispatch<SetStateAction<TipeMenu[]>> }> = ({ setFilteredQuestions }) => {
  const [activeHover, setIsActiveHover] = useState<TipeMenu>("Semua");
  const Menus: TipeMenu[] = ["Semua", "Memulai", "Umum", "Akun", "Kursus", "Tantangan"];
  const HandleClick = useCallback((menu: TipeMenu) => (setFilteredQuestions([menu]), setIsActiveHover(menu)), [setFilteredQuestions]);

  return (
    <section className="flex h-fit w-full max-w-full flex-row items-center overflow-y-auto pb-10 pt-10 text-slate-50 lg:w-1/4 lg:flex-col lg:items-start lg:pt-0">
      <span className="absolute left-0 top-[75rem] z-0 h-40 w-40 bg-[#f6790b] opacity-75 [filter:blur(8rem)]" />
      {Menus.map((menu, i: number) =>
        <h4 key={i} className="group mr-6 h-fit w-fit cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out first:mt-0 last:mr-0 lg:mr-0 lg:mt-7 lg:hover:text-slate-300" onClick={() => HandleClick(menu)}>
          <span className={`rounded-md transition-all duration-300 ease-in-out ${activeHover === menu ? "bg-slate-50 px-6 py-3 text-slate-950" : "bg-transparent text-slate-50"}`}>
            {menu}
          </span>
        </h4>
      )}
    </section>
  );
};