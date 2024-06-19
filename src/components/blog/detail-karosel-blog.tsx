import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { Frontmatter, MDXModule } from "../../types/mdx";
import { WebsiteMeta } from "~/utils/global/website-meta";
import { Header } from "~/utils/global/header";
import { Footer } from "~/utils/global/footer";

export const DetailKaroselBlog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);
  const [_, setNotFound] = useState(false);

  useEffect(() => {
    const importMDX = async (slug: string) => {
      try {
        const MDXModules: MDXModule = await import(`../../content/blog/${slug}.mdx`);
        setMDXContent(() => MDXModules.default);
        setFrontmatter(MDXModules.frontmatter);
        setNotFound(false);
      } catch (error) {
        console.error("MDX file not found", error);
        setNotFound(true);
      }
    };

    if (slug) {
      importMDX(slug);
    }
  }, [slug]);

  if (!MDXContent) {
    return null;
  }

  return (
    <>
      <WebsiteMeta title={frontmatter?.judul || "404: Halaman Tidak Ditemukan"} description={frontmatter?.deskripsi || ""} icon={"" || ""} />
      <Header />
      <MDXProvider>
        <MDXContent />
      </MDXProvider>
      <Footer />
    </>
  );
};