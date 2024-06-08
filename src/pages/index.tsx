import React from "react";
import { WebsiteMeta } from "../hooks/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { IndexHero } from "../components/index/hero";
import { SilabusKurikulum } from "../components/index/silabus-kurikulum";
import { Footer } from "../components/global/footer";

export const IndexPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta
        title="Sube: Tempat Belajar Organisasi #1 di Indonesia!"
        description=""
        icon=""
      />
      <ScrollIndicator />
      <Header />
      <IndexHero />
      <SilabusKurikulum />
      <Footer />
    </>
  );
};