import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { HubungiKamiHero } from "~/components/hubungi-kami/hero";
import { Footer } from "~/utils/global/footer";

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