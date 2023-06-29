import { Link, LinkOverlay, LinkProps } from "@chakra-ui/react";

type Props = LinkProps & { size?: string };

export const CustomLink = (props: Props) => {

  return (
      <Link as={LinkOverlay} variant={props.variant} href={props.href}>
        {props.children}
      </Link>
  );
};
