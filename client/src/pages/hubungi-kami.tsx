import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { HubungiKamiHero } from "~/components/hubungi-kami/hero";
import { Footer } from "~/common/footer";

export const HubungiKami: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <HubungiKamiHero />
      <Footer />
    </>
  );
};