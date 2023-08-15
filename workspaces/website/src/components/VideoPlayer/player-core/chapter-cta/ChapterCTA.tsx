import { Button } from "@ui/Button";
import { HiArrowRight } from "react-icons/hi2";

type ChapterCTAProps = {
  label: string;
  link: string;
  borderRadius: string;
  fontSize: string;
  paddingY: string;
  paddingX: string;
};

export const ChapterCTA = ({
  label,
  link,
  borderRadius,
  fontSize,
  paddingY,
  paddingX,
}: ChapterCTAProps) => {
  return (
    <Button
      as="a"
      variant="solid"
      borderRadius={borderRadius}
      fontSize={fontSize}
      href={link}
      lineHeight={1}
      target="_blank"
      isExternal
      padding={0}
      paddingY={paddingY}
      paddingInline={paddingX}
      rightIcon={<HiArrowRight />}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      minW="auto"
    >
      {label}
    </Button>
  );
};
