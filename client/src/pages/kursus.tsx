import React, { useEffect } from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { KursusHero } from "~/components/kursus/hero";
import { DaftarKursus } from "~/components/kursus/daftar-kursus";
import { Footer } from "~/common/footer";

export const Kursus: React.FC = () => {
  useEffect(() => {
    ((document.getElementById("eksplor-minatmu") as HTMLButtonElement) || null).addEventListener("click", () => {
      ((document.getElementById("daftar-kursus") as HTMLElement) || null).scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Course - Mari Belajar Disini!" description="Temukan kursus-kursus terbaru dan terbaik di halaman Kursus Sube. Akses berbagai program belajar untuk meningkatkan keahlian Anda dalam kepemimpinan dan teknologi." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <KursusHero />
      <DaftarKursus />
      <Footer />
    </>
  );
};