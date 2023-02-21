"use client";

import { Fragment } from "react";
import React from "react";
import classnames from "classnames";
import { Menu, Transition } from "src/libs/headlessui";
import { ChevronDownIcon } from "src/libs/heroicons/20/solid";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { i18nConfig } from "src/data/i18n/config";
import { useLocale } from "./ClientLocaleProvider";
import { LanguageSwitcherDropdown } from "@ui/Layout/Navbar/LanguageSwitcherDropdown";
import { ColumnLink, ColumnLinkDescription } from "@ui/ColumnLink/ColumnLink";
import { Box, HStack } from "@chakra-ui/react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const localeConfig = i18nConfig.find((c) => c.code === locale)!;
  const pathname = usePathname()!;
  const topLanguages = ["en", "es", "fr", "de", "pt", "ar", "ja", "ko"];

  return (
    <LanguageSwitcherDropdown
      description=" As part of the Starknet community’s drive to be globally accessible we’ll be rolling out our translation program soon. We are inviting members of the community to tell us which languages they would like to see available on the site and also to help us with translations. Follow the link below to find out how you can contribute."
      selectedLocale={localeConfig.code}
    >
      {i18nConfig
        .filter((c) => topLanguages.includes(c.code))
        .map((c, i) => {
          return (
            <HStack key={i}>
              <ColumnLink
                active={localeConfig.code === c.code}
                href={`/${c.code}${pathname.replace(/^\/\w{2}\/?/, "/")}`}
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
