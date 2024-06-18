import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPath()],
  server: {
    host: true,
    port: 2222,
  },
});