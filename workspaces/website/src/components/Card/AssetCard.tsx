import { Card, CardBody, CardImg, CardLink, CardTitle } from "./Card";
import { Box, HStack, Icon, Link, useColorMode } from "@chakra-ui/react";
import {
  HiArrowTopRightOnSquare,
  HiGlobeAlt,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { Text } from "@ui/Typography/Text";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { AssetCardBlock } from "@starknet-io/cms-data/src/pages";

const SocialIconLink = ({ href, icon }: { href: string; icon: IconType }) => {
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
      <Icon boxSize="18px" color="list-card-icon-fg" as={icon} />
    </Link>
  );
};

interface AssetCardProps extends AssetCardBlock {}

export const AssetCard = ({
  title,
  description,
  website_url,
  twitter,
  image,
  discord,
}: AssetCardProps) => {
  return (
    <Card variant="asset" bgColor="surface.card">
      <CardImg variant="asset" src={image} />
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
        <Text variant="body">{description}</Text>
        <HStack>
          {twitter && <SocialIconLink href={twitter} icon={SiTwitter} />}
          {discord && <SocialIconLink href={discord} icon={SiDiscord} />}
          {website_url && (
            <SocialIconLink href={website_url} icon={HiGlobeAlt} />
          )}
        </HStack>
        <CardLink variant="iconLink" href={website_url} isExternal mt="sm">
          View <Icon as={HiOutlineArrowRight} aria-label="Link" />
        </CardLink>
      </CardBody>
    </Card>
  );
};
