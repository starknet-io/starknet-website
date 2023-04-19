"use client";
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
} from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import NextLink from "next/link";
import { HiArrowTopRightOnSquare, HiGlobeAlt } from "react-icons/hi2";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";
import { titleCase } from "src/utils/utils";

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
} & BoxProps;

export const ListCard = (props: Props) => {
  return (
    <Box maxW="5xl">
      <LinkBox
        as="a"
        href={props.href!}
        target="_blank"
        sx={{ textDecoration: "none!important", cursor: "pointer" }}
      >
        <CardGradientBorder padding="0" borderRadius={{ base: "16px" }}>
          <Box
            w={{ base: "full" }}
            mx="auto"
            bg="card-bg"
            borderRadius="16px"
            rounded={props.variant === "default" ? "8px" : "16px"}
            padding={"32px 24px"}
            // borderWidth="1px"
            borderColor="card-br"
            // shadow={{ md: "base" }}
            px={{ base: "6", md: "8" }}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "3", md: "10" }}
              align="flex-start"
            >
              <Stack spacing="4">
                <Box
                  width="80px"
                  height="80px"
                  borderRadius="8px"
                  overflow="hidden"
                  marginTop={{ base: "0px", md: "24px" }}
                  marginBottom={{ base: "16px", md: "0" }}
                >
                  <Img
                    width="full"
                    height="full"
                    src={props.image}
                    title={props.title}
                    objectFit="contain"
                  />
                </Box>
              </Stack>
              <Box flex="1">
                {props.startDateTime && (
                  <Text
                    mt="2"
                    fontSize="xs"
                    fontWeight="bold"
                    color="list-card-sm-title-fg"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ base: "flex-start", md: "center" }}
                    margin="0"
                  >
                    {props.startDateTime}
                    <Text
                      mt="2"
                      fontSize="xs"
                      fontWeight="bold"
                      color="list-card-sm-title-fg"
                      paddingBottom="4px"
                      as="span"
                    >
                      {/* {props.city} */}
                      {props.city && `${props.city}, `}{props.country && props.country}
                    </Text>
                  </Text>
                )}
                <Stack
                  spacing={{ base: "1", md: "2" }}
                  direction={{ base: "row", md: "row" }}
                  pb="4px"
                  borderTop={!props.startDateTime ? "none" : "1px solid #E6E6E6"}
                  paddingTop="12px"
                >
                  <Heading
                    variant="h4"
                    color="btn-primary-bg"
                    _dark={{
                      color: "button-nav-fg"
                    }}
                  >
                    {props.title}
                  </Heading>
                  <HStack fontSize={{ base: "md", md: "xl" }}>
                    {/* <Icon as={FiExternalLink} color="list-card-sm-title-link-fg" /> */}
                    <Icon as={HiArrowTopRightOnSquare} color="list-card-sm-title-link-fg" />
                  </HStack>
                </Stack>

                <Text pb="12px" fontSize="sm" color="list-card-lg-desc-fg">
                  {props.description}
                </Text>
                {/* {props.variant === "event" && (
                <Box py="8px">
                  <Button variant="outline" size="sm">
                    View event recap
                  </Button>
                </Box>
              )} */}
                {props.type_list ? (
                  <Wrap shouldWrapChildren>
                    {props.type_list.map((tag) => (
                      <Link key={tag.type} isExternal as={NextLink} href={tag.url}>
                        <Tag variant="listCard">
                          {tag.type !== "ios" ? titleCase(tag.type) : "iOS"}
                        </Tag>
                      </Link>
                    ))}
                  </Wrap>
                ) : props.type && (
                  <Wrap shouldWrapChildren>
                    {props.location && (<Tag variant="listCard">
                      {titleCase(props.location)}
                    </Tag>)}
                    {props.type.map((tag) => (
                      <Tag key={tag} variant="listCard">
                        {titleCase(tag)}
                      </Tag>
                    ))}
                  </Wrap>
                )}

                <Wrap spacingX="24px" shouldWrapChildren>
                  {props.href && props.variant !== "event" && props.variant !== "job" && (
                    <Link mt="20px" isExternal as={NextLink} href={`${props.href}`}>
                      <Icon
                        boxSize="18px"
                        color="list-card-icon-fg"
                        as={HiGlobeAlt}
                      />
                    </Link>
                  )}
                  {props.twitterHandle && (
                    <Link
                      isExternal
                      mt="20px"
                      as={NextLink}
                      href={`${props.twitterHandle}`}
                    >
                      <Icon
                        boxSize="18px"
                        color="list-card-icon-fg"
                        as={SiTwitter}
                      />
                    </Link>
                  )}
                  {props.discordHandle && (
                    <Link
                      isExternal
                      mt="20px"
                      as={NextLink}
                      href={`${props.discordHandle}`}
                    >
                      <Icon
                        boxSize="18px"
                        color="list-card-icon-fg"
                        as={SiDiscord}
                      />
                    </Link>
                  )}
                  {/* <IconButton
              aria-label="Website"
              icon={<HiGlobeAlt />}
            />
            <IconButton
              aria-label="Twitter"
              icon={<SiTwitter />}
            />
            <IconButton
              aria-label="Discord"
              icon={<SiDiscord />}
            /> */}
                </Wrap>
              </Box>
            </Stack>
          </Box>
        </CardGradientBorder>
      </LinkBox>
    </Box>
  );
};