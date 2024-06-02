import React from "react";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { Footer } from "../components/global/footer";

export const IndexPage: React.FC = () => {
  return (
    <>
      <ScrollIndicator />
      <Header />
      <Footer />
    </>
  );
};