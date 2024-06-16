import React from "react";
import { WebsiteMeta } from "../hooks/global/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { ScrollToTop } from "../components/global/scroll-to-top";
import { Header } from "../components/global/header";
import { BlogHero } from "../components/blog/hero";
import { Footer } from "../components/global/footer";

export const BlogPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Bacaan Informatif dan Inspiratif" description="" icon="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BlogHero />
      <Footer />
    </>
  );
};