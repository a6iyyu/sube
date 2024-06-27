import React, { useEffect, useState } from "react";
import { ImporBlog } from "~/utils/impor-blog";
import { blogs } from "../../../../server/types/blogs";

export const TabelBlog: React.FC = () => {
  const [importBlogs, setImportBlogs] = useState<blogs[]>([]);
  
  useEffect(() => {
    ImporBlog(setImportBlogs);
  }, []);

  return (
    <main>
      {importBlogs.map(test => (
        <h3>{test.title}</h3>
      ))}
    </main>
  )
};