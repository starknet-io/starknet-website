"use client";
import { Fragment } from "react";
import React from "react";
import classnames from "classnames";
import { Menu, Transition } from "src/libs/headlessui";
import { ChevronDownIcon } from "src/libs/heroicons/20/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18nConfig } from "src/data/i18n/config";
import { useLocale } from "./ClientLocaleProvider";
import { LanguageSwitcherDropdown } from "@ui/Layout/Navbar/LanguageSwitcherDropdown";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const localeConfig = i18nConfig.find((c) => c.code === locale)!;
  const pathname = usePathname()!;
  const topLanguages = ["en", "es", "fr", "de", "it", "pt", "ar", "ja", "ko"];

  return (
    <LanguageSwitcherDropdown
      description=" Some copy here that gives a concise summary of the language
              resources as well as how the community is being asked to
              contribute and a link to a dedicated page on the topic."
      selectedLocale={localeConfig.localName}
    >
      {i18nConfig
        .filter((c) => topLanguages.includes(c.code))
        .map((c, i) => {
          return (
            <Link
              key={i}
              href={`/${c.code}${pathname.replace(/^\/\w{2}\/?/, "/")}`}
            >
              {localeConfig.code === c.code && ">"} {c.name} ({c.localName})
            </Link>
          );
        })}
    </LanguageSwitcherDropdown>
  );
}
