import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

interface ChaptersDropdownProps {
  title: string;
  episode: number;
  isVisible: boolean;
}
export default function ChaptersDropdown({
  title,
  episode,
  isVisible,
}: ChaptersDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded((b) => !b);
  return (
    <Box
      sx={{
        pos: "absolute",
        top: "16px",
        left: 0,
        right: 0,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
      }}
    >
      <Button
        textAlign="center"
        variant="unstyled"
        sx={{
          background: "rgba(22, 22, 22, 0.85)",
          border: "1px solid #313131",
          borderRadius: "40px",
          display: "flex",
          padding: "8px 16px",
          marginInline: "auto",
          gap: "12px",
          alignItems: "center",
        }}
        onClick={toggleExpanded}
      >
        <Box
          sx={{
            fontWeight: 500,
            fontSize: "sm",
            color: "white",
            lineHeight: 1,
          }}
        >
          {episode}. {title}
        </Box>
        <Image
          src="/assets/video/expand_more.svg"
          width={20}
          height={20}
          alt="Close"
          style={{
            transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform .3s ease-in-out",
          }}
        />
        {/* {isExpanded ? (
          <Image
            src="/assets/video/close.svg"
            width={20}
            height={12}
            alt="Close"
          />
        ) : (
          <Image
            src="/assets/video/expand_more.svg"
            width={20}
            height={12}
            alt="Expand"
          />
        )} */}
      </Button>
    </Box>
  );
}
