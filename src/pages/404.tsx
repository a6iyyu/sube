import React from "react";
import { WebsiteMeta } from "../hooks/global/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { ScrollToTop } from "../components/global/scroll-to-top";
import { Header } from "../components/global/header";
import { Redirect } from "../components/404/redirect";
import { Footer } from "../components/global/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="404: Not Found!" description="" icon="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <Redirect />
      <Footer />
    </>
  );
};