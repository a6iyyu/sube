import React, { useEffect } from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { BerandaHero } from "~/components/beranda/hero";
import { SilabusKurikulum } from "~/components/beranda/tujuan-kurikulum-kami";
import { FiturYangDisediakan } from "~/components/beranda/fitur-yang-disediakan";
import { JalurPembelajaran } from "~/components/beranda/jalur-pembelajaran";
import { Blog } from "~/components/beranda/blog";
import { KenalLebihDekat } from "~/components/beranda/kenal-lebih-dekat";
import { KamiTungguAntusiasmu } from "~/components/beranda/kami-tunggu-antusiasmu";
import { Footer } from "~/common/footer";

export const Beranda: React.FC = () => {
  useEffect(() => {
    ((document.getElementById("jelajahi-sekarang") as HTMLButtonElement) || null).addEventListener("click", () => {
      ((document.getElementById("silabus") as HTMLElement) || null).scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Sube - Tempat Belajar Organisasi #1 di Indonesia!" description="Belajar dengan cara yang menyenangkan di Sube – temukan kursus inovatif dalam kepemimpinan dan teknologi yang dirancang untuk memajukan karier dan keterampilan Anda." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BerandaHero />
      <SilabusKurikulum />
      <FiturYangDisediakan />
      <JalurPembelajaran />
      <Blog />
      <KenalLebihDekat />
      <KamiTungguAntusiasmu />
      <Footer />
    </>
  );
};