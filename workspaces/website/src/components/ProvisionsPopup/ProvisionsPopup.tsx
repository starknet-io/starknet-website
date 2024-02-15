import { Box, Image, Icon, Fade, IconButton } from "@chakra-ui/react";
import Background from "./popup-background.png";
import Logo from "./popup-text.svg";
import { useState } from "react";
import CloseIcon from "./CloseIcon/CloseIcon";
import ArrowRight from "./ArrowRight/ArrowRight";
import { Button } from "@ui/Button";

const ProvisionsPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleModal = () => setIsOpen((prevState) => !prevState);

  const gtmEvent = (event: string) => window?.dataLayer.push({ event });
  const gtmEventClickReadMore = () => gtmEvent("Provisions popup click");
  const gtmEventClickClose = () => gtmEvent("Provisions popup close");

  return (
    <Fade
      in={isOpen}
      style={{ zIndex: "9999" }}
      transition={{ enter: { duration: 0.5 } }}
    >
      <Box
        pos="fixed"
        top="85px"
        left="5px"
        w={["calc(100% - 5px * 2)", "calc(100% - 5px * 2)", 336, 336]}
        h={["calc(100% - 100px)", "calc(100% - 100px)", 358, 358]}
        borderRadius="8px"
        bgGradient="linear(to-l, #0C0C4F, #3F8CFF)"
        cursor="pointer"
        display={!isOpen ? "none" : "block"}
      >
        <Box
          mt="2px"
          ml="2px"
          bgColor="white"
          w={["calc(100% - 2px * 2)", "calc(100% - 2px * 2)", 332, 332]}
          h={["calc(100% - 2px * 2 )", "calc(100% - 2px * 2 )", 354, 354]}
          borderRadius="8px"
        >
          <IconButton
            aria-label="Close"
            bgColor="transparent"
            border="0"
            position="absolute"
            right="10px"
            top="10px"
            width="28px"
            height="28px"
            onClick={() => {
              gtmEventClickClose();
              toggleModal();
            }}
          >
            <CloseIcon />
          </IconButton>
          <Image
            src={Background}
            alt=""
            width="100%"
            height="100%"
            borderRadius="6px"
            objectFit="cover"
          />
          <Image
            src={Logo}
            alt="STRK Starknet Provisions"
            position="absolute"
            bottom={{ base: "50%", md: "171px" }}
            left="50%"
            transform={{
              base: "translate(-50%, -50%)",
              md: "translateX(-50%)",
            }}
            borderRadius="6px"
          />
          <Button
            variant="solid"
            bgColor="white"
            position="absolute"
            bottom="40px"
            left="50%"
            transform="translateX(-50%)"
            borderRadius="8px"
            mr="px"
            width="288px"
            height="48px"
            color="black"
            cursor="pointer"
            href="https://www.starknet.io/en/content/starknet-provisions-program"
            _hover={{ color: "#8FBCFF"}}
            onClick={gtmEventClickReadMore}
          >
            Read more
            <Icon
              mt="1px"
              ml="4px"
              _hover={{
                color: "#8FBCFF",
              }}
            >
              <ArrowRight />
            </Icon>
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default ProvisionsPopup;
