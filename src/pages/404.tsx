import React from "react";
import { Title } from "../hooks/website-title";
import { ScrollIndicator } from "../components/global/scroll-indicator";
import { Header } from "../components/global/header";
import { HandleNotFound } from "../components/404/404";
import { Footer } from "../components/global/footer";

export const NotFoundPage: React.FC = () => {
  Title("404: Not Found!")

  return (
    <>
      <ScrollIndicator />
      <Header />
      <HandleNotFound />
      <Footer />
    </>
  );
};