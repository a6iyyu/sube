import React from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "~/pages/404";
import { KeterampilanBerpikirKritis } from "~/content/blog/keterampilan-berpikir-kritis-untuk-pemimpin-masa-depan";
import { MengembangkanKepemimpinan } from "~/content/blog/mengembangkan-kepemimpinan-di-era-digital";
import { MeningkatkanInovasi } from "~/content/blog/meningkatkan-inovasi-di-tempat-kerja";
import { StrategiManajemen } from "~/content/blog/strategi-manajemen-proyek-untuk-kesuksesan";
import { TransformasiDigital } from "~/content/blog/transformasi-digital-dalam-pendidikan";

const URLKaroselBlog: { [key: string]: React.FC } = {
  "keterampilan-berpikir-kritis-untuk-pemimpin-masa-depan": KeterampilanBerpikirKritis,
  "mengembangkan-kepemimpinan-di-era-digital": MengembangkanKepemimpinan,
  "meningkatkan-inovasi-di-tempat-kerja": MeningkatkanInovasi,
  "strategi-manajemen-proyek-untuk-kesuksesan": StrategiManajemen,
  "transformasi-digital-dalam-pendidikan": TransformasiDigital,
};

export const DetailKaroselBlog: React.FC = () => {
  const { judul } = useParams<{ judul: string }>();
  const RenderKaroselBlog = URLKaroselBlog[judul!];

  return <>{RenderKaroselBlog ? <RenderKaroselBlog /> : <NotFoundPage />}</>;
};
