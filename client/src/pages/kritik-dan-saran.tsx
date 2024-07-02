import React from "react";
import { WebsiteMeta } from "~/common/website-meta";
import { Header } from "~/common/header";
import { KritikDanSaranHero } from "~/components/kritik-dan-saran/hero";
import { FormulirKritikDanSaran } from "~/components/kritik-dan-saran/kritik-&-saran";
import { Footer } from "~/common/footer";

export const KritikDanSaran: React.FC = () => {
  return (
    <>
      <WebsiteMeta title="Kritik dan Saran" description="" />
      <Header />
      <KritikDanSaranHero />
      <FormulirKritikDanSaran />
      <Footer />
    </>
  );
};