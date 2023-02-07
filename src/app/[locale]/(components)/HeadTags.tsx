import React from "react";

interface Props {
  readonly title?: string;
  readonly description?: string;
}

export default function HeadTags(props: Props) {
  return (
    <>
      <title>{props.title ? `${props.title} - Starknet` : "Starknet"}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <meta
        name="description"
        content={
          props.description ??
          "Starknet is a Validity Rollup Layer 2. It provides high throughput, low gas costs, and retains Ethereum Layer 1 levels of security"
        }
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="StarkNet" />
      <meta property="og:url" content="https://starknet.io/" />
      <meta property="og:site_name" content="StarkNet" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
