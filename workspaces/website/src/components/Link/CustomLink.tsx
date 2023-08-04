import { forwardRef } from "react";
import { Link, LinkProps } from "@chakra-ui/react";
import { customLinkTheme } from "./CustomLinkStyles.ts";
type Props = LinkProps & { size?: string };

export const CustomLink = forwardRef<HTMLButtonElement, Props>(
  ({ children, href, variant, size = "md", ...rest }, ref) => {
    return (
        <Link href={href} variant={variant} ref={ref} {...customLinkTheme} size={size} {...rest}>
          {children}
        </Link>
    );
  }
);
