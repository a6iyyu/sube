import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { Redirect } from "~/components/404/redirect";
import { Footer } from "~/common/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="404: Halaman Tidak Ditemukan!" description="Sayang sekali, halaman yang Anda cari tidak ditemukan!" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <Redirect />
      <Footer />
    </>
  );
};