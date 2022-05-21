import { Link } from "solid-app-router"
// import { MDXProvider } from "solid-jsx"
import Counter from "~/components/Counter"

export default function Home() {
  return (
    <article class="container prose prose-sm md:prose dark:prose-dark">
      <h1>About</h1>
      {/* TODO: should work, wait for https://github.com/high1/solid-jsx/issues/4 */}
      {
        /* <MDXProvider>
        <About />
      </MDXProvider> */
      }
    </article>
  )
}
