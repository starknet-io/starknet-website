import { Box } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
  stat: string;
  description: string;
};

export const AnalyticsCard = ({
  icon: Icon,
  stat = "100k",
  description = "Followers on Social Media",
}: Props) => {
  return (
    <Box
      as="article"
      p="2xl"
      borderRadius="16px"
      bg="surface.bgPage"
      display="inline-block"
    >
      <Box
        display="inline-flex"
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
  );
};
