import { Link } from "solid-app-router"
// import { MDXProvider } from "solid-jsx"
import Counter from "~/components/Counter"

export default function Home() {
  return (
    <article class="container w-full mx-auto prose prose-sm md:prose dark:prose-dark mt-5">
      <h1>About</h1>
      <div class="nav-line">
        <a class="nav-link" href="/about">About</a>
        <a class="nav-link" href="/projects">Projects</a>
        <a class="nav-link" href="/wiki">Wiki</a>
        <a class="nav-link" href="/likes">Likes</a>
        <a class="nav-link" href="/now">Now</a>
        <a class="nav-link" href="https://github.com/nikitavoloboev/ama">AMA</a>
        {/* TODO: upload file */}
        <a class="nav-link" href="https://nikiv.dev/cv">CV</a>
        <a class="nav-link" href="https://github.com/sponsors/nikitavoloboev">♥️</a>
      </div>
      <p>
        👋 I love [making](../projects) and [sharing](https://wiki.nikiv.dev/sharing/) things I have built with the
        world.
      </p>
      {/* TODO: should work, wait for https://github.com/high1/solid-jsx/issues/4 */}
      {
        /* <MDXProvider>
        <About />
      </MDXProvider> */
      }
    </article>
  )
}
