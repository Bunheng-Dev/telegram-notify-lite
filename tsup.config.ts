import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // support both Node + Next.js
  dts: true,
  clean: true,
});