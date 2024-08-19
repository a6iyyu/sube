import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { SambutanDariPengembang } from "~/components/tentang-kami/sambutan-dari-pengembang";
import { MengenalPengembangSube } from "~/components/tentang-kami/mengenal-pengembang-sube";
import { MetodologiPembelajaran } from "~/components/tentang-kami/metodologi-pembelajaran";
import { Komunitas } from "~/components/tentang-kami/komunitas";
import { HubungiKami } from "~/components/tentang-kami/hubungi-kami";
import { Footer } from "~/common/footer";

export const TentangKami: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Berkenalan Dengan Kami" description="Kenali lebih dekat dengan Sube. Kami menjelaskan misi kami, visi masa depan, dan siapa saja yang berperan dalam mengembangkan platform e-learning kami." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <SambutanDariPengembang />
      <MengenalPengembangSube />
      <MetodologiPembelajaran />
      <Komunitas />
      <HubungiKami />
      <Footer />
    </>
  );
};