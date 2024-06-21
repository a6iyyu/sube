import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { BlogHero } from "~/components/blog/hero";
import { Footer } from "~/utils/global/footer";

export const Blog: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Bacaan Informatif dan Inspiratif" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BlogHero />
      <Footer />
    </>
  );
};