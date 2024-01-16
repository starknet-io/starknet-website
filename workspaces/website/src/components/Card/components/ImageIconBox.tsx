import {
  Box, useBreakpointValue
} from "@chakra-ui/react";
import "../style.css";
import {
  AccountAbstractionIcon,
  DepositAndWithdrawIcon,
  WalletIcon,
  DappsIcon,
  HowSNWorksIcon,
  TutorialsIcon,
  BlockExplorerIcon,
  CommunityIcon,
  DevelopersIcon,
  DocsIcon,
  OnChainComputationIcon,
  OnrampIcon,
  ScalingIcon,
  TrustlessnessIcon,
  BlogIcon,
  CommunityEventsIcon,
  CoursesIcon,
  GithubIcon,
  JobsIcon,
  LocalEnvironmentIcon,
  OnlineCommunitiesIcon,
  ToolsAndResourcesIcon,
  ImageIcon
} from "@ui/Icons/CardIcons";
import { CardIconProps } from "@ui/Icons/CardIcons/IconInterface";

const colors = {
  purple: {
    gradient:
      "linear(181.06deg, gradient-purple-a 1.25%, gradient-purple-b 150.79%)",
      iconGradientColor1: "#865DB6",
      iconGradientColor2: "#E2A3FA"
  },
  peach: {
    gradient:
      "linear(181.06deg, gradient-peach-a 1.25%, gradient-peach-b 150.79%)",
      iconGradientColor1: "#B57753",
      iconGradientColor2: "#F9ABAE"
  },
  blue: {
    gradient:
      "linear(180.15deg, gradient-blue-a 0.2%, gradient-blue-b 105.43%)",
      iconGradientColor1: "#82BDBD",
      iconGradientColor2: "#4F6D87"
  },
  "blue-default": {
    gradient:
      "linear(180.15deg, gradient-blue-default-a 0.2%, gradient-blue-default-b 105.43%)",
      iconGradientColor1: "#E1B0A8",
      iconGradientColor2: "#D3A2E7"
  },
  cyan: {
    gradient:
      "linear(181.06deg, gradient-cyan-a 1.25%, gradient-cyan-b 150.79%)",
      iconGradientColor1: "#A4CAB8",
      iconGradientColor2: "#466A6F"
  },
  orange: {
    gradient:
      "linear(180.75deg, gradient-orange-a 0.96%, gradient-orange-b 106.43%)",
      iconGradientColor1: "#EDC39C",
      iconGradientColor2: "#7E5D4A"
  },
  pink: {
    gradient:
      "linear(181.06deg, gradient-pink-a 1.25%, gradient-pink-b 150.79%)",
      iconGradientColor1: "#B05D52",
      iconGradientColor2: "#F4C9FF"
  },
  grey: {
    gradient: "linear-gradient(12.57deg, #F7EEF6 -31.18%, #E9EEF1 102.25%)",
      iconGradientColor1: "#865DB6",
      iconGradientColor2: "#E2A3FA"
  }
};

type Props = {
  icon?: any,
  variant: string,
  color?:
    | "blue-default"
    | "orange"
    | "blue"
    | "purple"
    | "peach"
    | "cyan"
    | "pink"
    | "grey",
  size?: "large" | "small",
  withIllustration?: boolean,
  title?: string
};

