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
  color = "orange",
  locale,
}: Props) => {
  const { href, label } = getComputedLinkData(locale, link);
  const colors = {
    purple: {
      gradient:
        "linear(181.06deg, gradient-purple-a 1.25%, gradient-purple-b 150.79%)",
    },
    peach: {
      gradient:
        "linear(181.06deg, gradient-peach-a 1.25%, gradient-peach-b 150.79%)",
    },
    blue: {
      gradient:
        "linear(180.15deg, gradient-blue-a 0.2%, gradient-blue-b 105.43%)",
    },
    "blue-default": {
      gradient:
        "linear(180.15deg, gradient-blue-default-a 0.2%, gradient-blue-default-b 105.43%)",
    },
    cyan: {
      gradient:
        "linear(181.06deg, gradient-cyan-a 1.25%, gradient-cyan-b 150.79%)",
    },
    orange: {
      gradient:
        "linear(180.75deg, gradient-orange-a 0.96%, gradient-orange-b 106.43%)",
    },
    pink: {
      gradient:
        "linear(181.06deg, gradient-pink-a 1.25%, gradient-pink-b 150.79%)",
    },
  };

  return (
    <CardGradientBorder padding="0" height="100%">
      <Card overflow="hidden" borderRadius="24px" boxShadow="none" bg="card-bg">
        <Box
          margin="8px 8px 0 8px"
          borderRadius="20px 20px 0 0"
          position="relative"
          bgGradient={colors[color].gradient}
          height="263px"
        >
          <Image
            alt="icon"
            src={icon}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={1}
            opacity={0.8}
            mixBlendMode={color === "blue-default" ? "multiply" : "difference"}
            _dark={{ mixBlendMode: "color-dodge", opacity: 0.8 }}

            // filter={colors[color].gradient}
          />
          <Image
            mixBlendMode="overlay"
            opacity="1"
            alt="icon"
            src="/assets/cards/image_icon_card_curves.png"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={0}
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
  );
};
