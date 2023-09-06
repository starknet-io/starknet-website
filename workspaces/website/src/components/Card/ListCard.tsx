import {
  Box,
  HStack,
  Icon,
  Stack,
  Tag,
  Wrap,
  Link,
  BoxProps,
  Img,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { HiArrowTopRightOnSquare, HiGlobeAlt } from "react-icons/hi2";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";
import { titleCase } from "src/utils/utils";
import { Button } from "@ui/Button";

interface Type {
  readonly type: string;
  readonly url: string;
}

type Props = {
  readonly title?: string;
  readonly startDateTime?: string;
  readonly description?: string;
  readonly location?: string;
  readonly image?: string;
  readonly href: string;
  readonly tags?: string[];
  readonly city?: string;
  readonly country?: string;
  readonly venue?: string;
  readonly twitterHandle?: string;
  readonly discordHandle?: string;
  readonly variant?: "default" | "dapp" | "event" | "job" | "wallet";
  readonly type_list?: Type[];
  readonly type?: string[];
  readonly isRounded?: boolean;
  readonly recap?: {
    label?: string;
    link: string;
    isExternal?: boolean;
  };
} & BoxProps;

export const ListCard = (props: Props) => {
  const showWebsiteIcon =
    props.href && props.variant !== "event" && props.variant !== "job";

  const cloudflareImage = `https://starknet.io/cdn-cgi/image/width=80px,height=auto,format=auto${props.image}`;
  const isProd  = import.meta.env.VITE_ALGOLIA_INDEX === "production";
  
  return (
    <Box maxW="5xl">
      <LinkBox sx={{ textDecoration: "none!important", cursor: "pointer" }}>
        <CardGradientBorder padding="0" borderRadius="md">
          <Box
            w={{ base: "full" }}
            mx="auto"
            bg="surface.card"
            rounded={props.variant === "default" ? "8px" : "16px"}
            p={{
              base: "xl",
              md: "2xl",
            }}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="xl"
              align="center"
            >
              {props.image && (
                <Box
                  width="80px"
                  height="80px"
                  borderRadius="8px"
                  overflow="hidden"
                  // marginBottom={{ base: "16px", md: "0" }}
                >
                  <Img
                    width="full"
                    height="full"
                    src={isProd ? cloudflareImage : props.image}
                    title={props.title}
                    objectFit="contain"
                  />
                </Box>
              )}
              <Box flex="1" display="flex" flexDir="column" gap="base">
                {props.startDateTime && (
                  <Text
                    fontSize="12px"
                    lineHeight="16px"
                    fontWeight="500"
                    color="content.support"
                    display="flex"
                    flexDirection={{ base: "row", md: "row" }}
                    alignItems={{ base: "flex-start", md: "center" }}
                  >
                    {props.startDateTime}
                    {props.city && <Text px="4px">·</Text>}
                    <Text color="content.support" as="span">
                      {props.city && `  ${props.city}, `}
                      {props.country && props.country}
                    </Text>
                  </Text>
                )}
                <Stack
                  spacing="base"
                  alignItems="center"
                  direction={{ base: "row", md: "row" }}
                >
                  <Heading
                    variant="h3"
                    color="content.accent.value"
                    _dark={{
                      color: "button-nav-fg",
                    }}
                  >
                    {props.title}
                  </Heading>
                  <Icon
                    as={HiArrowTopRightOnSquare}
                    color="content.link.value"
                    boxSize="20px"
                  />
                </Stack>

                <LinkOverlay
                  fontSize="14px"
                  color="content.default.value"
                  href={props.href!}
                  target="_blank"
                >
                  {props.description}
                </LinkOverlay>
                {props.type_list ? (
                  <Wrap shouldWrapChildren pt="xs">
                    {props.type_list.map((tag) => (
                      <Link key={tag.type} isExternal href={tag.url}>
                        <Tag variant="listCard">
                          {tag.type !== "ios" ? titleCase(tag.type) : "iOS"}
                        </Tag>
                      </Link>
                    ))}
                  </Wrap>
                ) : (
                  props.type && (
                    <Wrap shouldWrapChildren pt="xs" spacing="xs">
                      {props.location && (
                        <Tag variant="listCard">
                          {titleCase(props.location)}
                        </Tag>
                      )}
                      {props.type
                        .filter((element) => element !== "")
                        .map((tag) => (
                          <Tag key={tag} variant="listCard">
                            {titleCase(tag)}
                          </Tag>
                        ))}
                    </Wrap>
                  )
                )}
                {(showWebsiteIcon ||
                  props.twitterHandle ||
                  props.discordHandle) && (
                  <Wrap spacingX="24px" shouldWrapChildren mt="20px">
                    {showWebsiteIcon && (
                      <Link isExternal href={`${props.href}`}>
                        <Icon
                          boxSize="18px"
                          color="list-card-icon-fg"
                          as={HiGlobeAlt}
                        />
                      </Link>
                    )}
                    {props.twitterHandle && (
                      <Link isExternal href={`${props.twitterHandle}`}>
                        <Icon
                          boxSize="18px"
                          color="list-card-icon-fg"
                          as={SiTwitter}
                        />
                      </Link>
                    )}
                    {props.discordHandle && (
                      <Link isExternal href={`${props.discordHandle}`}>
                        <Icon
                          boxSize="18px"
                          color="list-card-icon-fg"
                          as={SiDiscord}
                        />
                      </Link>
                    )}
                  </Wrap>
                )}
                {props.recap?.link && (
                  <Button
                    href={props.recap.link}
                    mt="20px"
                    isExternal={props.recap.isExternal}
                    variant="rounded"
                    target="_blank"
                  >
                    {props.recap.label || "View event recap"}
                  </Button>
                )}
              </Box>
            </Stack>
          </Box>
        </CardGradientBorder>
      </LinkBox>
    </Box>
  );
};
