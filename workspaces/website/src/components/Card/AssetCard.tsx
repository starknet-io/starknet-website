import { Card, CardBody, CardImg, CardLink, CardTitle } from "./Card";
import { HStack, Icon, Link } from "@chakra-ui/react";
import {
  HiArrowTopRightOnSquare,
  HiGlobeAlt,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { Text } from "@ui/Typography/Text";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { IconType } from "react-icons/lib";

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

type AssetCardProps = {
  title: string;
  description: string;
  website_url: string;
  twitter: string;
  image: string;
  discord: string;
};
export const AssetCard = ({
  title,
  description,
  website_url,
  twitter,
  image,
  discord,
}: AssetCardProps) => {
  return (
    <Card variant="asset">
      <CardImg variant="asset" src={image} />
      <CardBody variant="asset">
        <CardTitle variant="asset">
          {title}{" "}
          <Icon
            as={HiArrowTopRightOnSquare}
            color="list-card-sm-title-link-fg"
          />
        </CardTitle>
        <Text variant="body">{description}</Text>
        <HStack>
          {twitter && <SocialIconLink href={twitter} icon={SiTwitter} />}
          {discord && <SocialIconLink href={discord} icon={SiDiscord} />}
          {website_url && (
            <SocialIconLink href={website_url} icon={HiGlobeAlt} />
          )}
        </HStack>
        <CardLink variant="iconLink" href={website_url} isExternal>
          View <Icon as={HiOutlineArrowRight} aria-label="Link" />
        </CardLink>
      </CardBody>
    </Card>
  );
};
