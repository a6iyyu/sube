import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollToTop } from "~/common/scroll-to-top";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { Header } from "~/common/header";
import { ProfilPengguna } from "~/components/akun/profil-pengguna";
import { PengaturanPengguna } from "~/components/akun/pengaturan-pengguna";
import { Footer } from "~/common/footer";

export const Dashboard: React.FC = () => {
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