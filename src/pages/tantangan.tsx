import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/components/global/scroll-indicator";
import { ScrollToTop } from "~/components/global/scroll-to-top";
import { Header } from "~/components/global/header";
import { HeroTantangan } from "~/components/tantangan/hero";
import { Footer } from "~/components/global/footer";

export const Tantangan: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Tantang Dirimu Menjadi yang Terdepan!" description="" icon="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <HeroTantangan />
      <Footer />
    </>
  );
};