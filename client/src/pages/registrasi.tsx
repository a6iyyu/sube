import React, { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";
import { WebsiteMeta } from "~/common/website-meta";
import { FormulirRegistrasi } from "~/components/akun/registrasi";
import { Notifikasi } from "~/common/notification";

export const Registrasi: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:2001/auth/registrasi");
        if (response.status === 409) (setNotification("Pengguna dengan data tersebut sudah ada!"), setShowNotification(true));
      } catch (e) {
        isAxiosError(e) && e.response?.status === 400 ? setNotification("Data yang dikirim tidak valid!") : (isAxiosError(e) && e.response?.status === 500 ? setNotification("Terjadi kesalahan!") : console.error(e));
      }
    })();
  }, []);

  return (
    <>
      <WebsiteMeta title="Daftarkan Dirimu Sekarang!" description="" />
      <FormulirRegistrasi />
      {notification && showNotification && <Notifikasi title={notification} onclose={() => setShowNotification(true)} />}
    </>
  );
};