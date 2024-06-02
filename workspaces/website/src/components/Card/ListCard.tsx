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
  Flex,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { HiArrowTopRightOnSquare, HiGlobeAlt } from "react-icons/hi2";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";
import { EVENT_CATEGORY, gtmEvent, titleCase } from "src/utils/utils";
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
  readonly reverse?: boolean;
  readonly showIcons?: boolean;
  readonly city?: string;
  readonly country?: string;
  readonly twitter?: string;
  readonly discord?: string;
  readonly variant?: "default" | "event" | "job";
  readonly type_list?: Type[];
  readonly type?: string[];
  readonly recap?: {
    label?: string;
    link: string;
    isExternal?: boolean;
  };
} & BoxProps;

export const ListCard = ({
  reverse = false,
  showIcons = true,
  title,
  startDateTime,
  description,
  location,
  image,
  href,
  city,
  country,
  twitter,
  discord,
  variant,
  type_list,
  type,
  recap,
}: Props) => {
  const cloudflareImage = image; //`https://www.starknet.io/cdn-cgi/image/width=80px,height=auto,format=auto${props.image}`;
  const isProd = import.meta.env.VITE_ALGOLIA_INDEX === "production";

  return (
    <Box maxW="5xl">
      <LinkBox
        sx={{ textDecoration: "none!important", cursor: "pointer" }}
        onClick={() =>
          gtmEvent(
            (title || "List_card").replace(/ /g, "_"),
            EVENT_CATEGORY.BUTTON_CLICK
          )
        }
      >
        <CardGradientBorder padding="0" borderRadius={{ base: "16px" }}>
          <Box
            w={{ base: "full" }}
            mx="auto"
            bg="card-bg"
            borderRadius="16px"
            rounded={variant === "default" ? "8px" : "16px"}
            padding={"32px 24px"}
            borderColor="card-br"
            px={{ base: "6", md: "8" }}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "3", md: "6" }}
              align="center"
            >
              {image && (
                <Stack spacing="4">
                  <Box
                    width="80px"
                    height="80px"
                    borderRadius="8px"
                    overflow="hidden"
                    marginBottom={{ base: "16px", md: "0" }}
                  >
                    <Img
                      width="full"
                      height="full"
                      src={isProd ? cloudflareImage : image}
                      title={title}
                      objectFit="contain"
                    />
                  </Box>
                </Stack>
              )}
              <Box flex="1">
                {startDateTime && (
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color="list-card-sm-title-fg"
                    display="flex"
                    flexDirection={{ base: "row", md: "row" }}
                    alignItems={{ base: "flex-start", md: "center" }}
                  >
                    {startDateTime}
                    {city && (
                      <Text fontSize="xs" fontWeight="bold" px="4px">
                        ·
                      </Text>
                    )}
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      color="list-card-sm-title-fg"
                      as="span"
                    >
                      {city && `  ${city}, `}
                      {country && country}
                    </Text>
                  </Text>
                )}
                <Flex direction={reverse ? "column-reverse" : "column"}>
                  <Stack
                    spacing={{ base: "1", md: "2" }}
                    direction={{ base: "row", md: "row" }}
                    pb="4px"
                    paddingTop="4px"
                  >
                    <Heading
                      variant="h4"
                      color="btn-primary-bg"
                      _dark={{
                        color: "button-nav-fg",
                      }}
                    >
                      {title}
                    </Heading>
                    <HStack fontSize={{ base: "md", md: "xl" }}>
                      <Icon
                        as={HiArrowTopRightOnSquare}
                        color="list-card-sm-title-link-fg"
                      />
                    </HStack>
                  </Stack>
                  <LinkOverlay
                    pb="12px"
                    fontSize="sm"
                    color="list-card-lg-desc-fg"
                    href={href!}
                    target="_blank"
                  >
                    {description}
                  </LinkOverlay>
                </Flex>
                {showIcons && (
                  <>
                    {type_list ? (
                      <Wrap shouldWrapChildren mb="12px">
                        {type_list.map((tag) => (
                          <Link key={tag.type} isExternal href={tag.url}>
                            <Tag variant="listCard">
                              {tag.type !== "ios" ? titleCase(tag.type) : "iOS"}
                            </Tag>
                          </Link>
                        ))}
                      </Wrap>
                    ) : (
                      type && (
                        <Wrap shouldWrapChildren mb="12px">
                          {location && (
                            <Tag variant="listCard">{titleCase(location)}</Tag>
                          )}
                          {type
                            .filter((element) => element !== "")
                            .map((tag) => (
                              <Tag key={tag} variant="listCard">
                                {titleCase(tag)}
                              </Tag>
                            ))}
                        </Wrap>
                      )
                    )}

                    <Wrap spacingX="24px" shouldWrapChildren mt="20px">
                      {href && variant !== "event" && variant !== "job" && (
                        <Link isExternal href={`${href}`}>
                          <Icon
                            boxSize="18px"
                            color="list-card-icon-fg"
                            as={HiGlobeAlt}
                          />
                        </Link>
                      )}
                      {twitter && (
                        <Link isExternal href={`${twitter}`}>
                          <Icon
                            boxSize="18px"
                            color="list-card-icon-fg"
                            as={SiTwitter}
                          />
                        </Link>
                      )}
                      {discord && (
                        <Link isExternal href={`${discord}`}>
                          <Icon
                            boxSize="18px"
                            color="list-card-icon-fg"
                            as={SiDiscord}
                          />
                        </Link>
                      )}
                    </Wrap>
                    {recap?.link && (
                      <Button
                        href={recap.link}
                        mt="20px"
                        isExternal={recap.isExternal}
                        variant="outlineRounded"
                        target="_blank"
                      >
                        {recap.label || "View event recap"}
                      </Button>
                    )}
                  </>
                )}
              </Box>
            </Stack>
          </Box>
        </CardGradientBorder>
      </LinkBox>
    </Box>
  );
};
