import React from 'react'
import { renderToStream } from 'react-streaming/server'
import { escapeInject } from 'vite-plugin-ssr/server'
import { PageLayout } from './PageLayout'

export { render }
export { passToClient }

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps']

async function render(pageContext: any) {
  const { Page, pageProps } = pageContext

  const page = (
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>
  )

  // Streaming is optional and we can use renderToString() instead
  const stream = await renderToStream(page, { userAgent: pageContext.userAgent })

  const GOOGLE_TAG_ID = 'G-WY42TERK5P'

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE_TAG_ID}');
        </script>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`
}
