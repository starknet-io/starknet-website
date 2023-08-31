import { Card, CardBody, CardImg, CardLink, CardTitle } from "./Card";
import { Box, Flex, HStack, Icon, Link, useColorMode } from "@chakra-ui/react";
import {
  HiArrowTopRightOnSquare,
  HiGlobeAlt,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { Text } from "@ui/Typography/Text";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { AssetCardBlock } from "@starknet-io/cms-data/src/pages";

const SocialIconLink = ({
  href,
  icon,
  iconColor = "list-card-icon-fg",
}: {
  href: string;
  icon: IconType;
  iconColor?: string;
}) => {
  return (
    <Link
      isExternal
      href={href}
      sx={{
        display: "flex",
        minWidth: "40px",
        maxWidth: "40px",
        minHeight: "40px",
        maxHeight: "40px",
        padding: "8px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon boxSize="18px" color={iconColor} as={icon} />
    </Link>
  );
};

interface AssetCardProps extends AssetCardBlock {}

const colors = {
  pink: "brand-secondary-lilac-stardust-4",
  green: "brand-secondary-boreal-green-4",
};
export const AssetCard = ({
  title,
  description,
  website_url,
  twitter,
  image,
  img_bg_color = "pink",
  discord,
}: AssetCardProps) => {
  return (
    <Card variant="asset" bgColor="surface.card">
      <Box
        display="flex"
        padding="70px 76px"
        justifyContent="center"
        alignItems="center"
        bg={colors[img_bg_color] || colors.pink}
        w="100%"
        borderRadius="sm"
      >
        <CardImg variant="asset" src={image} />
      </Box>
      <CardBody variant="asset">
        <Box display="flex" alignItems="center" gap="xs">
          <CardTitle variant="asset">{title}</CardTitle>
          {website_url && (
            <Link
              href={website_url}
              aria-label="Website link"
              lineHeight={1}
              isExternal
            >
              <Icon as={HiArrowTopRightOnSquare} width="24px" height="24px" />
            </Link>
          )}
        </Box>
        <Text variant="body" lineHeight="28px" color="content.default.value">
          {description}
        </Text>
        <HStack color="content.default.value">
          {twitter && (
            <SocialIconLink
              href={twitter}
              icon={SiTwitter}
              iconColor="content.default.value"
            />
          )}
          {discord && (
            <SocialIconLink
              href={discord}
              icon={SiDiscord}
              iconColor="content.default.value"
            />
          )}
          {website_url && (
            <SocialIconLink
              href={website_url}
              icon={HiGlobeAlt}
              iconColor="content.default.value"
            />
          )}
        </HStack>
        <Flex flex={1} direction="column" justifyContent="flex-end">
          <CardLink
            variant="iconLink"
            href={website_url}
            isExternal
            fontWeight={600}
            mt="md"
          >
            View <Icon as={HiOutlineArrowRight} aria-label="Link" />
          </CardLink>
        </Flex>
      </CardBody>
    </Card>
  );
};
