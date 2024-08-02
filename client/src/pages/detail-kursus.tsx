import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModulPembelajaran } from "~/data/props-modul-pembelajaran";
import { MemuatHalaman } from "~/components/blog/memuat-halaman";
import { NotFoundPage } from "./404";
import { WebsiteMeta } from "~/common/website-meta";
import { Header } from "~/common/header";
import { NotReadyPage } from "~/common/not-ready-page";
import { Footer } from "~/common/footer";

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
      <WebsiteMeta title={coursePage.judul} description={coursePage.deskripsi} />
      <Header />
      <NotReadyPage />
      <Footer />
    </>
  );
};