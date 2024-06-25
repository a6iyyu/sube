import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { KursusHero } from "~/components/kursus/hero";
import { Footer } from "~/common/footer";

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