import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { NotReadyPage } from "~/common/not-ready-page";
import { Footer } from "~/common/footer";

export const Tantangan: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Course - Tantang Dirimu Menjadi yang Terdepan!" description="Ikuti berbagai tantangan dan bekerja sama dengan pengguna lain untuk mencapai tujuan bersama!" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <NotReadyPage />
      <Footer />
    </>
  );
};