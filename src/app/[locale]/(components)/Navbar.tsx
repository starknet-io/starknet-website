"use client";

import * as NavAccordian from "../../../components/Layout/Navbar/NavAccordion";
import type { MainMenu } from "src/data/settings/main-menu";
import LocaleSwitcher from "./LocaleSwitcher";
import { NavBar } from "@ui/Layout/Navbar/Navbar";
import { MenuItemWithDropdown } from "@ui/Layout/Navbar/MenuItemWithDropdown";
import { NavbarContainer } from "@ui/Layout/Navbar/NavbarContainer";
import { NavLink } from "@ui/Layout/Navbar/NavLink";
import { Text } from "@ui/Typography/Text";
import { useLocale } from "./ClientLocaleProvider";
import { NavBarLink } from "@ui/Layout/Navbar/NavBarLink";
import { NavbarHeading } from "@ui/Layout/Navbar/NavbarHeading";

export interface Props {
  readonly mainMenu: MainMenu;
}

export default function Navbar({ mainMenu }: Props) {
  const locale = useLocale();

  return (
    <NavbarContainer>
      <NavBar
        languageSwitcher={<LocaleSwitcher />}
        desktopNavItems={
          <>
            {mainMenu.pages.map(({ page, title, pages }) => {
              return (
                <MenuItemWithDropdown key={title} label={title}>
                  <NavbarHeading>Heading</NavbarHeading>
                  {pages.map(({ page, title }) => {
                    return (
                      <NavBarLink key={page} href={`/${locale}${page}`}>
                        {title}
                      </NavBarLink>
                    );
                  })}
                </MenuItemWithDropdown>
              );
            })}
          </>
        }
        mobileNavItems={
          <NavAccordian.Root>
            {mainMenu.pages.map(({ page, title, pages }) => {
              return (
                <NavAccordian.Item key={page}>
                  <NavAccordian.Button title={title} />
                  <NavAccordian.Panel>
                    <NavbarHeading pt="24px">The Basics</NavbarHeading>
                    {pages.map(({ page, title }) => {
                      return (
                        <NavBarLink key={page} href={`/${locale}${page}`}>
                          {title}
                        </NavBarLink>
                      );
                    })}
                  </NavAccordian.Panel>
                </NavAccordian.Item>
              );
            })}
          </NavAccordian.Root>
        }
      />
    </NavbarContainer>
  );
}
