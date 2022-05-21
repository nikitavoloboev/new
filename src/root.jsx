// @refresh reload
import { Suspense } from "solid-js"
import { compile } from "solid-marked"
import { ErrorBoundary } from "solid-start/error-boundary"
import { Links, Meta, Routes, Scripts } from "solid-start/root"
import "./index.css"

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body class="antialiased">
        <ErrorBoundary>
          <Suspense>
            <Routes />
            {/* <SolidMarkdown children={markdown} /> */}
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  )
}
