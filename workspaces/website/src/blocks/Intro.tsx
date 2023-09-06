import { Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useScramble } from "use-scramble";

const texts = ["scaling", "innovation", "security", "UX"];

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
        background:
          "linear-gradient(270deg, #F09280 1.91%, #E87888 38.19%, #D672EF 73.51%, #BCA1F3 95.51%)",
        "background-clip": "text",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        lineHeight: "120%",
        fontWeight: 600,
      }}
    />
  );
};
