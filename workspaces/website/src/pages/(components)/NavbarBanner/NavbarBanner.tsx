import { Center, Text, Button, IconButton } from "@chakra-ui/react";
import CloseIcon from "@ui/ProvisionsPopup/CloseIcon/CloseIcon";
import { useState } from "react";
const text =
  "Starknet is the secure scaling technology bringing Ethereum’s benefits to the world.";

interface NavbarBannerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavbarBanner = ({ setIsOpen }: NavbarBannerProps) => {
  return (
    <Center
      height={12}
      bgColor={"snNavy"}
      display="flex"
      gap={6}
      zIndex={10}
      _dark={{ bgColor: "#A4A4EA" }}
    >
      <Center margin="auto" gap={6}>
        <Text color="white" _dark={{ color: "snNavy" }}>
          {text}
        </Text>
        <Button
          px={4}
          py={1}
          borderRadius={8}
          bgColor="white"
          color="snNavy"
          _dark={{
            color: "white",
            bgColor: "darkMode.card",
            borderColor: "darkMode.card",
          }}
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
