export type Frontmatter = {
  gambar: string;
  judul: string;
  deskripsi: string;
};

export type MDXModule = {
  default: React.ComponentType;
  frontmatter: Frontmatter;
};