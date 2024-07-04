import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { Header } from "~/common/header";
import { KritikDanSaranHero } from "~/components/kritik-dan-saran/hero";
import { FormulirKritikDanSaran } from "~/components/kritik-dan-saran/formulir-kritik-&-saran";
import { Footer } from "~/common/footer";

export const KritikDanSaran: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Help - Ajukan Kritik dan Saran" description="" />
      <ScrollIndicator />
      <Header />
      <KritikDanSaranHero />
      <FormulirKritikDanSaran />
      <Footer />
    </>
  );
};