import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "src/libs/chakra-ui";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const superLg = defineStyle({
  width: "80px",
  height: "80px",
  fontSize: "2xl",
});

const sizes = {
  superLg: definePartsStyle({ container: superLg }),
};

export const avatarTheme = defineMultiStyleConfig({ sizes });
