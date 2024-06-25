import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { BlogHero } from "~/components/blog/hero";
import { KaroselBlogTerbaru } from "~/components/blog/karosel-blog-terbaru";
import { Footer } from "~/common/footer";

export const Blog: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Blog - Temukan Bacaan Informatif dan Menginspirasi Anda" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BlogHero />
      <KaroselBlogTerbaru />
      <Footer />
    </>
  );
};