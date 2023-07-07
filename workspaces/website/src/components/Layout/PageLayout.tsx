import { Box, Container, Flex, Spacer, Stack, Icon, SlideFade } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import { Text } from "@ui/Typography/Text";
import { Heading } from "@ui/Typography/Heading";
import React from "react";
import {
  IoCloseOutline
} from "react-icons/io5";

type Props = {
  leftAside?: React.ReactNode;
  main?: React.ReactNode;
  rightAside?: React.ReactNode | null;
  rightAsideSticky?: boolean;
  pageHeader?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  pageLastUpdated?: string | null;
  sectionHeaderTitle?: string | undefined;
  sectionHeaderDescription?: string | undefined;
  sectionHeaderBottomContent?: React.ReactNode;
  maxW?: string;
};

export const PageLayout = (props: Props) => {
  const [isSummitPopupOpen, setIsSummitPopupOpen] = useLocalStorage('isSummitPopupOpen', true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(!!isSummitPopupOpen);
  }, [isSummitPopupOpen]);

  const closePopup = () => {
    setIsSummitPopupOpen(false);
  }

  return (
    <Container py="0" pb="16" flex="1" maxW={props.maxW ? props.maxW : "1344px"}>
      <Flex py="4" direction={{ base: "column", lg: "row" }}>
        <Box>{props.breadcrumbs}</Box>
        <Spacer />
        <Box>
          <Text variant="cardBody" top="1px" pos="relative">
            {props.pageLastUpdated}
          </Text>
        </Box>
      </Flex>
      {/* page layout */}
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", lg: "100px" }}
        flex="1"
        pt={{ base: 2, lg: 10 }}
        // bg="yellow"
      >
        {props.leftAside && (
          <Box
            as="aside"
            order={{ base: "2", lg: "0" }}
            role="complementary"
            width={{ base: "full", md: "213px" }}
            alignSelf="start"
            // position={{ base: "unset", lg: "sticky" }}
            top="36"
          >
            {props.leftAside}
          </Box>
        )}

        <Box
          as="main"
          role="main"
          width="full"
          mt="0 !important"
        >
          <Box minH="lg">
            {props.sectionHeaderTitle && (
              <SectionHeader
                title={props.sectionHeaderTitle}
                description={props.sectionHeaderDescription}
                bottomContent={props.sectionHeaderBottomContent}
              />
            )}
            {props.main}
          </Box>
        </Box>
        {props.rightAside && (
          <Box
            display={{ base: "none", lg: "block" }}
            order={{ base: "3", lg: "1" }}
            as="aside"
            role="complementary"
            width={{ base: "full", lg: "lg" }}
            alignSelf="start"
            position={{ base: "unset", lg: "sticky" }}
            top="36"
          >
            {props.rightAside}
          </Box>
        )}
      </Stack>
      <SlideFade
        in={isPopupOpen}
        offsetX='50px'
        style={{
          position: "fixed",
          right:"16px",
          bottom:"32px",
          width:"336px",
          height:"358px"
        }}>
        <Box
          sx={{ 
            background: "linear-gradient(to top, #0C0C4F, #5C94FF)",
            "&:hover": {
              background: "linear-gradient(to right, #5C94FF, #C507E4)"
            }
          }}
          borderRadius="8"
          display="flex"
          flexDirection="column"
          boxShadow="0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Box
            width="332px"
            height="354px"
            m="2px"
            borderRadius="8px"
            overflow="hidden"
          >
            <Box
              sx={{
                background: "linear-gradient(170deg, #0C0C4F 4.53%, #0C0C4F 45.92%, #6170B5E6 80.48%, #A47DAAE6 93.63%, #F99B84CC 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "/assets/SNSummitTower.svg",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "332px",
                  backgroundPosition: "0 70px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "220px",
                  pt: "51px"
                }}
              >
                <Icon as={IoCloseOutline}
                  width="28px"
                  height="28px"
                  position='absolute'
                  right="18px"
                  top="18px"
                  cursor="pointer"
                  color="white"
                  onClick={closePopup}
                />
                <img
                  src="/assets/SummitLogo.svg"
                  alt="Summit"
                />
              </Box>
            </Box>
            <Box
              background="#0C0C4F"
              flex="1"
              p="24px"
              width="332px"
              borderBottomLeftRadius="8px"
              borderBottomRightRadius="8px"
            >
              <Flex
                direction="row"
                justifyContent="space-between"
                pb="16px"
              >
                <Heading
                  variant="h4"
                  fontWeight="400"
                  color="white"
                >
                  San Francisco
                </Heading>
                <Heading
                  variant="h4"
                  fontWeight="400"
                  color="summit-popup-date-heading-color"
                  sx={{
                    background: "-webkit-linear-gradient(45deg, #EC796B, #D672EF 80%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    paddingLeft: "24px",
                    borderLeft: "1px solid #EC796B",
                    marginLeft: "20px"
                  }}
                >
                  Aug 31st 2023
                </Heading>
              </Flex>
              <Button
                variant="outline"
                sx={{
                  background: "white",
                  width: "100%",
                  color: "#0C0C4F",
                  _dark: {
                    color: "#0C0C4F"
                  }
                }}
                href="https://summit23.starknet.io/"
                target="_blank"
              >
                Get Tickets
              </Button>
            </Box>
          </Box>
        </Box>
      </SlideFade>
    </Container>
  );
};

{
  /* <Box minH="xs">Sidebar</Box>; */
}
