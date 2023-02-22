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
import { Flex } from "@chakra-ui/react";
import { getComputedLinkData } from "src/utils/utils";
import { MainSearch } from "./MainSearch";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import { Box, ButtonGroup, IconButton } from "src/libs/chakra-ui";
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from "react-icons/si";

export interface Props {
  readonly mainMenu: MainMenu;
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export default function Navbar({ mainMenu, env }: Props) {
  const locale = useLocale();
  const pathname = usePathname()!;

  return (
    <NavbarContainer>
      <NavBar
        key={pathname}
        languageSwitcher={<LocaleSwitcher />}
        search={<MainSearch env={env} />}
        desktopNavItems={mainMenu.items.map(
          (mainMenuItem, mainMenuItemIndex) => (
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
                      {column.blocks?.map((block, blockIndex) => {
                        const blocks = block.items?.map((item, itemIndex) => {
                          const { href, label } = getComputedLinkData(
                            locale,
                            item,
                          );

                          if (!href) {
                            return <span key={itemIndex}>{label}</span>;
                          }

                          if (item.custom_icon) {
                            return (
                              <IconButton
                                // isExternal={item.custom_external_link != null}
                                href={href}
                                key={itemIndex}
                                as="a"
                                aria-label={label!}
                                icon={
                                  item.custom_icon === "SiDiscord" ? (
                                    <SiDiscord fontSize="1.25rem" />
                                  ) : item.custom_icon === "SiGithub" ? (
                                    <SiGithub fontSize="1.25rem" />
                                  ) : item.custom_icon === "SiTwitter" ? (
                                    <SiTwitter fontSize="1.25rem" />
                                  ) : item.custom_icon === "SiYoutube" ? (
                                    <SiYoutube fontSize="1.25rem" />
                                  ) : (
                                    <React.Fragment />
                                  )
                                }
                              />
                            );
                          }

                          return (
                            <NavBarLink
                              isExternal={item.custom_external_link != null}
                              key={itemIndex}
                              href={href}
                            >
                              {label}
                            </NavBarLink>
                          );
                        });

                        const iconsOnly = block.items?.every(
                          (b) => b.custom_icon,
                        );

                        return (
                          <Box mb="24px" key={blockIndex}>
                            {block.title && (
                              <NavbarHeading>{block.title}</NavbarHeading>
                            )}
                            {iconsOnly ? (
                              <ButtonGroup variant="ghost" mx="16px">
                                {blocks}
                              </ButtonGroup>
                            ) : (
                              blocks
                            )}
                          </Box>
                        );
                      })}
                    </Box>
                  ))}
              </Flex>
            </MenuItemWithDropdown>
          ),
        )}
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
                            <Fragment key={blockIndex}>
                              {block.title && (
                                <NavbarHeading pt="24px">
                                  {block.title}
                                </NavbarHeading>
                              )}

                              {block.items?.map((item, itemIndex) => {
                                const { href, label } = getComputedLinkData(
                                  locale,
                                  item,
                                );

                                if (!href) {
                                  return <span key={itemIndex}>{label}</span>;
                                }

                                return (
                                  <NavBarLink
                                    isExternal={
                                      item.custom_external_link != null
                                    }
                                    key={itemIndex}
                                    href={href}
                                  >
                                    {label}
                                    {/* {item.custom_icon && (
                                      <Icon as={item.custom_icon } />
                                    )} */}
                                  </NavBarLink>
                                );
                              })}
                            </Fragment>
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
