"use client";
import { SimpleGrid } from "@chakra-ui/react";
import * as FooterComponent from "@ui/Footer/Footer";
import Link from "next/link";
import type { MainMenu } from "src/data/settings/main-menu";
import { useLocale } from "./ClientLocaleProvider";

export interface Props {
  readonly mainMenu: MainMenu;
}

export const Footer = ({ mainMenu }: Props) => {
  const locale = useLocale();

  return (
    <FooterComponent.Root>
      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        gap="8"
        width={{ base: "full", lg: "auto" }}
      >
        <ul>
          {mainMenu.items.map((mainMenuItem, mainMenuItemIndex) => (
            <li key={mainMenuItemIndex}>
              <span>{mainMenuItem.title}</span>

              {mainMenuItem.columns?.length && (
                <ul>
                  {mainMenuItem.columns?.map((column, columnIndex) => (
                    <li key={columnIndex}>
                      <ul>
                        {column.blocks?.map((block, blockIndex) => (
                          <li key={blockIndex}>
                            <span>{block.title}</span>

                            <ul>
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
                                  link = `/${locale}/pages/${item.page.replace(
                                    /(^\/|\/$)/g,
                                    ""
                                  )}`;
                                } else if (item.post) {
                                  link = `/${locale}/posts/${item.post.replace(
                                    /(^\/|\/$)/g,
                                    ""
                                  )}`;
                                } else {
                                  return <span key={itemIndex}>{title}</span>;
                                }

                                return (
                                  <a href={link} key={itemIndex}>
                                    {title}
                                  </a>
                                );
                              })}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
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
      </SimpleGrid>
    </FooterComponent.Root>
  );
};
