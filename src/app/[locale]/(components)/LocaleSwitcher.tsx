import { Fragment } from "react";
import React from "react";
import classnames from "classnames";
import { Menu, Transition } from "src/libs/headlessui";
import { ChevronDownIcon } from "src/libs/heroicons/20/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";
import { locales } from "src/data/i18n/config";
import { LanguageSwitcherDropdown } from "@ui/Layout/Navbar/LanguageSwitcherDropdown";
export default function LocaleSwitcherNew() {
  const locale = useLocale();
  const localeConfig = locales.find((c) => c.code === locale)!;
  const pathname = usePathname()!;
  const topLanguages = ["en", "es", "fr", "de", "it", "pt", "ar", "ja", "ko"];

  return (
    <LanguageSwitcherDropdown
      description=" Some copy here that gives a concise summary of the language
              resources as well as how the community is being asked to
              contribute and a link to a dedicated page on the topic."
      selectedLocale={localeConfig.code}
    >
      {locales
        .filter((c) => topLanguages.includes(c.code))
        .map((c, i) => (
          <div key={i}>
            <Link href={`/${c.code}${pathname.replace(/^\/\w{2}\/?/, "/")}`}>
              {c.name} ({c.code})
            </Link>
          </div>
        ))}
    </LanguageSwitcherDropdown>
  );
}
