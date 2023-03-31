import React from "react";
import { ThemeProvider } from "../providers/ThemeProvider";

export const metadata = {
  title: {
    default: "Starknet",
    template: "%s - Starknet",
  },
  description:
    "Starknet is a Validity Rollup Layer 2. It provides high throughput, low gas costs, and retains Ethereum Layer 1 levels of security",
  openGraph: {
    type: "website",
    siteName: "StarkNet",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface Props extends React.PropsWithChildren<LocaleProps> {}

export default async function VideoEmbedLayout({
  children,
}: Props): Promise<JSX.Element> {
  return <ThemeProvider>{children}</ThemeProvider>;
}
