// import { Dynamic } from "solid-js/web";
// import marked from "marked";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

// function Markdown({ children }: { children: string }) {
//   // @ts-ignore
//   return <Dynamic component="p" innerHTML={marked.parse(children)} />;
// }

export default function Home() {
  return (
    <article class="container w-full mx-auto prose prose-sm md:prose dark:prose-dark mt-5">
      <Nav header={"About"} activePage={"About"} />
      <div>
        <p>
          👋 I love <a href="../projects">making</a> and{" "}
          <a href="https://wiki.nikiv.dev/sharing/">sharing</a> things I have
          built with the world.
        </p>
        <p>
          📚 Building <a href="https://learn-anything.xyz">Learn Anything</a>,
          an{" "}
          <a href="https://github.com/learn-anything/learn-anything">
            open source
          </a>{" "}
          website for{" "}
          <a href="https://docs.learn-anything.xyz/roadmap">
            learning any topic as fast as possible
          </a>
          .
        </p>
        <p>
          🖋 I love writing. You can read{" "}
          <a href="https://wiki.nikiv.dev/sharing/my-articles">
            all the articles
          </a>{" "}
          I wrote or take a look through{" "}
          <a href="https://wiki.nikiv.dev/">my personal wiki</a> where I share{" "}
          <a href="https://wiki.nikiv.dev/sharing/everything-I-know">
            everything I know
          </a>
          .
        </p>
        <p>
          🌐 I share my thoughts on{" "}
          <a href="https://twitter.com/nikitavoloboev">Twitter</a>. I share my{" "}
          <a href="https://wiki.nikiv.dev/sharing/my-github">code</a> on{" "}
          <a href="https://github.com/nikitavoloboev">GitHub</a> and you can see
          photos I took on{" "}
          <a href="https://www.instagram.com/nikitavoloboev">Instagram</a>.
        </p>
        <p>
          🎥 I also make educational{" "}
          <a href="https://www.youtube.com/channel/UCEKqrUfr_FMKIO9XSJS4vDw">
            YouTube videos
          </a>{" "}
          and share{" "}
          <a href="https://open.spotify.com/user/nikitavoloboev">
            music playlists
          </a>
          .
        </p>

        <p>
          💻 I am passionate about{" "}
          <a href="https://github.com/nikitavoloboev/my-mac-os">macOS</a> so I
          made a{" "}
          <a href="https://t.me/joinchat/BBKnQU4_rty6_942PFbPbw">
            Telegram group
          </a>{" "}
          to discuss all things macOS/iOS.
        </p>
        <p>
          🐾 If you want to know even more about me, you can see{" "}
          <a href="../likes">what I like</a> and{" "}
          <a href="https://wiki.nikiv.dev/">explore my wiki</a> or even{" "}
          <a href="https://github.com/nikitavoloboev/alfred-my-mind">
            search through it
          </a>
          , if you like.
        </p>
        <p>
          ♥️ You can support what I do on{" "}
          <a href="https://github.com/sponsors/nikitavoloboev">GitHub</a>. Thank
          you.
        </p>
        <p>
          💬 Feel free to{" "}
          <a href="https://github.com/nikitavoloboev/ama">ask me anything</a> or{" "}
          <a href="https://twitter.com/nikitavoloboev">send me message/tweet</a>
          .
        </p>

        <p>
          ☕ I love meeting new people. Check my <a href="../now">Now page</a>{" "}
          to see where I am right now.
        </p>
      </div>
      {/* TODO: should work, wait for https://github.com/high1/solid-jsx/issues/4 */}
      {/* <MDXProvider>
        <About />
      </MDXProvider> */}
      <Footer />
    </article>
  );
}
