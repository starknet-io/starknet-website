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
import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { SiDiscord, SiYoutube, SiTwitter, SiGithub } from "react-icons/si";

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
                <Flex
                  maxW="900px"
                  mx="auto"
                  gap="48px"
                  // display="block"
                  // sx={{ columnCount: [1, 2, 3, 4] }}
                >
                  {mainMenuItem.columns?.length &&
                    mainMenuItem.columns?.map((column, columnIndex) => (
                      <Box key={`${columnIndex}1244`}>
                        {column.blocks?.map((block, blockIndex) => (
                          <Box mb={22} key={`${blockIndex}${block.title}`}>
                            <NavbarHeading>{block.title}</NavbarHeading>
                            {block.items?.map((item, itemIndex) => {
                              let title =
                                item.custom_title ||
                                item.page_title ||
                                item.post_title;

                              let link;
                              let isExternal;
                              let hasIcon;

                              if (item.custom_external_link) {
                                link = item.custom_external_link;
                                isExternal = true;
                                if (item.custom_icon) hasIcon = true;
                              } else if (item.custom_internal_link) {
                                link = `/${locale}/${item.custom_internal_link.replace(
                                  /(^\/|\/$)/g,
                                  "",
                                )}`;
                              } else if (item.page) {
                                link = `/${locale}${item.page}`;
                              } else if (item.post) {
                                link = `/${locale}${item.post}`;
                              }

                              return (
                                <NavBarLink
                                  isExternal={isExternal}
                                  key={`${itemIndex}${title}`}
                                  href={link}
                                >
                                  {title} {hasIcon && item.custom_icon}
                                </NavBarLink>
                              );
                            })}
                          </Box>
                        ))}
                      </Box>
                    ))}
                </Flex>
              </MenuItemWithDropdown>
            ))}
          </>
        }
        mobileNavItems={
          <NavAccordian.Root>
            {mainMenu.items.map((mainMenuItem, mainMenuItemIndex) => {
              return (
                <NavAccordian.Item
                  key={`${mainMenuItemIndex}${mainMenuItem.title}`}
                >
                  <NavAccordian.Button title={mainMenuItem.title} />
                  <NavAccordian.Panel>
                    {mainMenuItem.columns?.length &&
                      mainMenuItem.columns?.map((column, columnIndex) => (
                        <Box key={columnIndex}>
                          {column.blocks?.map((block, blockIndex) => (
                            <>
                              <NavbarHeading
                                key={`${blockIndex}${block.title}`}
                                pt="24px"
                              >
                                {block.title}
                              </NavbarHeading>
                              {block.items?.map((item, itemIndex) => {
                                let title =
                                  item.custom_title ||
                                  item.page_title ||
                                  item.post_title;

                                let link;
                                let isExternal;

                                if (item.custom_external_link) {
                                  link = item.custom_external_link;
                                  isExternal = true;
                                } else if (item.custom_internal_link) {
                                  link = `/${locale}/${item.custom_internal_link.replace(
                                    /(^\/|\/$)/g,
                                    "",
                                  )}`;
                                } else if (item.page) {
                                  link = `/${locale}${item.page}`;
                                } else if (item.post) {
                                  link = `/${locale}${item.post}`;
                                }

                                return (
                                  <NavBarLink
                                    key={`${itemIndex}${title}`}
                                    href={link}
                                    isExternal={isExternal}
                                  >
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
