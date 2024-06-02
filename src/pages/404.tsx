import React from "react";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { HandleNotFound } from "../components/404/404";
import { Footer } from "../components/global/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <ScrollIndicator />
      <Header />
      <HandleNotFound />
      <Footer />
    </>
  );
};