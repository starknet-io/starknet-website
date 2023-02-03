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
                  // bg="red"
                  maxW="900px"
                  mx="auto"
                  gap="48px"
                  // display="block"
                  // sx={{ columnCount: [1, 2, 3, 4] }}
                >
                  {mainMenuItem.columns?.length &&
                    mainMenuItem.columns?.map((column, columnIndex) => (
                      <Box key={columnIndex}>
                        {column.blocks?.map((block, blockIndex) => (
                          <Box mb="24px" key={blockIndex}>
                            {block.title && (
                              <NavbarHeading>{block.title}</NavbarHeading>
                            )}

                            {block.items?.map((item, itemIndex) => {
                              let title =
                                item.custom_title ||
                                item.page_data?.title ||
                                item.post_data?.title;

                              let link: string;
                              let isExternal = false;
                              let hasIcon = false;

                              if (item.custom_external_link) {
                                link = item.custom_external_link;
                                isExternal = true;
                                if (item.custom_icon) hasIcon = true;
                              } else if (item.custom_internal_link) {
                                link = `/${locale}/${item.custom_internal_link.replace(
                                  /(^\/|\/$)/g,
                                  "",
                                )}`;
                              } else if (item.page_data) {
                                link = item.page_data.link;
                              } else if (item.post_data) {
                                link = `/${locale}/posts/${item.post_data.category}/${item.post_data.slug}`;
                              } else {
                                return <span key={itemIndex}>{title}</span>;
                              }

                              return (
                                <NavBarLink
                                  isExternal={isExternal}
                                  key={itemIndex}
                                  href={link}
                                >
                                  {title}
                                  {/* {hasIcon && (
                                    <Icon as={item.custom_icon } />
                                  )} */}
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
                <NavAccordian.Item key={mainMenuItemIndex}>
                  <NavAccordian.Button title={mainMenuItem.title} />
                  <NavAccordian.Panel>
                    {mainMenuItem.columns?.length &&
                      mainMenuItem.columns?.map((column, columnIndex) => (
                        <Box key={columnIndex}>
                          {column.blocks?.map((block, blockIndex) => (
                            <>
                              {block.title && (
                                <NavbarHeading key={blockIndex} pt="24px">
                                  {block.title}
                                </NavbarHeading>
                              )}

                              {block.items?.map((item, itemIndex) => {
                                let title =
                                  item.custom_title ||
                                  item.page_data?.title ||
                                  item.post_data?.title;

                                let link: string;
                                let isExternal = false;

                                if (item.custom_external_link) {
                                  link = item.custom_external_link;
                                  isExternal = true;
                                } else if (item.custom_internal_link) {
                                  link = `/${locale}/${item.custom_internal_link.replace(
                                    /(^\/|\/$)/g,
                                    "",
                                  )}`;
                                } else if (item.page_data) {
                                  link = item.page_data.link;
                                } else if (item.post_data) {
                                  link = `/${locale}/posts/${item.post_data.category}/${item.post_data.slug}`;
                                } else {
                                  return <span key={itemIndex}>{title}</span>;
                                }

                                return (
                                  <NavBarLink
                                    key={itemIndex}
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
