
import { usePathname } from "next/navigation";
import { i18nConfig } from "@starknet-io/cms-data/src/i18n/config";
import { useLocale } from "./ClientLocaleProvider";
import { LanguageSwitcherDropdown } from "@ui/Layout/Navbar/LanguageSwitcherDropdown";
import { ColumnLink, ColumnLinkDescription } from "@ui/ColumnLink/ColumnLink";
import { HStack } from "@chakra-ui/react";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";

export default function LocaleSwitcher({ seo }: { seo: SEOTexts['language'] }) {
  const locale = useLocale();
  const localeConfig = i18nConfig.find((c) => c.code === locale)!;
  const pathname = usePathname()!;
  const topLanguages = ["en", "es", "fr", "de", "pt", "ar", "ja", "ko"];

  return (
    <LanguageSwitcherDropdown
      title={seo.title}
      description={seo.description}
      subtitle={seo.subtitle}
      callToAction={seo.callToAction}
      selectedLocale={localeConfig.code}
    >
      {i18nConfig
        .filter((c) => topLanguages.includes(c.code))
        .map((c, i) => {
          return (
            <HStack key={i}>
              <ColumnLink
                active={localeConfig.code === c.code}
                href={`/${c.code}${pathname}`}
              >
                {c.name}
              </ColumnLink>
              <ColumnLinkDescription active={localeConfig.code === c.code}>
                {c.localName}
              </ColumnLinkDescription>
            </HStack>
          );
        })}
    </LanguageSwitcherDropdown>
  );
}

// <ColumnLink
//   key={i}
//   href={`/${c.code}${pathname.replace(/^\/\w{2}\/?/, "/")}`}
// >
//   {localeConfig.code === c.code && ""} {c.name} ({c.localName})
// </ColumnLink>;
