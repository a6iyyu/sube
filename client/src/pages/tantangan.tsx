import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { TantanganHero } from "~/components/tantangan/hero";
import { Footer } from "~/utils/global/footer";

export const Tantangan: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Tantang Dirimu Menjadi yang Terdepan!" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <TantanganHero />
      <Footer />
    </>
  );
};