import React, { useEffect, useState } from "react";
import axios from "axios";
import { Notifikasi } from "~/common/notification";

export const PengaturanPengguna: React.FC = () => {
  const [notification, setNotification] = useState<{ showMessage: string, isVisible: boolean }>({ showMessage: "", isVisible: false });

  const HandleLogout = async () => {
    try {
      const response = await axios.post("https://sube-server.vercel.app/auth/keluar", {}, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        withXSRFToken: true,
      });
      response.status === 200 ? window.location.href = "https://sukabelajar.vercel.app/masuk" : setNotification({ showMessage: response.data.message, isVisible: true });
    } catch (e) {
      console.error(e);
      setNotification({ showMessage: "Terjadi kesalahan!", isVisible: true });
    }
  };

  useEffect(() => {
    const NotificationTimeout = setTimeout(() => setNotification({ showMessage: "", isVisible: false }), 3000);
    return () => clearTimeout(NotificationTimeout);
  }, []);

  return (
    <main className="mx-auto mb-40 mt-10 h-fit w-4/5 text-slate-50 lg:mt-20">
      {notification.isVisible && <Notifikasi title={notification.showMessage} onclose={() => setNotification({ ...notification, isVisible: false })} />}
      <hr className="h-0.5 w-full rounded-full" />
      <h3 className="mt-10 cursor-default text-3xl font-bold">Pengaturan</h3>
      <section className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex h-full w-full flex-col lg:w-4/5">
          <h3 className="mt-10 cursor-default text-xl font-bold">
            Selesai Beraktivitas?
          </h3>
          <h5 className="mt-4 cursor-default text-lg">
            Akhiri sesi Anda dengan aman dan keluar dari akun Anda untuk
            memastikan data pribadi Anda tetap terlindungi dan aman.
          </h5>
        </div>
        <div className="mt-6 flex h-full w-full items-center lg:mt-0 lg:w-1/5 lg:justify-end">
          <button onClick={HandleLogout} className="cursor-pointer rounded-md bg-slate-50 px-9 py-3 text-lg font-bold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200" type="submit">
            Keluar
          </button>
        </div>
      </section>
    </main>
  );
};