import Head from 'next/head'
import React from 'react'

export default function MetaVideo({
  chapter = '',
  path,
}: {
  chapter?: string
  path: string
}) {
  const videoUrl = `https://education-video-beta.vercel.app${path}${chapter}`

  return (
    <Head>
      {/* <title>Starknet video share</title>
      <meta property="og:title" content="Starknet video tutorial" key="title" />
      <meta property="og:type" content="video" />
      <meta
        property="og:video"
        content="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
      />
      <meta property="og:video:height" content="640" />
      <meta property="og:video:width" content="385" />
      <meta property="og:video:type" content="video/mp4" /> */}

      <title>Starknet | Education Video Tutorial</title>

      <meta
        name="description"
        content="Starknet is the secure scaling technology bringing Ethereum’s benefits to the world."
      />

      {/* Start of open graph */}
      <meta property="og:site_name" content="Starknet" />
      <meta property="og:url" content={videoUrl} />
      <meta property="og:type" content="video.other" />
      <meta property="og:title" content="Starknet | education video tutorial" />
      <meta
        property="og:description"
        content="Starknet is the secure scaling technology bringing Ethereum’s benefits to the world."
      />
      <meta
        property="og:image"
        content="https://www.starknet.io/assets/illustration-how-it-works.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.starknet.io/assets/illustration-how-it-works.png"
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:video:url" content={videoUrl} />
      <meta property="og:video:secure_url" content={videoUrl} />
      <meta property="og:video:type" content="text/html" />
      <meta property="og:video:width" content="1280" />
      <meta property="og:video:height" content="720" />
      {/* End of open graph */}

      {/* Start of Twitter Card */}
      <meta name="twitter:card" content="player" />
      <meta name="twitter:site" content="@starknet" />
      <meta
        name="twitter:title"
        content="Starknet | Starknet education tutorial"
      />
      <meta
        name="twitter:description"
        content="Starknet is the secure scaling technology bringing Ethereum’s benefits to the world."
      />
      <meta
        name="twitter:image"
        content="https://www.starknet.io/assets/illustration-how-it-works.png"
      />
      <meta name="twitter:player" content={videoUrl} />
      <meta name="twitter:player:width" content="1280" />
      <meta name="twitter:player:height" content="720" />
    </Head>
  )
}
