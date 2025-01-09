import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import react from "@vitejs/plugin-react-swc";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }),
    react(),
    tsconfigPath(),
  ],
  server: {
    host: true,
    port: 2000,
  },
});