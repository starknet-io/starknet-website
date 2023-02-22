import { Heading } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useScramble } from "use-scramble";

const texts = [
  "Welcome to",
  "へようこそ",
  "Bienvenue à",
  "ברוכים הבאים ל",
  "مرحبا بك في",
  "欢迎来到",
  "歡迎來到",
  "Grüezi tso",
  "Bienvenida a",
  "Servus zu",
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
      fontWeight="bold"
      lineHeight={{ base: "1.2em" }}
      height={{ base: "1.2em" }}
      overflow="hidden"
      fontSize={{ base: "48px", md: "70px", lg: "80px", xl: "80px" }}
      fontFamily="InterVariable, Tajawal, Noto Sans Hebrew, Noto Sans JP, Noto Sans TC, Noto Sans SC"
      color="heading-navy-fg"
    />
  );
};
