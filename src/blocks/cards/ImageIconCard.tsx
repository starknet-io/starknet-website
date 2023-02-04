import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Image,
  Link,
  Stack,
} from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

import NextLink from "next/link";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import { CardLink } from "./CardLink";
import { getComputedLinkData } from "src/utils/utils";
import { ImageIconLinkCardBlock } from "src/data/pages";
import { CustomLink } from "@ui/Link/CustomLink";

type Props = ImageIconLinkCardBlock & { locale: string };

export const ImageIconCard = ({
  title,
  description,
  link,
  icon,
  color,
  locale,
}: Props) => {
  const { href, label } = getComputedLinkData(locale, link);
  return (
    <CardLink href={href}>
      <CardGradientBorder padding="0">
        <Card
          maxW="sm"
          overflow="hidden"
          borderRadius="24px"
          // borderWidth="1px"
          // borderColor="card-br"
          boxShadow="none"
          bg="card-bg"
        >
          <Box
            margin="0 8px 0 8px"
            borderRadius="24px 24px 0 0"
            position="relative"
          >
            <Image
              alt="icon"
              src={icon}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
            <Image
              src="/assets/cards/linklist.svg"
              alt={title}
              borderRadius="24px 24px 0 0"
              height="263px"
            />
          </Box>
          <Box>
            <CardBody padding="40px 40px 16px 32px ">
              <Stack mt="6" spacing="3">
                <Heading as="h3" variant="h3" lineHeight="1.3em">
                  {title}
                </Heading>
                <Text variant="baseRegular">{description}</Text>
              </Stack>
            </CardBody>

            <CardFooter padding="0 40px 32px 32px">
              <ButtonGroup spacing="2">
                <CustomLink variant="card" href={href}>
                  {label} &rarr;
                </CustomLink>
              </ButtonGroup>
            </CardFooter>
          </Box>
        </Card>
      </CardGradientBorder>
    </CardLink>
  );
};
