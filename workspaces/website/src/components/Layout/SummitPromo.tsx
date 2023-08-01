import { Box, Flex, Icon, SlideFade } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { Heading } from "@ui/Typography/Heading";
import {
  IoCloseOutline
} from "react-icons/io5";

export const SummitPromo = () => {
  const [isSummitPopupOpen, setIsSummitPopupOpen] = useLocalStorage('isSummitPopupOpen', true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(!!isSummitPopupOpen);
  }, [isSummitPopupOpen]);

  const closePopup = () => {
    setIsSummitPopupOpen(false);
  }

  return (
    <SlideFade
    in={isPopupOpen}
    offsetX='50px'
    style={{
        position: "fixed",
        right:"16px",
        bottom:"16px",
        width:"336px",
        height:"358px",
        zIndex: 999,
        pointerEvents: isPopupOpen ? "auto" : "none",
    }}>
    <Box
        sx={{ 
        zIndex: 99,
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
                "&:hover": {
                    bg: "selected.100",
                    borderColor: "selected.100",
                    color: "#0C0C4F !important",
                },
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
  );
};
