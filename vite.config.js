import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      const index = resolve("dist/index.html");
      copyFileSync(index, resolve("dist/404.html"));
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
});

