import { useColorModeValue } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export const useNavbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const boxShadow = useColorModeValue("sm", "sm-dark");

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 16));
  }, [scrollY]);

  return {
    rootProps: {
      shadow: isScrolled ? boxShadow : "none",
      transition: "box-shadow 0.2s",
    },
  };
};
