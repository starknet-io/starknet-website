import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import * as FooterComponent from "@ui/Footer/Footer";
import type { MainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { getComputedLinkData } from "src/utils/utils";
import { usePageContext } from "src/renderer/PageContextProvider";
import { Fragment } from "react";

export interface Props {
  readonly mainMenu: MainMenu;
  readonly seo: {
    footerText: string;
  };
}

export const Footer = ({ mainMenu, seo }: Props) => {
  const { locale } = usePageContext();
  const isTabletScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: false,
  });

  return (
    <FooterComponent.Root seo={seo}>
      <SimpleGrid
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, max-content))",
          md: "repeat(2, minmax(0, max-content))",
          lg: `repeat(${mainMenu.items?.length}, minmax(0, 1fr))`,
        }}
      >
        {mainMenu?.items?.map((mainMenuItem, mainMenuItemIndex) => (
          <FooterComponent.Column
            key={mainMenuItemIndex}
            title={mainMenuItem.title}
          >
            {mainMenuItem?.columns?.map((column, columnIndex) => (
              <Fragment key={columnIndex}>
                {column.blocks?.map((block) => (
                  <Fragment key={block.title}>
                    {block.items?.map((item, itemIndex) => {
                      if (item.hide_from_footer || item.custom_icon) {
                        return;
                      }

                      const { href, label } = getComputedLinkData(locale, item);

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
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </FooterComponent.Column>
        ))}
        {isTabletScreen && mainMenu?.items?.length % 2 === 1 && (
          <FooterComponent.Column title="" children={null} />
        )}
      </SimpleGrid>
    </FooterComponent.Root>
  );
};
