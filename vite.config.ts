/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/(*.)?{test,spec}.{js,ts,jsx,tsx}"],
    exclude: ["node_modules"],
    setupFiles: "./src/tests/setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
