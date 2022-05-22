import Nav from "~/components/Nav";

export default function Projects() {
  return (
    <article class="container w-full mx-auto prose prose-sm md:prose dark:prose-dark mt-5">
      <Nav header={"Projects"} activePage={"Projects"} />
      <p>
        I am currently making{" "}
        <a href="https://learn-anything.xyz">Learn Anything</a>.{" "}
        <a href="https://wiki.nikiv.dev/sharing/">Sharing things</a>, writing a{" "}
        <a href="https://wiki.nikiv.dev/">wiki</a> and building{" "}
        <a href="https://wiki.nikiv.dev/ideas/">ideas</a>.
      </p>
      <p>My present and past projects include:</p>
      <h2 id="learn-anything">Learn Anything</h2>
      <p>
        <a href="https://learn-anything.xyz">Learn Anything</a> is an{" "}
        <a href="https://github.com/learn-anything/learn-anything">
          open source
        </a>{" "}
        website to learn any topic as fast as possible.
      </p>
      <p>
        The <a href="https://docs.learn-anything.xyz/roadmap">end goal</a> is to
        create a machine learning system that can craft personalized study plans
        for learning any topic and an open knowledge graph anyone can explore
        and extend.
      </p>
      <h2 id="alfred-workflows">Alfred Workflows</h2>
      <p>
        I love programming in Go and making{" "}
        <a href="https://github.com/learn-anything/alfred-workflows">
          Alfred workflows
        </a>
        .
      </p>
      <p>Here are some workflows I made that I use myself daily:</p>
      <ul>
        <li>
          <a href="https://github.com/nikitavoloboev/alfred-web-searches">
            Web Searches
          </a>{" "}
          - Search through any website (easily extendable list).
        </li>
        <li>
          <a href="https://github.com/nikitavoloboev/alfred-ask-create-share">
            Ask Create Share
          </a>{" "}
          - Create web submissions (Stack exchange, Reddit and more).
        </li>
        <li>
          <a href="https://github.com/nikitavoloboev/alfred-learn-anything">
            Learn Anything
          </a>{" "}
          - Search through all topics in{" "}
          <a href="https://learn-anything.xyz">Learn Anything</a>.
        </li>
        <li>
          <a href="https://github.com/nikitavoloboev/alfred-my-mind">My Mind</a>{" "}
          - Search through my bookmarks and notes.
        </li>
        <li>
          <a href="https://github.com/nikitavoloboev/alfred-awesome-lists">
            Awesome Lists
          </a>{" "}
          - Browse all{" "}
          <a href="https://github.com/sindresorhus/awesome">awesome lists</a> in
          seconds.
        </li>
        <li>
          <a href="https://github.com/nikitavoloboev/small-workflows">
            Small workflows
          </a>{" "}
          - Small Alfred workflows I use.
        </li>
      </ul>
      <h2 id="cli-tools">CLI tools</h2>
      <ul>
        <li>
          <a href="https://github.com/nikitavoloboev/license-up">License Up</a>{" "}
          - Create a license quickly for a given name.
        </li>
      </ul>
      <h2 id="go-libraries">Go libraries</h2>
      <ul>
        <li>
          <a href="https://github.com/nikitavoloboev/markdown-parser">
            Markdown parser
          </a>{" "}
          - Parse markdown to grab various things.
        </li>
      </ul>
      <h2 id="my-macos-and-ios-workflow">My macOS and iOS workflow</h2>
      <p>
        I share fully my{" "}
        <a href="https://github.com/nikitavoloboev/my-mac-os">macOS</a> and{" "}
        <a href="https://github.com/nikitavoloboev/my-ios">iOS</a> personal
        setups. Where I share which applications and tools I use and love. I
        also share my{" "}
        <a href="https://github.com/nikitavoloboev/dotfiles">dotfiles</a>. I{" "}
        <a href="https://wiki.nikiv.dev/sharing/my-workflow">
          describe my workflow more extensively
        </a>{" "}
        in my wiki.
      </p>
      <p>
        And I made a{" "}
        <a href="https://t.me/joinchat/BBKnQU4_rty6_942PFbPbw">
          Telegram group
        </a>{" "}
        to discuss all things automation on macOS/iOS.
      </p>
      <h2 id="curated-lists">Curated lists</h2>
      <p>
        I mostly focus on curating and maintaining the various{" "}
        <a href="https://github.com/learn-anything/curated-lists">
          curated lists
        </a>{" "}
        which include things like{" "}
        <a href="https://github.com/learn-anything/books">books</a>,{" "}
        <a href="https://github.com/learn-anything/courses">courses</a>,{" "}
        <a href="https://github.com/learn-anything/blogs">blogs</a> and more.
      </p>
      <p>
        And I made a curated list of{" "}
        <a href="https://github.com/nikitavoloboev/privacy-respecting">
          privacy respecting tools and services
        </a>{" "}
        and a list of ways to prepare and places to look to{" "}
        <a href="https://github.com/nikitavoloboev/find-work">
          find work programming
        </a>
        .
      </p>
      <h2 id="other-things">Other things</h2>
      <p>
        I am continuously{" "}
        <a href="https://www.notion.so/Learn-05c0eac7be904e0da89cd8a3bf7ab509">
          learning
        </a>
        , <a href="https://wiki.nikiv.dev/sharing/my-articles">writing</a>,
        reading <a href="https://wiki.nikiv.dev/books/">books</a> and{" "}
        <a href="https://wiki.nikiv.dev/research-papers/">research papers</a>,{" "}
        <a href="https://www.youtube.com/channel/UCEKqrUfr_FMKIO9XSJS4vDw/videos">
          making videos
        </a>{" "}
        and <a href="https://wiki.nikiv.dev/sharing/my-github">writing code</a>.
      </p>
    </article>
  );
}
