import React, { useEffect } from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { IndeksHero } from "~/components/index/hero";
import { SilabusKurikulum } from "~/components/index/tujuan-kurikulum-kami";
import { FiturYangDisediakan } from "~/components/index/fitur-yang-disediakan";
import { JalurPembelajaran } from "~/components/index/jalur-pembelajaran";
import { Blog } from "~/components/index/blog";
import { KenalLebihDekat } from "~/components/index/kenal-lebih-dekat";
import { Footer } from "~/utils/global/footer";

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
      <WebsiteMeta title="Sube: Tempat Belajar Organisasi #1 di Indonesia!" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <IndeksHero />
      <SilabusKurikulum />
      <FiturYangDisediakan />
      <JalurPembelajaran />
      <Blog />
      <KenalLebihDekat />
      <Footer />
    </>
  );
};