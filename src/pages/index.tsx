import React from "react";
import { Title } from "../hooks/website-title";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { IndexHero } from "../components/index/hero";
import { Footer } from "../components/global/footer";

export const IndexPage: React.FC = () => {
  Title("Home");

  return (
    <>
      <ScrollIndicator />
      <Header />
      <IndexHero />
      <Footer />
    </>
  );
};