"use client";

import React from "react";
import * as NavAccordian from "../../../components/Layout/Navbar/NavAccordion";
import { useLocale } from "next-intl";
import type { MainMenu } from "src/data/settings/main-menu";
import LocaleSwitcher from "./LocaleSwitcher";
import { NavBar } from "@ui/Layout/Navbar/Navbar";
import { MenuItemWithDropdown } from "@ui/Layout/Navbar/MenuItemWithDropdown";
import { NavbarContainer } from "@ui/Layout/Navbar/NavbarContainer";
import { Link as ChakraLink, Stack } from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";

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
                <MenuItemWithDropdown
                  key={title}
                  title={title}
                  hubTitle={title}
                  hubLink={page}
                >
                  {pages.map(({ page, title }) => {
                    return (
                      <ChakraLink
                        variant="menu"
                        href={`/${locale}${page}`}
                        key={page}
                      >
                        <Stack spacing="2" direction="row" p="0">
                          <Stack spacing="1">
                            <Text>{title}</Text>
                          </Stack>
                        </Stack>
                      </ChakraLink>
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
                    {pages.map(({ page, title }) => {
                      return (
                        <NavAccordian.Link
                          title={title}
                          key={page}
                          href={`/${locale}/${page}`}
                        />
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
