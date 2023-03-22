import { ThemeProvider } from "../providers/ThemeProvider";
import { getMessages } from "src/data/i18n/intl";
import { getMainMenu } from "src/data/settings/main-menu";
import React from "react";
import { i18nConfig } from "src/data/i18n/config";
import { notFound } from "next/navigation";

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
