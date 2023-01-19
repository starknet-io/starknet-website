"use client";
import { SimpleGrid } from "@chakra-ui/react";
import * as FooterComponent from "@ui/Footer/Footer";
import { NavbarHeading } from "@ui/Layout/Navbar/NavbarHeading";
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
        {mainMenu.items.map((mainMenuItem, mainMenuItemIndex) => (
          <FooterComponent.Column
            key={mainMenuItemIndex}
            title={mainMenuItem.title}
          >
            {mainMenuItem.columns?.length && (
              <div>
                {mainMenuItem.columns?.map((column, columnIndex) => (
                  <div key={columnIndex}>
                    {column.blocks?.map((block, blockIndex) => (
                      <div key={blockIndex}>
                        {/* <NavbarHeading>{block.title}</NavbarHeading> */}

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
                              ""
                            )}`;
                          } else if (item.page) {
                            link = `/${locale}/${item.page.replace(
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
                            <FooterComponent.Link
                              isExternal={isExternal}
                              href={link}
                              key={itemIndex}
                            >
                              {title}
                            </FooterComponent.Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
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
      </SimpleGrid>
    </FooterComponent.Root>
  );
};
