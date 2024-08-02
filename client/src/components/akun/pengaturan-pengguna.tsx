import React, { useEffect, useState } from "react";
import axios from "axios";
import { Notifikasi } from "~/common/notification";

export const PengaturanPengguna: React.FC = () => {
  const [notification, setNotification] = useState<{ showMessage: string, isVisible: boolean }>({ showMessage: "", isVisible: false });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:2001/auth/logout", { withCredentials: true });
        response.status !== 200 ? setNotification({ showMessage: response.data.message, isVisible: true }) : window.location.href = "http://localhost:2000/masuk"
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <main className="mx-auto mb-60 mt-10 h-fit w-4/5 text-slate-50 lg:mt-20">
      {notification.isVisible && <Notifikasi title={notification.showMessage} onclose={() => setNotification({ ...notification, isVisible: false })} />}
      <hr className="h-0.5 w-full rounded-full" />
      <h3 className="mt-10 cursor-default text-3xl font-bold">Pengaturan</h3>
      <section className="flex items-center justify-between">
        <div className="flex h-full w-4/5 flex-col">
          <h3 className="mt-10 cursor-default text-xl font-bold">
            Selesai Beraktivitas?
          </h3>
          <h5 className="mt-4 cursor-default text-lg">
            Akhiri sesi Anda dengan aman dan keluar dari akun Anda untuk
            memastikan data pribadi Anda tetap terlindungi dan aman.
          </h5>
        </div>
        <form action="" method="post" className="grid h-full w-1/5 place-items-center">
          <button className="cursor-pointer rounded-xl bg-slate-50 px-9 py-4 text-lg font-bold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200" type="submit">
            Keluar
          </button>
        </form>
      </section>
    </main>
  );
};