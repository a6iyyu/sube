import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { Frontmatter, MDXModule } from "~/types/mdx";
import { WebsiteMeta } from "~/common/website-meta";
import { Header } from "~/common/header";
import { Footer } from "~/common/footer";
import { MemuatHalaman } from "./memuat-halaman";
import { NotFoundPage } from "~/pages/404";

export const DetailKaroselBlog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const ImportMDX = async (slug: string) => {
      setLoading(true);
      try {
        const MDXModules: MDXModule = await import(`../../content/blog/${slug}.mdx`);
        setMDXContent(() => MDXModules.default);
        setFrontmatter(MDXModules.frontmatter);
        setNotFound(false);
      } catch (error) {
        console.error("MDX file not found", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      ImportMDX(slug);
    }
  }, [slug]);

  if (loading) return <MemuatHalaman />;
  if (!MDXContent || notFound)  return <NotFoundPage />;

  return (
    <>
      <WebsiteMeta title={frontmatter?.judul || "404: Halaman Tidak Ditemukan"} description={frontmatter?.deskripsi || ""} />
      <Header />
      <main className="mx-auto mb-40 mt-28 h-fit w-4/5 cursor-default text-justify font-normal text-slate-50">
        <MDXProvider>
          <MDXContent />
        </MDXProvider>
      </main>
      <Footer />
    </>
  );
};