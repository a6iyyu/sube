import React, { useEffect } from "react";
import axios from "axios";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollToTop } from "~/common/scroll-to-top";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { Header } from "~/common/header";
import { ProfilPengguna } from "~/components/akun/profil-pengguna";
import { PengaturanPengguna } from "~/components/akun/pengaturan-pengguna";
import { Footer } from "~/common/footer";

export const Dashboard: React.FC = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:2001/dashboard", {
          withCredentials: true,
        });
        if (response.status !== 200) window.location.href = "http://localhost:2000/masuk";
      } catch (e) {
        window.location.href = "http://localhost:2000/masuk";
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <WebsiteMeta title="Halaman Profil Anda" description="" />
      <ScrollToTop />
      <ScrollIndicator />
      <Header />
      <ProfilPengguna />
      <PengaturanPengguna />
      <Footer />
    </>
  );
};