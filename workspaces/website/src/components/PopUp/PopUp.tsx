import { Box, Button, Image, Icon, Link, Fade } from "@chakra-ui/react";
import Background from "./PopUp-background.png";
import Logo from "./PopUp-Text.svg";

type Props = {
  toggleModal: () => void;
  isOpen: boolean;
};

declare global {
  interface Window {
    dataLayer: {
      event: string;
    }[];
  }
}

const PopUp = ({ toggleModal, isOpen }: Props) => {
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
          borderRadius="6px"
        >
          <Icon
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
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_600)">
                <path
                  d="M20.125 20.125L7.875 7.875M20.125 7.875L7.875 20.125"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_600">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Icon>
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
          <Link href="https://www.starknet.io/en/content/starknet-provisions-program">
            <Button
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
              _hover={{
                color: "#8FBCFF",
              }}
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </Button>
          </Link>
        </Box>
      </Box>
    </Fade>
  );
};

export default PopUp;
