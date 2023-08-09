import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  LargeCardLayout,
  LargeCardHorizontalLayout,
  IconLinkCardLayout,
  IconLinkCardBodyLayout,
  IconLinkCardLinkLayout,
  GridCardLayout,
  GridCardImgLayout,
  GridCardBodyLayout,
  AssetCardLayout,
  AssetCardTitleLayout,
  AssetCardHorizontalLayout,
  AssetCardImgLayout,
  AssetCardImgHorizontalLayout,
  AssetCardBodyLayout
} from "./CardStyles";
import { Heading } from "@ui/Typography/Heading";
import { CustomLink } from "@ui/Link";

type BodyProps = {
  variant?: "grid" | "asset" | "large" | "iconLink";
  children: ReactNode;
};

type TitleProps = {
  variant?: "grid" | "asset" | "large" | "iconLink";
  children: ReactNode;
};

type LinkProps = {
  variant?: "grid" | "asset" | "large" | "iconLink";
  children: ReactNode;
  href: string;
};

type ImgProps = {
  variant?: "grid" | "asset" | "large" | "iconLink";
  src: string;
  orientation?: string;
}

type Props = {
  variant?: "grid" | "asset" | "large" | "iconLink";
  orientation?: "horizontal" | "vertical";
} & BoxProps;

const bodyStyles = {
  display: "flex",
  minWidth: "164px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  flex: "1 0 0"
}

const linkStyles = {
  display: "flex",
}

const imgStyles = {
  display: "flex",
}

const titleStyles = {
  display: "flex",
}

export const CardBody = ({ variant, children }: BodyProps) => {
  let styles = {
    ...variant === "iconLink" ? IconLinkCardBodyLayout : variant === "grid" ? GridCardBodyLayout : variant === "asset" ? AssetCardBodyLayout : bodyStyles
  }
  return (
    <Flex sx={styles}>
      {children}
    </Flex>
  );
};

export const CardLink = ({ variant, href, children }: LinkProps) => {
  let styles = {
    ...(variant === "iconLink" || variant === "grid") ? IconLinkCardLinkLayout : linkStyles
  }
  return (
    <CustomLink size="md" href={href} sx={styles}>
      {children}
    </CustomLink>
  );
};

export const CardImg = ({ variant, orientation, src }: ImgProps) => {
  let styles = {
    ...variant === "grid" ? GridCardImgLayout : variant === "asset" ? (orientation === "horizontal" ? AssetCardImgHorizontalLayout : AssetCardImgLayout) : imgStyles
  }
  return (
    <img style={styles} src={src}/>
  );
};

export const CardTitle = ({ variant, children }: TitleProps) => {
  let styles = {
    ...(variant === "grid" || variant === "asset") ? AssetCardTitleLayout : titleStyles
  }
  return (
    <Heading sx={styles} variant="h3" color="btn-primary-bg">
      {children}
    </Heading>
  );
};

export const Card = (props: Props) => {
  const { variant, orientation = "vertical", ...rest } = props;
  const bgColor = variant === "asset" ? "white" : "#FBFBFB"
  let styles = {
    borderRadius: "16px",
    border: "1px solid #ECECF9",
    borderImage: "none",
    bg: "linear-gradient(white, white) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box",
    "&:hover": {
      borderImage: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
      bg: `linear-gradient(${bgColor}, ${bgColor}) padding-box, linear-gradient(to right, #EC796B, #D672EF) border-box`,
    }
  }
  switch(variant) {
    case 'grid':
      styles = {
        ...styles,
        ...GridCardLayout
      }
      break;
    case 'asset':
      styles = {
        ...styles,
        ...orientation === "horizontal" ? AssetCardHorizontalLayout : AssetCardLayout
      }
      break;
    case 'large':
      styles = {
        ...styles,
        ...orientation === "horizontal" ? LargeCardHorizontalLayout : LargeCardLayout
      }
      break;
    case 'iconLink':
      styles = {
        ...styles,
        ...IconLinkCardLayout
      }
      break;
    default:
      break;
  }
  return (
    <Box
      sx={styles} {...rest}
    />
  )
};
