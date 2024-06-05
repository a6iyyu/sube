import React from "react";
import { WebsiteMeta } from "../hooks/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { CourseHero } from "../components/course/hero";
import { Footer } from "../components/global/footer";

export const CoursePage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="" description="" icon="" />
      <ScrollIndicator />
      <Header />
      <CourseHero />
      <Footer />
    </>
  );
};