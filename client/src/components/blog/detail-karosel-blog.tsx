import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { Frontmatter, MDXModule } from "../../types/mdx";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { Header } from "~/utils/global/header";
import { Footer } from "~/utils/global/footer";
import { MemuatHalaman } from "./memuat-halaman";
import { NotFoundPage } from "~/pages/404";

export const DetailKaroselBlog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const importMDX = async (slug: string) => {
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
      importMDX(slug);
    }
  }, [slug]);

  if (loading) {
    return <MemuatHalaman />;
  }

  if (!MDXContent || notFound) {
    return <NotFoundPage />;
  }

  return (
    <>
      <WebsiteMeta title={frontmatter?.judul || "404: Halaman Tidak Ditemukan"} description={frontmatter?.deskripsi || ""} icon={"" || ""} />
      <Header />
      <main className="mx-auto my-28 h-fit w-4/5 cursor-default text-justify font-medium text-slate-50">
        <MDXProvider>
          <MDXContent />
        </MDXProvider>
      </main>
      <Footer />
    </>
  );
};