import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { blogs } from "~/types/blogs";
import { WebsiteMeta } from "~/common/website-meta";
import { ScrollToTop } from "~/common/scroll-to-top";
import { ScrollIndicator } from "~/common/scroll-indicator";
import { Header } from "~/common/header";
import { Footer } from "~/common/footer";
import { MemuatHalaman } from "~/components/blog/memuat-halaman";
import { NotFoundPage } from "./404";

export const DetailTabelBlog: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const [blogs, setBlogs] = useState<blogs | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const RenderBlog = async (title: string) => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:2001/blog/${title}`);
        response.status === 404 ? setNotFound(true) : setBlogs(response.data);
      } catch (e) {
        console.error(e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (title) RenderBlog(title);
  }, [title]);

  if (loading) return <MemuatHalaman />;
  if (notFound) return <NotFoundPage />

  return (
    <>
      <WebsiteMeta title={blogs?.title || ""} description={blogs?.description || ""} />
      <ScrollToTop />
      <ScrollIndicator />
      <Header />
      <main className="mx-auto mb-40 mt-16 h-fit w-4/5 cursor-default text-justify font-normal text-slate-50 lg:mt-28">
        {blogs && (
          <section></section>
        )}
      </main>
      <Footer />
    </>
  );
};