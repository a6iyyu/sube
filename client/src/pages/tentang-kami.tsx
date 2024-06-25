import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { TentangKamiHero } from "~/components/tentang-kami/hero";
import { Footer } from "~/common/footer";

export const TentangKami: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Berkenalan Dengan Kami" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <TentangKamiHero />
      <Footer />
    </>
  );
};