import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { TantanganHero } from "~/components/tantangan/hero";
import { Footer } from "~/common/footer";

export const Tantangan: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Course - Tantang Dirimu Menjadi yang Terdepan!" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <TantanganHero />
      <Footer />
    </>
  );
};