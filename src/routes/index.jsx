import { Link } from "solid-app-router"
import { MDXProvider } from "solid-jsx"
import Counter from "~/components/Counter"
import About from "~/mdx/index.mdx"

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {/* TODO: should work, wait for https://github.com/high1/solid-jsx/issues/4 */}
      <MDXProvider>
        <About />
      </MDXProvider>
    </main>
  )
}
