import { Box, Image, Icon, Fade, IconButton } from "@chakra-ui/react";
import Background from "./popup-background.png";
import Logo from "./popup-text.svg";
import CloseIcon from "./CloseIcon/CloseIcon";
import ArrowRight from "./ArrowRight/ArrowRight";
import { Button } from "@ui/Button";
import { useLocalStorage } from "usehooks-ts";

const ProvisionsPopup = () => {
  const isSsr = typeof window === "undefined";

  const [isOpenStorage, setIsOpenStorage] = useLocalStorage(
    "isProvisionsPopupOpen",
    !isSsr
  );
  const pageView = (target: string) =>
    window.gtag("event", target, {
      event_category: "engagement",
    });

  const gtmEvent = (event: string) => window?.dataLayer.push({ event });
  const gtmEventClickReadMore = () => gtmEvent("Provisions_popup_click");
  const gtmEventClickClose = () => gtmEvent("Provisions_popup_close");

  const onClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    gtmEventClickClose();
    pageView("Provisions_popup_close");
    setIsOpenStorage(false);
  };

  const onReadMore = (event: React.MouseEvent) => {
    event.stopPropagation();
    gtmEventClickReadMore();
    pageView("Provisions_popup_click");
    setIsOpenStorage(false);
  };

  if (!isOpenStorage) return;

  return (
    <Fade
      in={isOpenStorage}
      style={{ zIndex: "9999" }}
      transition={{ enter: { duration: 0.5 } }}
    >
      <Box
        position="fixed"
        top="0"
        bottom="0"
        right="0"
        left="0"
        display={isOpenStorage ? "unset" : "none"}
        backgroundColor="rgba(0,0,0,0.7)"
        onClick={onClose}
      />
      <Box
        pos="fixed"
        left="50%"
        top="50%"
        transform="translate(-50% ,-50%)"
        w={[336]}
        h={[358]}
        borderRadius="8px"
        bgGradient="linear(to-l, #0C0C4F, #3F8CFF)"
        display={!isOpenStorage ? "none" : "block"}
      >
        <Box
          mt="2px"
          ml="2px"
          bgColor="white"
          w={[332]}
          h={[354]}
          borderRadius="8px"
        >
          <IconButton
            aria-label="Close"
            border="0"
            position="absolute"
            right="10px"
            top="10px"
            width="28px"
            height="28px"
            style={{ backgroundColor: "transparent" }}
            onClick={onClose}
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
            top="91px"
            left="50%"
            transform="translateX(-50%)"
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
            width="176px"
            height="48px"
            color="black"
            cursor="pointer"
            href="https://www.starknet.io/en/content/starknet-provisions-program"
            _hover={{ color: "#8FBCFF" }}
            onClick={onReadMore}
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
