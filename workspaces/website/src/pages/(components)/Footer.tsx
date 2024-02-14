import {
  Box,
  Stack,
  StackDivider,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as FooterComponent from "@ui/Footer/Footer";
import type { MainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { getComputedLinkData } from "src/utils/utils";
import { usePageContext } from "src/renderer/PageContextProvider";

export interface Props {
  readonly mainMenu: MainMenu;
  readonly seo: {
    footerText: string;
    footerDisclaimers: {
      text: string;
      link: string;
    }[];
  };
}

export const Footer = ({ mainMenu, seo }: Props) => {
  const { locale } = usePageContext();
  const displayValue = useBreakpointValue({ base: "none", md: "block" });

  return (
    <FooterComponent.Root seo={seo}>
      <Stack
        divider={
          <StackDivider
            borderColor={useColorModeValue(
              "footer-divider-bg",
              "footer-divider-bg"
            )}
            display={displayValue}
          />
        }
        align="stretch"
        gap={{ base: "5", lg: "8" }}
        alignItems="flex-start"
        justifyContent="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        {mainMenu?.items?.map((mainMenuItem, mainMenuItemIndex) => (
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
                  <Stack key={columnIndex} spacing="4">
                    {column.blocks?.map((block, blockIndex) => (
                      <Stack key={blockIndex} spacing="4">
                        {block.items?.map((item, itemIndex) => {
                          if (
                            item.hide_from_footer ||
                            item.custom_icon ||
                            item.custom_title === "Developers posts" ||
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
                            item
                          );

                          if (!href) {
                            return <span key={itemIndex}>{label}</span>;
                          }

                          return (
                            <FooterComponent.FooterLink
                              isExternal={item.custom_external_link != null}
                              href={href}
                              key={itemIndex}
                            >
                              {label}
                            </FooterComponent.FooterLink>
                          );
                        })}
                      </Stack>
                    ))}
                  </Stack>
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
