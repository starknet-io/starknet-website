import React from "react";

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
