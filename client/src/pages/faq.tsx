import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { FAQHero } from "~/components/faq/hero";
import { Footer } from "~/utils/global/footer";

export const FAQ: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <FAQHero />
      <Footer />
    </>
  );
};