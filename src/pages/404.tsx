import React from "react";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { ScrollIndicator } from "~/utils/global/scroll-indicator";
import { ScrollToTop } from "~/utils/global/scroll-to-top";
import { Header } from "~/utils/global/header";
import { Redirect } from "~/components/404/redirect";
import { Footer } from "~/utils/global/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="404: Halaman Tidak Ditemukan!" description="" icon="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <Redirect />
      <Footer />
    </>
  );
};