import { Box, Button, Tooltip } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { HiInformationCircle } from "react-icons/hi2";

type Props = {
  title: string;
  stat: string;
  tooltip?: string;
};

export const StatsCard = ({
  title = "Title",
  stat = "465,135",
  tooltip = "I am a tooltip",
}: Props) => {
  return (
    <Box
      pos="relative"
      py="2xl"
      px="xl"
      bg="surface.accent"
      display="inline-flex"
      flexDirection="column"
      w="auto"
      gap={{
        base: "3xl",
        lg: "5xl",
      }}
      minW={{
        base: "260px",
        lg: "302px",
      }}
      maxW={{
        base: "auto",
        md: "400px",
        lg: "400px",
      }}
      borderRadius="1rem"
    >
      <Heading
        title={title}
        variant="h4"
        fontSize="24px"
        lineHeight={1.5}
        color="#EBEBFF"
        fontWeight={500}
        pr={{
          base: "md",
          md: "3xl",
        }}
        pb="xl"
        borderBottom="1px solid"
        borderColor="brand.infiniteBlue"
      >
        {title}
      </Heading>
      <Box
        background="linear-gradient(119deg, #EC796B 0%, #D672EF 100%)"
        backgroundClip="text"
        fontFamily="firaCode"
        fontSize="56px"
        lineHeight={1}
        fontWeight={600}
      >
        {stat}
      </Box>
      <Box
        p="xs"
        pos="absolute"
        right={0}
        top={0}
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Tooltip label={tooltip} placement="auto" gutter={18} hasArrow isOpen>
          <Button
            aria-label="Information"
            color="brand.infiniteBlue"
            _hover={{
              color: "surface.accentInverted",
            }}
            variant="unstyled"
          >
            <HiInformationCircle size={32} />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};
