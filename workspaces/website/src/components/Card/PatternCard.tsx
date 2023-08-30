import { Box, Image, Link } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { CardGradientBorder } from "./components/CardGradientBorder";
import { PatternCardBlock as PatternCardBlockType } from "@starknet-io/cms-data/src/pages";

interface PatternCardProps extends PatternCardBlockType {}
export const PatternCard = ({
  title,
  link,
  pattern = "two-lines",
}: PatternCardProps) => {
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
        <Image
          src={`/assets/pattern/${pattern}.svg`}
          alt={title}
          objectFit="cover"
          objectPosition={{
            base: "left center",
            lg: "50% 50%",
          }}
          h={{
            lg: "auto",
          }}
          w={{
            lg: "100%",
          }}
          maxW={{
            base: "160px",
            lg: "100%",
          }}
          aspectRatio={{
            base: "1",
            lg: "16 / 9",
          }}
        />
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
            href={link}
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
