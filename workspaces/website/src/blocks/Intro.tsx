import { Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useScramble } from "use-scramble";

const texts = [
  "scalability",
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
      variant="h1hero"
      as="span"
      mt="8"
      height={{ base: "1.4em" }}
      sx={{
        background: "linear-gradient(271deg, #FFFDD8 0%, #EC796B 15.56%, #D672EF 43.09%, #8BF3F9 74.52%)",
        "background-clip": "text",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        lineHeight: "98.5px",
        fontWeight: 600
      }}
    />
  );
};