export const ImageIconBox = ({
  icon,
  color = "orange",
  size = "large",
  withIllustration = false,
  variant,
  title
}: Props) => {
  let ComponentToRender;
  const featuredImageSize = useBreakpointValue({ base: '430px', sm: '464px' });
  const cloudflareImage = `https://starknet.io/cdn-cgi/image/width=${featuredImageSize},height=auto,format=auto${icon}`;
  const isProd  = import.meta.env.VITE_ALGOLIA_INDEX === "production";
  const iconProps: CardIconProps = {
    gradientColor1: colors[color]?.iconGradientColor1,
    gradientColor2: colors[color]?.iconGradientColor2,
    filter: variant === "dapp" ? "drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" : "none",
    borderRadius: variant === "dapp" ? "28.0494px" : "0px",
    imagePadding: variant === "large_card" ? "0px" : "40px 0 0 32px",
    communityCardPadding: {base: "0", md: "24px 0px 24px 36px"},
    icon: icon ? (isProd ? cloudflareImage : icon) : '',
    alt: title ?? ''
  }
  switch (icon) {
    case "/assets/1.svg":
      ComponentToRender = AccountAbstractionIcon;
      break;
    case "/assets/dapps.svg":
      ComponentToRender = BlockExplorerIcon;
      break;
    case "/assets/dapps-icon.svg":
      ComponentToRender = DappsIcon;
      break;
    case "/assets/community.svg":
      ComponentToRender = CommunityIcon;
      break;
    case "/assets/developers.svg":
      ComponentToRender = DevelopersIcon;
      break;
    case "/assets/deposit-withdraw.svg":
    case "/assets/3.svg":
      ComponentToRender = DepositAndWithdrawIcon;
      break;
    case "/assets/docs.svg":
      ComponentToRender = DocsIcon;
      break;
    case "/assets/5.svg":
      ComponentToRender = HowSNWorksIcon;
      break;
    case "/assets/on-chain-computation.svg":
      ComponentToRender = OnChainComputationIcon;
      break;
    case "/assets/on-ramp.svg":
      ComponentToRender = OnrampIcon;
      break;
    case "/assets/unlimited_scale.svg":
      ComponentToRender = ScalingIcon;
      break;
    case "/assets/trustlessness.svg":
      ComponentToRender = TrustlessnessIcon;
      break;
    case "/assets/tutorials.svg":
      case "/assets/7.svg":
      ComponentToRender = TutorialsIcon;
      break;
    case "/assets/wallet.svg":
    case "/assets/2.svg":
      ComponentToRender = WalletIcon;
      break;
    case "/assets/yellow.svg":
    case "/assets/orange.svg":
    case "/assets/green.svg":
      ComponentToRender = CoursesIcon;
      break;
    case "/assets/community-events.svg":
      ComponentToRender = CommunityEventsIcon;
      break;
    case "/assets/online-communities.svg":
      ComponentToRender = OnlineCommunitiesIcon;
      break;
    case "/assets/local-environment.svg":
      ComponentToRender = LocalEnvironmentIcon;
      break;
    case "/assets/jobs.svg":
      ComponentToRender = JobsIcon;
      break;
    case "/assets/blog.svg":
      ComponentToRender = BlogIcon;
      break;
    case "/assets/github.svg":
      ComponentToRender = GithubIcon;
      break;
    case "/assets/tools-and-resources.svg":
      ComponentToRender = ToolsAndResourcesIcon;
      break;
    default:
      ComponentToRender = ImageIcon;
  }
  return (
    <>
      {(variant === "image_icon_link_card" || variant === "dapp") ? <Box
        margin="8px 8px 0 8px"
        borderRadius="20px 20px 0 0"
        position="relative"
        bgGradient={colors[color].gradient}
        height={size === "large" ? "292px" : "263px"}
        overflow="hidden"
        className="card-image"
        width="calc(100% - 16px)"
        _dark={{ background: variant === "dapp" && "linear-gradient(12.57deg, #2C292B -31.18%, #474D50 102.25%)"}}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={1}
          opacity={0.8}
        >
          <ComponentToRender {...iconProps} />
        </Box>
        {withIllustration && <Box
          _dark={{ mixBlendMode: "color" }}
          mixBlendMode="overlay"
          opacity="1"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={0}
          backgroundImage="/assets/cards/image_icon_card_curves.png"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          width="432px"
          height="292px"
        />}
      </Box> : icon &&
      <Box
        padding={variant === "community_card" ? iconProps.communityCardPadding : iconProps.imagePadding}
      >
        <ComponentToRender
          {...iconProps}
        />
      </Box>}
    </>
  );
};
