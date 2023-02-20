import { Heading } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useScramble } from "use-scramble";

const texts = [
  "Welcome",
  "ようこそ",
  "Bienvenu",
  "স্বাগত",
  "स्वागत",
  "ברוך הבא ל",
  "欢迎",
  "مرحباً",
  "Bienvenida",
];

export const Intro = () => {
  const [index, setIndex] = useState(0);

  const loopRef = useRef<NodeJS.Timeout>();

  const { ref } = useScramble({
    text: texts[index],
    speed: 0.5,
    onAnimationStart: () => {
      clearTimeout(loopRef.current);
    },
    onAnimationEnd: () => {
      clearTimeout(loopRef.current);
      loopRef.current = setTimeout(() => {
        setIndex((index) => (index < texts.length - 1 ? index + 1 : 0));
      }, 2800);
    },
  });

  return (
    <Heading
      aria-label={texts[index]}
      ref={ref}
      as="h2"
      variant="h2"
      mt="8"
      fontWeight="extrabold"
      lineHeight={{ base: "1.2em" }}
      overflow="hidden"
      fontSize={{ base: "56px", md: "80px", lg: "80px", xl: "92px" }}
      color="heading-navy-fg"
    />
  );
};
