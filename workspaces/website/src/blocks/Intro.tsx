import { Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useScramble } from "use-scramble";

const texts = [
  "ברוכים הבאים ל",
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
      variant="h2"
      mt="8"
      fontWeight="bold"
      height={{ base: "1.2em" }}
      fontSize={{ base: "39px", md: "55px", xl: "80px" }}
      fontFamily="InterVariable, Tajawal, Noto Sans Hebrew, Noto Sans JP, Noto Sans TC, Noto Sans SC"
      color="heading-navy-fg"
    />
  );
};
