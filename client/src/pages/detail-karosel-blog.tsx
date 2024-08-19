import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { Frontmatter, MDXModule } from "~/types/mdx";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { ScrollToTop } from "~/common/scroll-to-top";
import { Header } from "~/common/header";
import { Footer } from "~/common/footer";
import { MemuatHalaman } from "../components/blog/memuat-halaman";
import { NotFoundPage } from "~/pages/404";

export const DetailKaroselBlog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const ImportMDX = async (slug: string) => {
      setLoading(true);
      try {
        const MDXModules: MDXModule = await import(`../content/${slug}.mdx`);
        setMDXContent(() => MDXModules.default);
        setFrontmatter(MDXModules.frontmatter);
        setNotFound(false);
      } catch (e) {
        console.error(e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) ImportMDX(slug);
  }, [slug]);

  if (loading) return <MemuatHalaman />;
  if (!MDXContent || notFound || !frontmatter) return <NotFoundPage />;

  return (
    <>
      <WebsiteMeta title={frontmatter.judul || "404: Halaman Tidak Ditemukan"} description={frontmatter.deskripsi || "Sayang sekali, halaman yang Anda cari tidak ditemukan!"} />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <main className="mx-auto mb-40 mt-16 h-fit w-4/5 cursor-default text-justify font-normal text-slate-50 lg:mt-28">
        <MDXProvider>
          <section className="mb-10 inline h-fit w-full lg:hidden">
            <img src={frontmatter.gambar} alt={frontmatter.judul} className="h-full w-full rounded-xl object-cover transition-all duration-300 ease-in-out [box-shadow:0.4rem_0.4rem_0_#bcbcbc50] lg:hover:scale-[1.025]" />
          </section>
          <MDXContent />
        </MDXProvider>
      </main>
      <Footer />
    </>
  );
};