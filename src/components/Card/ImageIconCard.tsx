import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  LinkBox,
  Stack,
} from "src/libs/chakra-ui";
import { ImageIconBox } from "./components/ImageIconBox";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import "./style.css";
import NextLink from "next/link";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";
import { getComputedLinkData } from "src/utils/utils";
import { CustomLink } from "@ui/Link/CustomLink";
import { LinkData } from "src/data/settings/main-menu";

type Props = {
  variant?: "image_icon_link_card" | "icon_link_card" | "dapp";
  title: string;
  link?: LinkData;
  icon?: string;
  description?: string;
  locale: string,
  size?: "large" | "small",
  withIllustration?: boolean,
  withBackground?: boolean,
  columns?: number,
  color?:
  | "blue-default"
  | "orange"
  | "blue"
  | "purple"
  | "peach"
  | "cyan"
  | "pink"
  | "grey"
};

type titleVariantType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type linkVariantType = "cardBody" | "breadcrumbs" | "footerLink" | "textLink";
type descriptionVariantType = "body" | "cardBody" | "breadcrumbs" | "footerLink" | "textLink";

export const ImageIconCard = ({
  title,
  description,
  link,
  icon,
  color = "orange",
  locale,
  size = "large",
  withIllustration = false,
  variant = "image_icon_link_card",
  columns = 4
}: Props) => {
  const { href, label } = getComputedLinkData(locale, link ?? {
      custom_title: 'dsa',
      custom_internal_link: 'asd'
  });
  let titleVariant;
  let descriptionVariant;
  let linkVariant;
  let cardFooterPadding;
  let globalPadding;
  switch (variant) {
    case "image_icon_link_card":
      titleVariant = size === "large" ? "h3" : "h4";
      descriptionVariant = size === "large" ? "body" : "cardBody";
      linkVariant = size === "large" ? "cardLink" : "smallCardLink";
      cardFooterPadding = "24px 0 0 0";
      break;
    case "icon_link_card":
      titleVariant = size === "large" ? "h3" : "h4";
      linkVariant = size === "large" ? "cardLink" : "smallCardLink";
      cardFooterPadding = "16px 0 0 0";
      globalPadding = columns === 4 ? "120px 40px 48px 32px" : "68px 48px 36px 48px";
      break;
    case "dapp":
      titleVariant = "h3";
      descriptionVariant = "body";
      cardFooterPadding = "24px 0 0 0";
      break;
    default:
      cardFooterPadding = "24px 0 0 0";
      titleVariant = size === "large" ? "h3" : "h4";
      descriptionVariant = size === "large" ? "body" : "cardBody";
      linkVariant = size === "large" ? "cardLink" : "smallCardLink";
  }
  return (
    <LinkBox
      as={NextLink}
      href={href!}
      sx={{ textDecoration: "none!important" }}
    >
      <CardGradientBorder padding="0">
        <Card
          overflow="hidden"
          borderRadius="24px"
          boxShadow="none"
          bg="card-bg"
        >
          <ImageIconBox title={title} variant={variant} color={color} size={size} icon={icon} withIllustration={withIllustration} />
          <Box padding={(size === "large" && icon && variant !== "icon_link_card" && variant !== "dapp") ? "48px 32px 48px 32px" : (variant === "icon_link_card" && !icon) ? globalPadding : variant === "dapp" ? "40px 32px 48px 32px" : "32px 32px 40px 32px"}>
            <CardBody padding="0">
              <Stack spacing="3">
                <Heading variant={titleVariant as titleVariantType} lineHeight="100%">
                  {title}
                </Heading>
                {variant !== "icon_link_card" && <Text variant={descriptionVariant as descriptionVariantType} paddingTop="0px" color="grey.coolerText" _dark={{color: "grey.morning"}} lineHeight="24px">{description}</Text>}
              </Stack>
            </CardBody>

            {link && <CardFooter padding={cardFooterPadding}>
              <ButtonGroup spacing="2">
                <CustomLink
                  variant={linkVariant as linkVariantType}
                  color="selected.main"
                  href={href}
                  _hover={{ textDecoration: "underline!important" }}
                >
                  {label} &rarr;
                </CustomLink>
              </ButtonGroup>
            </CardFooter>}
          </Box>
        </Card>
      </CardGradientBorder>
    </LinkBox>
  );
};
