import { PageContainer } from "./(components)/PageContainer";
import { FooterServer } from "./(server-components)/FooterServer";
import { NavbarServer } from "./(server-components)/NavbarServer";
import { ThemeProvider } from "../providers/ThemeProvider";
import { useLocale } from "next-intl";

interface Props {
  readonly children: React.ReactNode;
}

export default function LocaleLayout({ children }: Props) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <PageContainer>
            <NavbarServer />

            {children}
          </PageContainer>
          <FooterServer />
        </ThemeProvider>
      </body>
    </html>
  );
}
