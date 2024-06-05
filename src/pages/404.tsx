import React from "react";
import { WebsiteMeta } from "../hooks/website-meta";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { HandleNotFound } from "../components/404/404";
import { Footer } from "../components/global/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="" description="" icon="" />
      <ScrollIndicator />
      <Header />
      <HandleNotFound />
      <Footer />
    </>
  );
};