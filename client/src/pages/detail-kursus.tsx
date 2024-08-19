import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "./404";
import { MemuatHalaman } from "~/components/blog/memuat-halaman";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { NotReadyPage } from "~/common/not-ready-page";
import { Footer } from "~/common/footer";
import { ModulPembelajaran } from "~/data/props-modul-pembelajaran";

export const DetailKursus: React.FC = () => {
  const { judul } = useParams<{ judul: string }>();
  const [coursePage, setCoursePage] = useState<typeof ModulPembelajaran[number] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const foundCourse = ModulPembelajaran.find(modul => modul.judul.replace(/ /g, "-").toLowerCase() === judul!.replace(/ /g, "-").toLowerCase());
    if (foundCourse) setCoursePage(foundCourse);
    setLoading(false);
  }, [judul]);

  if (loading) return <MemuatHalaman />
  if (!coursePage) return <NotFoundPage />

  return (
    <>
      <WebsiteMeta title={coursePage.judul || "404: Halaman Tidak Ditemukan"} description={coursePage.deskripsi || "Sayang sekali, halaman yang Anda cari tidak ditemukan!"} />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <NotReadyPage />
      <Footer />
    </>
  );
};