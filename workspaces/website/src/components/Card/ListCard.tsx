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

export const ListCard = (props: Props) => {
  const cloudflareImage = props.image; //`https://www.starknet.io/cdn-cgi/image/width=80px,height=auto,format=auto${props.image}`;
  const isProd  = import.meta.env.VITE_ALGOLIA_INDEX === "production";

  return (
    <Box maxW="5xl">
      <LinkBox
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
              spacing={{ base: "3", md: "6" }}
              align="center"
            >
              {props.image && <Stack spacing="4">
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
                    src={isProd ? cloudflareImage : props.image}
                    title={props.title}
                    objectFit="contain"
                  />
                </Box>
              </Stack>}
              <Box flex="1">
                {props.startDateTime && (
                  <Text
                    // mt="2"
                    fontSize="xs"
                    fontWeight="bold"
                    color="list-card-sm-title-fg"
                    display="flex"
                    flexDirection={{ base: "row", md: "row" }}
                    // justifyContent="space-between"
                    alignItems={{ base: "flex-start", md: "center" }}
                    // margin="0"
                  >
                    {props.startDateTime}
                    {props.city && (
                      <Text fontSize="xs" fontWeight="bold" px="4px">
                        ·
                      </Text>
                    )}
                    <Text
                      // mt="2"
                      fontSize="xs"
                      fontWeight="bold"
                      color="list-card-sm-title-fg"
                      // paddingBottom="4px",

                      as="span"
                    >
                      {/* {props.city} */}
                      {props.city && `  ${props.city}, `}
                      {props.country && props.country}
                    </Text>
                  </Text>
                )}
                <Stack
                  spacing={{ base: "1", md: "2" }}
                  direction={{ base: "row", md: "row" }}
                  pb="4px"
                  // removing until designers look at this
                  // borderTop={!props.startDateTime ? "none" : "1px solid red"}
                  paddingTop="4px"
                >
                  <Heading
                    variant="h4"
                    color="btn-primary-bg"
                    _dark={{
                      color: "button-nav-fg",
                    }}
                  >
                    {props.title}
                  </Heading>
                  <HStack fontSize={{ base: "md", md: "xl" }}>
                    {/* <Icon as={FiExternalLink} color="list-card-sm-title-link-fg" /> */}
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
                  href={props.href!}
                  target="_blank"
                >
                  {props.description}
                </LinkOverlay>
                {/* {props.variant === "event" && (
                <Box py="8px">
                  <Button variant="outline" size="sm">
                    View event recap
                  </Button>
                </Box>
              )} */}
                {props.type_list ? (
                  <Wrap shouldWrapChildren mb="12px">
                    {props.type_list.map((tag) => (
                      <Link
                        key={tag.type}
                        isExternal
                        href={tag.url}
                      >
                        <Tag variant="listCard">
                          {tag.type !== "ios" ? titleCase(tag.type) : "iOS"}
                        </Tag>
                      </Link>
                    ))}
                  </Wrap>
                ) : (
                  props.type && (
                    <Wrap shouldWrapChildren mb="12px">
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

                <Wrap spacingX="24px" shouldWrapChildren mt='20px'>
                  {props.href &&
                    props.variant !== "event" &&
                    props.variant !== "job" && (
                      <Link
                        isExternal
                        href={`${props.href}`}
                      >
                        <Icon
                          boxSize="18px"
                          color="list-card-icon-fg"
                          as={HiGlobeAlt}
                        />
                      </Link>
                    )}
                  {props.twitter && (
                    <Link
                      isExternal
                      href={`${props.twitter}`}
                    >
                      <Icon
                        boxSize="18px"
                        color="list-card-icon-fg"
                        as={SiTwitter}
                      />
                    </Link>
                  )}
                  {props.discord && (
                    <Link
                      isExternal
                      href={`${props.discord}`}
                    >
                      <Icon
                        boxSize="18px"
                        color="list-card-icon-fg"
                        as={SiDiscord}
                      />
                    </Link>
                  )}
                </Wrap>
                {props.recap?.link && (
                  <Button
                    href={props.recap.link}
                    mt="20px"
                    isExternal={props.recap.isExternal}
                    variant="outlineRounded"
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
