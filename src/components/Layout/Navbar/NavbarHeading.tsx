"use client";
import { Heading } from "@ui/Typography/Heading";

type Props = {
  children: React.ReactNode;
  pt?: string;
  tt?: "uppercase" | "lowercase" | "capitalize" | "none";
};

export const NavbarHeading = ({
  tt = "uppercase",
  children,
  pt = "16px",
}: Props) => {
  return (
    <Heading
      as="h6"
      variant="h6"
      textTransform={tt}
      color="heading-navy-fg"
      pl="16px"
      mb="16px"
      pt={pt}
    >
      {children}
    </Heading>
  );
};
