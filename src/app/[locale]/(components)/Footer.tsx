"use client";
import { Box, others, Stack, StackDivider } from "@chakra-ui/react";
import * as FooterComponent from "@ui/Footer/Footer";
import type { MainMenu } from "src/data/settings/main-menu";
import { getComputedLinkData } from "src/utils/utils";
import { useLocale } from "./ClientLocaleProvider";

export interface Props {
  readonly mainMenu: MainMenu;
}

export const Footer = ({ mainMenu }: Props) => {
  const locale = useLocale();

  return (
    <FooterComponent.Root>
      <Stack
        divider={<StackDivider borderColor="nav-footer-br" />}
        align="stretch"
        gap={10}
        alignItems="flex-start"
        justifyContent="flex-start"
        direction={{ base: "column", lg: "row" }}
      >
        {mainMenu.items.map((mainMenuItem, mainMenuItemIndex) => (
          <FooterComponent.Column
            key={mainMenuItemIndex}
            title={mainMenuItem.title}
          >
            {mainMenuItem.columns?.length && (
              <Box
              // sx={{
              //   columnCount: mainMenuItem.title === "Learn" ? 2 : "inherit",
              // }}
              // width={mainMenuItem.title === "Learn" ? "350px" : "auto"}
              >
                {mainMenuItem.columns?.map((column, columnIndex) => (
                  <Box key={columnIndex}>
                    {column.blocks?.map((block, blockIndex) => (
                      <Box key={blockIndex}>
                        {block.items?.map((item, itemIndex) => {
                          if (
                            item.hide_from_footer ||
                            item.custom_icon ||
                            item.custom_title === "Engineering posts" ||
                            item.custom_title === "Community Calls" ||
                            item.custom_title === "Stark math" ||
                            item.custom_title === "Stark struck" ||
                            item.custom_title === "Governance posts" ||
                            item.custom_title === "Community & Events posts"
                          ) {
                            return;
                          }

                          const { href, label } = getComputedLinkData(
                            locale,
                            item,
                          );

                          if (!href) {
                            return <span key={itemIndex}>{label}</span>;
                          }

                          return (
                            <FooterComponent.Link
                              isExternal={item.custom_external_link != null}
                              href={href}
                              key={itemIndex}
                            >
                              {label}
                            </FooterComponent.Link>
                          );
                        })}
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
            )}
          </FooterComponent.Column>
        ))}

        {/* {mainMenu.pages.map(({ title, pages }) => {
          return (
            <FooterComponent.Column key={title} title={title}>
              {pages.map(({ page, title }) => {
                return (
                  <FooterComponent.Link
                    isExternal
                    key={title}
                    href={`/${locale}${page}`}
                    title={title}
                  />
                );
              })}
            </FooterComponent.Column>
          );
        })} */}
      </Stack>
    </FooterComponent.Root>
  );
};
