import { Box } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { IconType } from "react-icons/lib";
import { CardGradientBorder } from "./components/CardGradientBorder";

type Props = {
  icon: IconType;
  stat: string;
  description?: string;
  bg?: string;
};

export const AnalyticsCard = ({
  icon: Icon,
  stat = "100k",
  description = "Followers on Social Media",
  bg = "surface.bgPage",
}: Props) => {
  return (
    <CardGradientBorder p={0} display="inline-block">
      <Box p="2xl" bg={bg}>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          gap="3xl"
        >
          <Icon size="48px" fill="content.accent" />
          <Box display="flex" flexDir="column" gap="4px">
            <Heading
              variant="h5"
              fontSize="64px"
              lineHeight="80px"
              fontWeight={600}
              color="content.accent"
            >
              {stat}
            </Heading>
            <Box
              fontSize={18}
              lineHeight="32px"
              fontWeight={500}
              color="content.support"
            >
              {description}
            </Box>
          </Box>
        </Box>
      </Box>
    </CardGradientBorder>
  );
};
