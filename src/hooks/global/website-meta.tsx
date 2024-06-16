import React, { useEffect } from "react";

interface WebsiteMetaProps {
  title: string;
  description: string;
  icon: string;
}

export const WebsiteMeta: React.FC<WebsiteMetaProps> = ({ title, description, icon }) => {
  useEffect(() => {
    document.title = title;

    if (!document.querySelector('meta[name="description"]')) {
      const metadesc = document.createElement("meta");
      metadesc.name = "description";
      metadesc.content = description;
      document.head.appendChild(metadesc);
    }
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);

    if (!document.querySelector('link[rel="icon"]')) {
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.href = icon;
      document.head.appendChild(favicon);
    }
    document.querySelector('link[rel="icon"]')?.setAttribute("href", icon);
  }, [title, description, icon]);

  return null;
};