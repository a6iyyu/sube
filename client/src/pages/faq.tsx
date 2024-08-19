import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { FAQHero } from "~/components/faq/hero";
import { DaftarPertanyaanDanJawaban } from "~/components/faq/daftar-pertanyaan-dan-jawaban";
import { Footer } from "~/common/footer";

export const FAQ: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Help - Pusat Bantuan dan Pertanyaan" description="Cari tahu semua yang Anda butuhkan untuk memulai dengan Sube di halaman FAQ kami. Dapatkan jawaban cepat untuk pertanyaan tentang akun, kursus, dan lebih banyak lagi." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <FAQHero />
      <DaftarPertanyaanDanJawaban />
      <Footer />
    </>
  );
};