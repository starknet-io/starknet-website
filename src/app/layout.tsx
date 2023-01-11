import { ThemeProvider } from "./providers/ThemeProvider";

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <ThemeProvider> {children}</ThemeProvider>;
}
