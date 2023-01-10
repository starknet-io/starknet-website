// import "./globals.css";
// import "../css/index.css";
import { ThemeProvider } from "./providers/ThemeProvider";

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  // TODO: Here's a problem: When there's no cookie yet, we can't use the locale
  // from the URL. Something like `require('next/navigation').usePathname()`
  // would be great, but that uses non-server context currently, so not an
  // option in server components. `params` is also not an option, since they are
  // only available from matched segments downwards.
  const lang = undefined;

  return (
    <html lang={lang}>
      <head />
      <body>
        <ThemeProvider> {children}</ThemeProvider>
      </body>
    </html>
  );
}
