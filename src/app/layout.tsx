import React from "react";

export const dynamic = "force-dynamic";

interface Props extends React.PropsWithChildren {}

export default async function RootLayout({
  children,
}: Props): Promise<JSX.Element> {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
