import { Box, Image, Link } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { CardGradientBorder } from "./components/CardGradientBorder";
import { PatternCardBlock as PatternCardBlockType } from "@starknet-io/cms-data/src/pages";
import { useCMSLink } from "src/utils/useCMSLink";

interface PatternCardProps extends PatternCardBlockType {}
export const PatternCard = ({
  title,
  linkUrl,
  pattern = "viewallquestions",
}: PatternCardProps) => {
  const { isAbsolute, href } = useCMSLink(linkUrl);

  return (
    <CardGradientBorder display="inline-block">
      <Box
        padding="0px"
        display="flex"
        height="100%"
        flexDir={{
          base: "row",
          lg: "column",
        }}
        alignItems={{
          base: "center",
          lg: "flex-start",
        }}
        borderRadius={{ base: "16px" }}
        bg="surface.card"
      >
        <Box
          overflow="hidden"
          position="relative"
          width="100%"
          paddingBottom="56.25%"
          height={{ base: "16rem", md: "12rem", lg: "10rem" }}
        >
          <Image
            src={`/assets/pattern/${pattern}.png`}
            alt={title}
            objectFit="cover"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          px={{
            base: "xl",
            lg: "3xl",
          }}
          py={{
            lg: "xl",
          }}
          gap="4px"
          display="flex"
          flexDir="column"
          flex="1"
          justifyContent="space-between"
        >
          <Heading
            variant="h5"
            title={title}
            color="content.accent.value"
            fontSize="20px"
            lineHeight="28px"
          >
            {title}
          </Heading>
          <Link
            isExternal={isAbsolute}
            href={href}
            display="flex"
            gap="base"
            p="base"
            alignItems="center"
          >
            Learn <HiOutlineArrowRight size="14px" />
          </Link>
        </Box>
      </Box>
    </CardGradientBorder>
  );
};
