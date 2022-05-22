export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "block",
          height: "1px",
          border: 0,
          "border-top": "1px solid #ccc",
          margin: "1em 0",
          padding: 0,
        }}
      ></div>
      <div
        style={{
          display: "grid",
          "grid-auto-flow": "column",
        }}
      >
        <a href="https://twitter.com/nikitavoloboev">Twitter</a>
        <a href="https://github.com/nikitavoloboev">GitHub</a>
        <a href="https://instagram.com/nikitavoloboev">Instagram</a>
        <a href="https://open.spotify.com/user/nikitavoloboev">Spotify</a>
        <a href="https://www.youtube.com/channel/UCEKqrUfr_FMKIO9XSJS4vDw">
          YouTube
        </a>
        <a href="https://t.me/joinchat/BBKnQU4_rty6_942PFbPbw">Telegram</a>
      </div>
    </>
  );
}
