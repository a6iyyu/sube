import React, { useState } from "react";

export const Notifikasi: React.FC<{ title: string, onclose: () => void }> = ({ title, onclose = () => {} }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <>
      {isVisible &&
        <main className="fixed bottom-12 left-1/2 flex h-fit max-h-screen w-fit max-w-full -translate-x-1/2 items-center justify-center rounded-md bg-slate-200 py-3 pl-6 pr-4 text-slate-950 md:left-[4.25rem] md:-translate-x-0">
          <h4 className="inline cursor-default text-base font-medium md:text-lg">
            {title}
          </h4>
          <i className="fa-solid fa-xmark ml-1 cursor-pointer rounded-full px-2.5 py-2 transition-all duration-300 ease-in-out hover:bg-slate-400/50" onClick={() => {setIsVisible(false), onclose()}} />
        </main>
      }
    </>
  );
};