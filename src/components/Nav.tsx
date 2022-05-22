interface Props {
  activePage: string
}

export default function Nav({ activePage }: Props) {
  return (
    <>
      <h1>{activePage}</h1>
      <div class="nav-line">
        {activePage !== "About" && (
          <a class="nav-link" href="/">
            About
          </a>
        )}
        {activePage !== "Projects" && (
          <a class="nav-link" href="/projects">
            Projects
          </a>
        )}
        <a class="nav-link" href="https://wiki.nikiv.dev">
          Wiki
        </a>
        {activePage !== "Likes" && (
          <a class="nav-link" href="/likes">
            Likes
          </a>
        )}
        {activePage !== "Now" && (
          <a class="nav-link" href="/now">
            Now
          </a>
        )}
        <a class="nav-link" href="https://github.com/nikitavoloboev/ama">
          AMA
        </a>
        {/* TODO: fix */}
        {/* <a class="nav-link" href="./cv.pdf">
          CV
        </a> */}
        <a class="nav-link" href="https://github.com/sponsors/nikitavoloboev">
          ♥️
        </a>
      </div>
    </>
  );
}
