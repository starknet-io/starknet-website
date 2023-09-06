import { i18nConfig } from "@starknet-io/cms-data/src/i18n/config";
import { LanguageSwitcherDropdown } from "@ui/Layout/Navbar/LanguageSwitcherDropdown";
import { ColumnLink, ColumnLinkDescription } from "@ui/ColumnLink/ColumnLink";
import { Box, HStack, useColorMode } from "@chakra-ui/react";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";
import { usePageContext } from "src/renderer/PageContextProvider";

export default function LocaleSwitcher({
  seo,
  globalColorMode,
}: {
  seo: SEOTexts["language"];
  globalColorMode: "light" | "dark";
}) {
  const { locale, urlPathname: pathname } = usePageContext();
  const localeConfig = i18nConfig.find((c) => c.code === locale)!;
  const topLanguages = ["en", "es", "fr", "de", "pt", "ar", "ja", "ko"];

  return (
    <LanguageSwitcherDropdown
      title={seo?.title}
      description={seo?.description}
      subtitle={seo?.subtitle}
      callToAction={seo?.callToAction}
      selectedLocale={localeConfig?.code}
      globalColorMode={globalColorMode}
    >
      <Box display="flex" flexDir="column" gap="lg">
        {i18nConfig
          .filter((c) => topLanguages.includes(c.code))
          .map((c, i) => {
            return (
              <HStack key={i}>
                <ColumnLink
                  active={localeConfig?.code === c.code}
                  href={`/${c.code}${pathname.replace(/^\/\w{2}($|\/)/, "/")}`}
                >
                  {c.name}
                </ColumnLink>
                <ColumnLinkDescription active={localeConfig?.code === c.code}>
                  {c.localName}
                </ColumnLinkDescription>
              </HStack>
            );
          })}
      </Box>
    </LanguageSwitcherDropdown>
  );
}

// <ColumnLink
//   key={i}
//   href={`/${c.code}${pathname.replace(/^\/\w{2}\/?/, "/")}`}
// >
//   {localeConfig.code === c.code && ""} {c.name} ({c.localName})
// </ColumnLink>;
