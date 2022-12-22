import { Fragment } from "react";
import React from "react";
import classnames from "classnames";
import i18nConfig from "i18n/config.json";
import { Menu, Transition } from "src/libs/headlessui";
import { ChevronDownIcon } from "src/libs/heroicons/20/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const localeConfig = i18nConfig.find((c) => c.code === locale);
  const pathname = usePathname()!;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {localeConfig?.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {i18nConfig.map((c, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link
                    className={classnames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm",
                    )}
                    href={`/${c.code}${pathname.replace(/^\/\w{2}\/?/, "/")}`}
                  >
                    {c.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
