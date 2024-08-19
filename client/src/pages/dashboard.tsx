import React, { useEffect } from "react";
import axios from "axios";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { ProfilPengguna } from "~/components/akun/profil-pengguna";
import { PengaturanPengguna } from "~/components/akun/pengaturan-pengguna";
import { Footer } from "~/common/footer";

export const Dashboard: React.FC = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://sube-server.vercel.app/dashboard");
        if (response.status !== 200) window.location.href = "https://sukabelajar.vercel.app/masuk";
      } catch (e) {
        console.error(e);
        window.location.href = "https://sukabelajar.vercel.app/masuk";
      }
    })();
  }, []);

  return (
    <>
      <WebsiteMeta title="Halaman Profil Anda" description="Akses dan kelola informasi profil Anda serta pantau kemajuan pembelajaran melalui dashboard Sube." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <ProfilPengguna />
      <PengaturanPengguna />
      <Footer />
    </>
  );
};