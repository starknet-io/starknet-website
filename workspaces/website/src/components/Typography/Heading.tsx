import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import { headingTheme } from "./HeadingStyles";

type CustomHeadingProps = {
  variant: "h1hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  withMarginBottom?: boolean;
} & HeadingProps;

const renderMb = (variant: string, withMb: boolean) => {
  if (!withMb) return undefined;

  switch (variant) {
    case "h1hero":
      return "3xl";

    case "h1":
      return {
        base: "xl",
        lg: "3xl",
      };

    default:
      return "xl";
  }
};

export const Heading: React.FC<CustomHeadingProps> = ({
  variant,
  as,
  withMarginBottom = false,
  ...props
}) => {
  const { ...rest } = props;
  const Tag = variant || "h2";
  return (
    <ChakraHeading
      {...headingTheme[Tag as keyof typeof headingTheme]}
      as={as ? as : variant === "h1hero" ? "h1" : (variant as typeof as)}
      mb={renderMb(variant, withMarginBottom)}
      {...rest}
    />
  );
};
