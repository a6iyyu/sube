import React from "react";
import { WebsiteMeta } from "../utils/global/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { ScrollToTop } from "../components/global/scroll-to-top";
import { Header } from "../components/global/header";
import { AboutHero } from "../components/tentang-kami/hero";
import { Footer } from "../components/global/footer";

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