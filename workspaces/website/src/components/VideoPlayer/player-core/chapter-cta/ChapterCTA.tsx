import { Button } from "@ui/Button";
import { HiArrowRight } from "react-icons/hi2";

type ChapterCTAProps = {
  label: string;
  link: string;
  fontSize: string;
};

export const ChapterCTA = ({ label, link, fontSize }: ChapterCTAProps) => {
  return (
    <Button
      style={{
        //@ts-ignore
        "--chapter-fontSize": fontSize,
      }}
      as="a"
      variant="education"
      size="auto"
      fontSize={{
        base: "clamp(6px, var(--chapter-fontSize), 14px)",
        sm: "clamp(8px, var(--chapter-fontSize), 14px)",
        md: "clamp(11px, var(--chapter-fontSize), 14px)",
      }}
      href={link}
      target="_blank"
      isExternal
      justifyContent="space-between"
    >
      {label}
      <HiArrowRight />
    </Button>
  );
};
