import React from "react";
import { WebsiteMeta } from "../hooks/global/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { ScrollToTop } from "../components/global/scroll-to-top";
import { Header } from "../components/global/header";
import { AboutHero } from "../components/about/hero";
import { Footer } from "../components/global/footer";

export const AboutPage: React.FC = () => {
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