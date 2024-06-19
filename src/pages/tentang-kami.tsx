import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { AboutHero } from "~/components/tentang-kami/hero";
import { Footer } from "~/utils/global/footer";

export const TentangKami: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Berkenalan Dengan Kami" description="" icon="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <AboutHero />
      <Footer />
    </>
  );
};