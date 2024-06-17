import React from "react";
import { WebsiteMeta } from "../hooks/global/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { ScrollToTop } from "../components/global/scroll-to-top";
import { Header } from "../components/global/header";
import { CourseHero } from "../components/kursus/hero";
import { Footer } from "../components/global/footer";

export const Kursus: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Mari Belajar Disini!" description="" icon="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <CourseHero />
      <Footer />
    </>
  );
};