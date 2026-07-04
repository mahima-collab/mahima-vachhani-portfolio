import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const repoName = "mahima-vachhani-portfolio";
const base = process.env.GITHUB_PAGES === "true" ? `/${repoName}/` : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
