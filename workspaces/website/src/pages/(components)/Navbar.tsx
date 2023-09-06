import * as NavAccordian from "@ui/Layout/Navbar/NavAccordion";
import type { MainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import LocaleSwitcher from "./LocaleSwitcher";
import { NavBar } from "@ui/Layout/Navbar/Navbar";
import { MenuItemWithDropdown } from "@ui/Layout/Navbar/MenuItemWithDropdown";
import { NavbarContainer } from "@ui/Layout/Navbar/NavbarContainer";
import { NavBarLink } from "@ui/Layout/Navbar/NavBarLink";
import { NavbarHeading } from "@ui/Layout/Navbar/NavbarHeading";
import { ColorModeProvider, Flex, useColorMode } from "@chakra-ui/react";
import { getComputedLinkData } from "src/utils/utils";
import { MainSearch } from "./MainSearch";
import React, { Fragment } from "react";
import { Box, ButtonGroup } from "@chakra-ui/react";
import { IconButton } from "@ui/IconButton";
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from "react-icons/si";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";
import { usePageContext } from "src/renderer/PageContextProvider";

export interface Props {
  readonly mainMenu: MainMenu;
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
  readonly searchSEO: SEOTexts["search"];
  readonly languageCenterSeo: SEOTexts["language"];
}

function Navbar({ mainMenu, env, searchSEO, languageCenterSeo }: Props) {
  const { locale, urlPathname: pathname } = usePageContext();
  const { colorMode } = useColorMode();

  return (
    <NavbarContainer>
      <NavBar
        languageSwitcher={
          <LocaleSwitcher seo={languageCenterSeo} globalColorMode={colorMode} />
        }
        search={
          <div>
            <MainSearch env={env} seo={searchSEO} />
          </div>
        }
        seo={languageCenterSeo}
        desktopNavItems={mainMenu?.items?.map(
          (mainMenuItem, mainMenuItemIndex) => (
            <MenuItemWithDropdown
              key={`${mainMenuItemIndex}-${pathname}`}
              label={mainMenuItem.title}
              globalColorMode={colorMode}
            >
              <Flex
                maxW="900px"
                mx="auto"
                gap="48px"
                // sx={{
                //   '& a': {
                //     fontWeight: 'normal',
                //   },
                // }}
              >
                {mainMenuItem.columns?.length &&
                  mainMenuItem.columns?.map((column, columnIndex) => (
                    <Box key={columnIndex}>
                      {column.blocks?.map((block, blockIndex) => {
                        const blocks = block.items?.map((item, itemIndex) => {
                          const { href, label } = getComputedLinkData(
                            locale,
                            item
                          );

                          if (!href) {
                            return <span key={itemIndex}>{label}</span>;
                          }

                          if (item.custom_icon) {
                            return (
                              <IconButton
                                href={href}
                                key={itemIndex}
                                as="a"
                                aria-label={label!}
                                _hover={{
                                  background: "transparent !important",
                                }}
                                sx={{
                                  "&:hover *": {
                                    background: "transparent !important",
                                    fill: "fg-default-hover",
                                  },
                                }}
                                icon={
                                  item.custom_icon === "SiDiscord" ? (
                                    <SiDiscord fontSize="1.25rem" />
                                  ) : item.custom_icon === "SiGithub" ? (
                                    <SiGithub fontSize="1.25rem" />
                                  ) : item.custom_icon === "SiTwitter" ? (
                                    <SiTwitter fontSize="1.25rem" />
                                  ) : item.custom_icon === "SiYoutube" ? (
                                    <Box ml="-16px">
                                      <SiYoutube fontSize="1.25rem" />
                                    </Box>
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
                          (b) => b.custom_icon
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
          )
        )}
        mobileNavItems={
          <NavAccordian.Root>
            {mainMenu?.items?.map((mainMenuItem, mainMenuItemIndex) => {
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
                                  item
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

export default Navbar;
