import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { KursusHero } from "~/components/kursus/hero";
import { Footer } from "~/utils/global/footer";

export const Kursus: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Mari Belajar Disini!" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <KursusHero />
      <Footer />
    </>
  );
};