import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        dateToString: "./src/dateToString.ts",
      },
      formats: ["cjs"],
    },
  },
});
