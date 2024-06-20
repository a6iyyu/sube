import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{cjs,js,mjs,cts,mts,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;