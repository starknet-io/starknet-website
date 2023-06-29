import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const superLg = defineStyle({
  width: "80px",
  height: "80px",
  fontSize: "2xl",
});
const event = definePartsStyle({
  container: {
    borderRadius: "8px!important",
    overflow: "hidden",
    image: {
      borderRadius: "0px!important",
    },
  },
});

const sizes = {
  superLg: definePartsStyle({ container: superLg }),
};

export const avatarTheme = defineMultiStyleConfig({
  variants: { event },
  sizes,
});
