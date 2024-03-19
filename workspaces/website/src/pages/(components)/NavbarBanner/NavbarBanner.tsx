import { Center, Text, Button, IconButton } from "@chakra-ui/react";
import CloseIcon from "@ui/ProvisionsPopup/CloseIcon/CloseIcon";
const text =
  "Starknet is the secure scaling technology bringing Ethereum’s benefits to the world.";

interface NavbarBannerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavbarBanner = ({ setIsOpen }: NavbarBannerProps) => {
  return (
    <Center
      height={{ base: "87px", sm: 12 }}
      width="100%"
      px={{ base: 2, xl: "unset" }}
      bgColor={"snNavy"}
      display="flex"
      gap={{ xs: 3, base: 6 }}
      zIndex={10}
      _dark={{ bgColor: "#A4A4EA" }}
    >
      <Center margin="auto" gap={{ xs: 1, sm: 6 }} height="100%">
        <Text
          color="white"
          _dark={{ color: "snNavy" }}
          width={{ base: "245px", sm: "unset" }}
        >
          {text}
        </Text>
        <Button
          px={4}
          py={1}
          borderRadius={8}
          bgColor="white"
          color="snNavy"
          fontWeight={600}
          lineHeight="21px"
          fontSize={{ base: 12, sm: 14 }}
          _dark={{
            color: "white",
            bgColor: "darkMode.card",
            borderColor: "darkMode.card",
          }}
          _hover={{ bgColor: "white" }}
        >
          See more
        </Button>
      </Center>
      <IconButton
        aria-label="Close"
        _dark={{
          color: "snNavy",
          bgColor: "transparent",
          borderColor: "transparent",
          _hover: { bgColor: "transparent" },
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CloseIcon />
      </IconButton>
    </Center>
  );
};

export default NavbarBanner;
