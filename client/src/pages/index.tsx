import React, { useEffect } from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { IndeksHero } from "~/components/index/hero";
import { SilabusKurikulum } from "~/components/index/tujuan-kurikulum-kami";
import { FiturYangDisediakan } from "~/components/index/fitur-yang-disediakan";
import { JalurPembelajaran } from "~/components/index/jalur-pembelajaran";
import { Blog } from "~/components/index/blog";
import { KenalLebihDekat } from "~/components/index/kenal-lebih-dekat";
import { KamiTungguAntusiasmu } from "~/components/index/kami-tunggu-antusiasmu";
import { Footer } from "~/common/footer";

export const Indeks: React.FC = () => {
  useEffect(() => {
    ((document.getElementById("jelajahi-sekarang") as HTMLButtonElement) || null).addEventListener("click", () => {
      ((document.getElementById("silabus") as HTMLElement) || null).scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Sube - Tempat Belajar Organisasi #1 di Indonesia!" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <IndeksHero />
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