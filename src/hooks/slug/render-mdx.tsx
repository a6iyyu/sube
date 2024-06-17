import { ComponentType } from "react";

const ModulMDX: Record<string, { default: ComponentType; frontmatter: { slug: string, gambar: string, judul: string, deskripsi: string } }> = import.meta.glob("../../content/*.mdx", { eager: true }) as Record<string, { default: ComponentType; frontmatter: { slug: string, gambar: string, judul: string, deskripsi: string } }>;

export const DapatMDX = () => {
  return Object.values(ModulMDX);
};

export const RenderMDX = (slug: string) => {
  const MDX = Object.values(ModulMDX).find(mod => mod.frontmatter.slug === slug);
  if (!MDX) throw new Error(`Error: No MDX file found for slug ${slug}`);

  return {
    MDXComponent: MDX.default,
    frontmatter: MDX.frontmatter,
  };
};