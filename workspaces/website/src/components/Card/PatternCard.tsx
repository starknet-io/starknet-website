import { Box, Image, Link } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { CardGradientBorder } from "./components/CardGradientBorder";

type PatternCardProps = {
  title: string;
  link: string;
  pattern: "two-lines" | "ethereum" | "curly-lines" | "circle-lines";
};
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
        flexDir={{
          base: "row",
          lg: "column",
        }}
        alignItems={{
          base: "center",
          lg: "flex-start",
        }}
        borderRadius={{ base: "16px" }}
        bg="card-bg"
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
          gap="lg"
          display="flex"
          flexDir="column"
        >
          <Heading
            variant="h5"
            title={title}
            color="content.accent"
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
