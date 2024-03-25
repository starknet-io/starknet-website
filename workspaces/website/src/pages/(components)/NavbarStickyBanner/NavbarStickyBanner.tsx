import { Center, Text, IconButton } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import CloseIcon from "@ui/Icons/CloseIcon/CloseIcon";
import { useEffect, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { sha256 } from "js-sha256";
interface NavbarStickyBannerProps {
  text: string;
  buttonText: string;
  buttonLink: string;
}

const NavbarStickyBanner = ({
  text,
  buttonText,
  buttonLink,
}: NavbarStickyBannerProps) => {
  const [isOpenStorage, setIsOpenStorage] = useLocalStorage(
    "isNavbarStickyBannerOpen",
    { hash: "", isActive: false }
  );

  const hash = useMemo(
    () => sha256(text + buttonLink + buttonText).toString(),
    []
  );

  useEffect(() => {
    if (!isOpenStorage || isOpenStorage.hash.toString() !== hash)
      return setIsOpenStorage({ hash, isActive: true });
  }, [isOpenStorage]);

  const gtmEvent = (target: string) =>
    window.gtag?.("event", target, { event_category: "engagement" });

  const onClose = () => {
    gtmEvent("Navbar_banner_close");
    setIsOpenStorage({ hash, isActive: false });
  };

  const onReadMore = () => gtmEvent("Navbar_banner_read_more");

  return (
    <Center
      px={{ base: 2, xl: "unset" }}
      bgColor="snNavy"
      display={isOpenStorage.isActive ? "flex" : "none"}
      gap={{ xs: 3, base: 6 }}
      py={2}
      zIndex={10}
      _dark={{ bgColor: "surfaceAccent" }}
    >
      {
        <>
          <Center margin="auto" gap={{ xs: 1, sm: 6 }} height="100%">
            <Text
              textAlign={{ base: "left", md: "center" }}
              color="white"
              _dark={{ color: "snNavy" }}
              width={{ base: "245px", sm: "unset" }}
            >
              {text}
            </Text>
            <Button
              onClick={onReadMore}
              href={buttonLink}
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
              variant="solid"
            >
              {buttonText}
            </Button>
          </Center>
          <IconButton
            width="22px"
            height="22px"
            aria-label="Close"
            mx={3}
            _dark={{
              color: "darkMode.card",
              bgColor: "transparent",
              borderColor: "transparent",
              _hover: { bgColor: "transparent" },
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
    </Center>
  );
};

export default NavbarStickyBanner;
