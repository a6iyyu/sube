import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { BlogHero } from "~/components/blog/hero";
import { KaroselBlog } from "~/components/blog/karosel-blog";
import { TabelBlog } from "~/components/blog/tabel-blog";
import { Footer } from "~/common/footer";

export const Blog: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Blog - Temukan Bacaan Informatif dan Menginspirasi Anda" description="Dapatkan inspirasi dan informasi terkini yang menghadirkan bacaan terbaru untuk Anda." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BlogHero />
      <KaroselBlog />
      <TabelBlog />
      <Footer />
    </>
  );
};