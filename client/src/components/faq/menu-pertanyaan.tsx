import React, { Dispatch, SetStateAction } from "react";
import { TipeMenu } from "~/data/props-daftar-faq";

export const MenuPertanyaan: React.FC<{ SetFilterMenuQuestion: Dispatch<SetStateAction<TipeMenu>> }> = ({ SetFilterMenuQuestion }) => {
  const Menus: TipeMenu[] = ["Semua", "Memulai", "Umum", "Akun", "Kursus", "Tantangan"];
  const HandleClick = (menu: TipeMenu) => SetFilterMenuQuestion(menu);

  return (
    <section className="flex h-fit max-w-full w-full flex-row overflow-y-auto lg:items-start items-center text-slate-50 lg:w-1/4 lg:flex-col">
      <span className="absolute left-0 top-[75rem] z-0 h-40 w-40 bg-[#f6790b] opacity-75 [filter:blur(8rem)]" />
      {Menus.map((menu, i: number) =>
        <h4 key={i} className="group mr-6 h-fit w-fit cursor-pointer text-lg font-semibold transition-all duration-300 ease-in-out first:mt-0 last:mr-0 lg:mr-0 lg:mt-4 lg:hover:text-slate-300" onClick={() => HandleClick(menu)}>
          <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
            {menu}
          </span>
        </h4>
      )}
    </section>
  );
};