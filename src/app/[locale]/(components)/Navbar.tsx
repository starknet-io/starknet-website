"use client";

import * as NavAccordian from "../../../components/Layout/Navbar/NavAccordion";
import type { MainMenu } from "src/data/settings/main-menu";
import LocaleSwitcher from "./LocaleSwitcher";
import { NavBar } from "@ui/Layout/Navbar/Navbar";
import { MenuItemWithDropdown } from "@ui/Layout/Navbar/MenuItemWithDropdown";
import { NavbarContainer } from "@ui/Layout/Navbar/NavbarContainer";
import { useLocale } from "./ClientLocaleProvider";
import { NavBarLink } from "@ui/Layout/Navbar/NavBarLink";
import { NavbarHeading } from "@ui/Layout/Navbar/NavbarHeading";
import { Box } from "@chakra-ui/react";

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
            {mainMenu.items.map((mainMenuItem, mainMenuItemIndex) => (
              <MenuItemWithDropdown
                key={mainMenuItemIndex}
                label={mainMenuItem.title}
              >
                {mainMenuItem.columns?.length &&
                  mainMenuItem.columns?.map((column, columnIndex) => (
                    <div key={columnIndex}>
                      {column.blocks?.map((block, blockIndex) => (
                        <>
                          <NavbarHeading key={blockIndex}>
                            {block.title}
                          </NavbarHeading>
                          {block.items?.map((item, itemIndex) => {
                            let title =
                              item.custom_title ||
                              item.page_title ||
                              item.post_title;

                            let link;

                            if (item.custom_external_link) {
                              link = item.custom_external_link;
                            } else if (item.custom_internal_link) {
                              link = `/${locale}/${item.custom_internal_link.replace(
                                /(^\/|\/$)/g,
                                ""
                              )}`;
                            } else if (item.page) {
                              link = `/${locale}${item.page}`;
                            } else if (item.post) {
                              link = `/${locale}${item.post}`;
                            }

                            return (
                              <NavBarLink key={itemIndex} href={link}>
                                {title}
                              </NavBarLink>
                            );
                          })}
                        </>
                      ))}
                    </div>
                  ))}
              </MenuItemWithDropdown>
            ))}
          </>
        }
        mobileNavItems={
          <NavAccordian.Root>
            {mainMenu.items.map((mainMenuItem, mainMenuItemIndex) => {
              return (
                <NavAccordian.Item key={mainMenuItemIndex}>
                  <NavAccordian.Button title={mainMenuItem.title} />
                  <NavAccordian.Panel>
                    {mainMenuItem.columns?.length &&
                      mainMenuItem.columns?.map((column, columnIndex) => (
                        <Box key={columnIndex}>
                          {column.blocks?.map((block, blockIndex) => (
                            <>
                              <NavbarHeading key={blockIndex} pt="24px">
                                {block.title}
                              </NavbarHeading>
                              {block.items?.map((item, itemIndex) => {
                                let title =
                                  item.custom_title ||
                                  item.page_title ||
                                  item.post_title;

                                let link;

                                if (item.custom_external_link) {
                                  link = item.custom_external_link;
                                } else if (item.custom_internal_link) {
                                  link = `/${locale}/${item.custom_internal_link.replace(
                                    /(^\/|\/$)/g,
                                    ""
                                  )}`;
                                } else if (item.page) {
                                  link = `/${locale}${item.page}`;
                                } else if (item.post) {
                                  link = `/${locale}${item.post}`;
                                }

                                return (
                                  <NavBarLink key={itemIndex} href={link}>
                                    {title}
                                  </NavBarLink>
                                );
                              })}
                            </>
                          ))}
                        </Box>
                      ))}
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
