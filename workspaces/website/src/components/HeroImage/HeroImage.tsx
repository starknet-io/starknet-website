import {
  Box,
  Container,
  Flex,
  Image,
  Img,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import React from "react";

type Props = {
  title: string;
  description: string | React.ReactNode;
  variant?:
    | "wallets"
    | "block_explorers"
    | "bridges"
    | "dapps"
    | "learn"
    | "build"
    | "community"
    | "nodes_and_services"
    | "security"
    | "roadmap";
  buttonText?: string;
  buttonUrl?: string;
  onButtonClick?: () => void;
  leftBoxMaxWidth?: number;
};

type HeroStyleObject = {
  img: string;
  gradient?: string;
  bg?: string;
  backgroundBlendMode?: string;
  arrowGradient?: string;
  arrowOpacity?: string;
  arrowTipColor?: string;
};
const heroStyles: Record<string, HeroStyleObject> = {
  dapps: {
    img: "/assets/ecosystem/dapps.svg",
    gradient:
      "linear(258.76deg, hero-gradient-dapps-a 3.96%, hero-gradient-dapps-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  block_explorers: {
    img: "/assets/ecosystem/blockexplorers.svg",
    gradient:
      "linear(258.76deg, hero-gradient-block-explorers-a 3.96%, hero-gradient-block-explorers-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  bridges: {
    img: "/assets/ecosystem/bridges.svg",
    gradient:
      "linear(258.76deg, hero-gradient-bridges-on-ramps-a 3.96%, hero-gradient-bridges-on-ramps-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  wallets: {
    img: "/assets/ecosystem/wallets.svg",
    gradient:
      "linear(258.76deg, hero-gradient-wallets-a 3.96%, hero-gradient-wallets-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  learn: {
    img: "/assets/ecosystem/learn.svg",
    gradient:
      "linear(258.76deg, hero-gradient-learn-a 3.96%, hero-gradient-learn-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  build: {
    img: "/assets/ecosystem/developer.svg",
    gradient:
      "linear(258.76deg, hero-gradient-developer-a 3.96%, hero-gradient-developer-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  community: {
    img: "/assets/ecosystem/community.svg",
    gradient:
      "linear(258.76deg, hero-gradient-community-a 3.96%, hero-gradient-community-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  nodes_and_services: {
    img: "/assets/ecosystem/nodes_and_services.svg",
    gradient:
      "linear-gradient(258.76deg, hero-gradient-nodes-and-services-a 3.96%, hero-gradient-nodes-and-services-b 254.34%)",
    arrowGradient: "linear(95.36deg, #EC796B 1.31%, #D672EF 169.4%)",
    arrowOpacity: "0.2",
    arrowTipColor: "#D672EF"
  },
  roadmap: {
    img: "/assets/ecosystem/roadmap.svg",
    bg: "roadmap-hero-gradient",
    arrowGradient: "linear(45deg, #82BDBD 100%, #4F6D87 100%)",
    backgroundBlendMode: "multiply, multiply, multiply, normal",
    arrowOpacity: "1",
    arrowTipColor: "#82BDBD"
  },
  security: {
    img: "/assets/ecosystem/security.svg",
    gradient:
      "linear(262.88deg, hero-gradient-security-a 21.62%, hero-gradient-security-b 100.38%)",
    arrowGradient: "linear(250.04deg, #5B5F68 57.45%, #81D2FF 119.39%)",
    arrowTipColor: "#5B5F68"
  }
};

export const HeroImage = ({
  title = "dApps",
  description = "Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs'  of transactions.",
  variant = "dapps",
  buttonText,
  buttonUrl,
  onButtonClick,
  leftBoxMaxWidth,
}: Props) => {
  return (
    <Box
      as="section"
      bg={variant === "roadmap" ? heroStyles[variant].bg : "none"}
      backgroundBlendMode={heroStyles[variant].backgroundBlendMode ? heroStyles[variant].backgroundBlendMode : ""}
      borderRadius="32px"
      {...variant !== "roadmap" && { bgGradient: heroStyles[variant].gradient}}
      position="relative"
      zIndex={0}
      overflow="hidden"
      paddingLeft={{ base: "0", md: "20" }}
    >
      <Box
        position="absolute"
        height="100%"
        width="100%"
        zIndex={1}
        opacity={0.5}
        mixBlendMode="soft-light"
        marginLeft="-80px"
      >
        <Img
          src="/lines.svg"
          alt="lines"
          objectFit="cover"
          w="100%"
          height="100%"
        />
      </Box>

      <Box zIndex={2} position="relative" height={{ lg: "420px" }}>
        <Container
          pr={{ base: "0", sm: "64px" }}
          py={{ base: "64px", lg: "0" }}
          px={{ base: "1rem", lg: "0" }}
          height="full"
          maxW="none"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "center" }}
            height="full"
          >
            <Stack order={{ base: 1, lg: 0 }}>
              <Stack spacing="4">
                <Stack
                  // bg="red"
                  // spacing={{ base: "4", md: "3" }}
                  maxW={leftBoxMaxWidth ?? { md: "xl", lg: "2xl", xl: "2xl" }}
                >
                  <Box>
                    <svg
                      width="80"
                      height="81"
                      viewBox="0 0 80 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M-5.10774e-06 40.757C-5.10774e-06 62.8485 17.9082 80.7567 39.9997 80.7567C62.0911 80.7567 80.0006 62.8485 80.0006 40.757C80.0006 18.6656 62.0911 0.757324 39.9997 0.757324C17.9082 0.757324 -5.10774e-06 18.6656 -5.10774e-06 40.757Z"
                        fill="#0C0C4F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.3567 31.3335L23.3441 28.283C23.5448 27.6625 24.0345 27.1797 24.6573 26.9893L27.7227 26.0467C28.1471 25.9171 28.1505 25.3184 27.7296 25.1819L24.6779 24.1945C24.0586 23.9938 23.5758 23.5041 23.3843 22.8814L22.4427 19.8159C22.3131 19.3927 21.7145 19.3882 21.578 19.8102L20.5906 22.8608C20.3899 23.48 19.9002 23.9629 19.2775 24.1544L16.212 25.0959C15.7877 25.2267 15.7831 25.8242 16.2051 25.9606L19.2568 26.9481C19.8761 27.1488 20.3589 27.6396 20.5505 28.2623L21.492 31.3267C21.6216 31.751 22.2203 31.7556 22.3567 31.3335Z"
                        fill="#FAFAFA"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M70.8098 29.5581C69.546 28.1449 67.5735 27.3492 65.6561 27.0229C63.7232 26.7095 61.6968 26.7386 59.7886 27.0776C55.9279 27.7307 52.4205 29.3293 49.3614 31.3014C47.7728 32.2692 46.4181 33.3892 45.0145 34.5297C44.3382 35.1066 43.7217 35.7208 43.0795 36.3263L41.325 38.072C39.4185 40.0648 37.5394 41.8799 35.7213 43.3844C33.8958 44.8819 32.1891 46.0193 30.5071 46.8135C28.8263 47.6119 27.0277 48.0814 24.6835 48.1566C22.3598 48.2386 19.6106 47.8192 16.6699 47.127C13.7134 46.4378 10.6088 45.4555 7.13949 44.6102C8.35002 47.9685 10.1729 50.9363 12.5133 53.6492C14.8812 56.315 17.838 58.7447 21.6363 60.3426C25.3797 61.976 30.0841 62.5622 34.4828 61.6777C38.8931 60.8288 42.7635 58.788 45.8919 56.4278C49.0284 54.0433 51.5659 51.3272 53.7051 48.5035C54.2957 47.7234 54.6081 47.2867 55.0353 46.6769L56.2164 44.9273C57.0374 43.8451 57.7845 42.6129 58.5971 41.5406C60.19 39.2949 61.7603 37.0518 63.5854 34.9853C64.5039 33.9371 65.4721 32.9345 66.6157 31.971C67.186 31.5007 67.8022 31.0405 68.4846 30.6259C69.1773 30.1787 69.9089 29.8287 70.8098 29.5581Z"
                        fill="url(#paint0_linear_1_682)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M70.8098 29.5579C69.452 26.1321 66.9281 23.2483 63.5404 21.1203C60.1733 19.0157 55.4965 17.9417 50.8623 18.8573C48.5729 19.3 46.3548 20.1525 44.4084 21.2877C42.4707 22.4184 40.7344 23.7795 39.2313 25.2397C38.4809 25.9723 37.7997 26.7364 37.1231 27.5049L35.3693 29.741L32.6604 33.3404C29.2071 37.9715 25.4883 43.3989 19.3856 45.0071C13.3945 46.5859 10.796 45.1877 7.1395 44.6101C7.80808 46.3362 8.63627 48.0125 9.75902 49.4872C10.8609 50.9918 12.1623 52.405 13.7803 53.6163C14.598 54.1981 15.4613 54.7723 16.4201 55.2593C17.3746 55.7297 18.4039 56.1439 19.5025 56.4556C21.6878 57.0546 24.1482 57.2644 26.5303 56.9423C28.9136 56.6243 31.1916 55.869 33.1828 54.8659C35.1887 53.8722 36.936 52.6621 38.4963 51.3851C41.5978 48.8094 44.0103 45.9635 46.0481 43.0868C47.0732 41.6484 48.0036 40.183 48.8641 38.7172L49.8769 36.9721C50.1865 36.4619 50.4997 35.9487 50.8178 35.4707C52.1011 33.5502 53.3562 32.0102 54.8809 30.8544C56.3844 29.6687 58.4777 28.7926 61.2754 28.5891C64.0613 28.3831 67.2775 28.7636 70.8098 29.5579Z"
                        fill="#FAFAFA"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.7377 58.0222C55.7377 60.5383 57.7785 62.5792 60.2947 62.5792C62.8109 62.5792 64.8492 60.5383 64.8492 58.0222C64.8492 55.506 62.8109 53.4652 60.2947 53.4652C57.7785 53.4652 55.7377 55.506 55.7377 58.0222Z"
                        fill="#EC796B"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_682"
                          x1="70.4691"
                          y1="28.356"
                          x2="-33.5835"
                          y2="82.4926"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC796B" />
                          <stop offset="1" stopColor="#D672EF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <Box
                      mixBlendMode="multiply"
                      opacity={heroStyles[variant].arrowOpacity}
                      mt={4}
                      bgGradient={heroStyles[variant].arrowGradient}
                      bgClip="div"
                      height="1px"
                      position="relative"
                      _after={{
                        position: "absolute",
                        content: `""`,
                        bottom: "-1.5px",
                        right: 0,
                        width: 0,
                        height: 0,
                        borderTop: "2px solid transparent",
                        borderBottom: "2px solid transparent",
                        borderLeft: `5px solid ${heroStyles[variant].arrowTipColor}`
                      }}
                    />
                  </Box>

                  <Heading
                    as="h1"
                    color="heading-navy-fg"
                    variant="h2"
                    size={useBreakpointValue({ base: "md", md: "lg" })}
                  >
                    {title}
                  </Heading>
                  <Text
                    fontSize={{ base: "lg", md: "lg" }}
                    color="text-hero-fg"
                    variant="body"
                  >
                    {description}
                  </Text>
                  {!!buttonText && (
                    <Box
                      pt="4"
                    >
                      <Button
                        variant="solid"
                        style={{ alignSelf: "flex-start" }}
                        href={buttonUrl}
                        onClick={onButtonClick}
                      >
                        {buttonText}
                      </Button>
                    </Box>
                  )}
                </Stack>
              </Stack>
              {/* <Stack direction={{ base: "column", md: "row" }} spacing="3">
                <Button
                  variant="outline"
                  size={useBreakpointValue({ base: "lg", md: "xl" })}
                >
                  {urlTitle}
                </Button>
              </Stack> */}
            </Stack>
            <Spacer display={{ base: "none", lg: "block" }} />
            <Box
              order={{ base: 0, lg: 2 }}
              w={{ base: "full", lg: "25%" }}
              height={{ base: "350px", lg: "250px" }}
            >
              <Image
                boxSize={{ base: "300px", lg: "250px" }}
                maxW="90%"
                // objectFit="contain"
                src={heroStyles[variant].img}
                alt="starknet"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
