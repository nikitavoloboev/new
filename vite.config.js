import solid from "solid-start"
import vercel from "solid-start-vercel";
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      adapter: vercel(),
      extensions: [".mdx", ".md"],
    }),
  ],
})
