import React, { useState } from "react";

export const PengirimanBerhasil: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      {visible && (
        <main className="fixed bottom-12 left-1/2 flex h-fit max-h-screen w-fit max-w-full -translate-x-1/2 items-center justify-center rounded-md bg-slate-200 py-3 pl-6 pr-4 text-slate-950 lg:left-12 lg:-translate-x-0">
          <h4 className="cursor-default text-lg font-medium">
            Pengiriman Berhasil!
          </h4>
          <i className="fa-solid fa-xmark ml-1 cursor-pointer rounded-full px-2.5 py-2 transition-all duration-300 ease-in-out hover:bg-slate-400/50" onClick={() => setVisible(false)} />
        </main>
      )}
    </>
  );
};