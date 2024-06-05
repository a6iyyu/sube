import React from "react";
import { WebsiteMeta } from "../hooks/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { Redirect } from "../components/404/redirect";
import { Footer } from "../components/global/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="404: Not Found!" description="" icon="" />
      <ScrollIndicator />
      <Header />
      <Redirect />
      <Footer />
    </>
  );
};