"use client";
import { SimpleGrid } from "@chakra-ui/react";
import * as FooterComponent from "@ui/Footer/Footer";
import { useLocale, useTranslations } from "next-intl";
import type { MainMenu, Page } from "src/data/settings/main-menu";

export interface Props {
  readonly mainMenu: MainMenu<Page<{ readonly title: string }>>;
}

export const Footer = ({ mainMenu }: Props) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <FooterComponent.Root>
      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        gap="8"
        width={{ base: "full", lg: "auto" }}
      >
        {mainMenu.pages.map(({ title, pages }) => {
          return (
            <FooterComponent.Column key={title} title={title}>
              {pages.map(({ page, title }) => {
                return (
                  <FooterComponent.Link
                    key={title}
                    href={`/${locale}${page}`}
                    title={title}
                  />
                );
              })}
            </FooterComponent.Column>
          );
        })}
      </SimpleGrid>
    </FooterComponent.Root>
  );
};
