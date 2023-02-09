import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "src",
        replacement: path.join(__dirname, "src"),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
