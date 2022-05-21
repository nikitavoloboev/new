import mdx from "@mdx-js/rollup"
import remarkGfm from "remark-gfm"
import solid from "solid-start"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    mdx({ jsxImportSource: "solid-jsx", remarkPlugins: [remarkGfm] }),
    solid(),
  ],
  build: {
    target: "esnext",
  },
})
