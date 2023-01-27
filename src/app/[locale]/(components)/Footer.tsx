"use client";
import { Box, Stack, StackDivider } from "@chakra-ui/react";
import * as FooterComponent from "@ui/Footer/Footer";
import type { MainMenu } from "src/data/settings/main-menu";
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
                          let title =
                            item.custom_title ||
                            item.page_data?.title ||
                            item.post_data?.title;

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
                            link = `/${locale}/${item.page_data?.slug}`;
                          } else if (item.post) {
                            link = `/${locale}/posts/${item.post_data?.category}/${item.post_data?.slug}`;
                          } else {
                            return <span key={itemIndex}>{title}</span>;
                          }

                          return (
                            <FooterComponent.Link
                              isExternal={isExternal}
                              href={link}
                              key={itemIndex}
                            >
                              {title}
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
