import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImporBlog } from "~/utils/impor-blog";
import { MemendekkanKalimat } from "~/utils/memendekkan-kalimat";
import { blogs } from "~/types/blogs";

export const TabelBlog: React.FC = () => {
  const [importBlogs, setImportBlogs] = useState<blogs[]>([]);

  useEffect(() => {
    ImporBlog(setImportBlogs);
  }, []);

  return (
    <main className="mx-auto mb-40 mt-20 grid h-fit w-4/5 grid-cols-1 gap-10 lg:grid-cols-2">
      {importBlogs.map(blog =>
        <Link to={`/blog/${blog.title.replace(/ /g, "-").toLowerCase()}`}>
          <section className="flex h-fit w-fit flex-col transition-all duration-300 ease-in-out">
            <div className="h-72 w-full">
              <img src={blog.image} alt={blog.title} className="h-full w-full rounded-lg object-cover" />
            </div>
            <h2 className="group mt-4 text-center text-2xl font-bold text-slate-50 transition-all duration-300 ease-in-out lg:text-justify">
              <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                {blog.title}
              </span>
            </h2>
            <h4 className="group mt-4 text-justify text-slate-50 transition-all duration-300 ease-in-out">
              <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_0.125rem] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_0.125rem]">
                {MemendekkanKalimat(blog.description, 100)}
              </span>
            </h4>
          </section>
        </Link>
      )}
    </main>
  );
};