import { Icon } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { Heading } from "@ui/Typography/Heading";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import {
  Flex,
  Box
} from "@chakra-ui/react";
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
  ToolsAndResourcesIcon
} from "@ui/Icons/CardIcons";

const colors = {
  "purple": {
    gradient:
      "linear(181.06deg, gradient-purple-a 1.25%, gradient-purple-b 150.79%)",
      iconGradientColor1: "#865DB6",
      iconGradientColor2: "#E2A3FA"
  },
  "peach": {
    gradient:
      "linear(181.06deg, gradient-peach-a 1.25%, gradient-peach-b 150.79%)",
      iconGradientColor1: "#B57753",
      iconGradientColor2: "#F9ABAE"
  },
  "blue": {
    gradient:
      "linear(180.15deg, gradient-blue-a 0.2%, gradient-blue-b 105.43%)",
      iconGradientColor1: "#82BDBD",
      iconGradientColor2: "#4F6D87"
  },
  "blue-default": {
    gradient:
      "linear(180.15deg, gradient-blue-default-a 0.2%, gradient-blue-default-b 105.43%)",
      iconGradientColor1: "#81D2FF",
      iconGradientColor2: "#5B5F68"
  },
  "cyan": {
    gradient:
      "linear(181.06deg, gradient-cyan-a 1.25%, gradient-cyan-b 150.79%)",
      iconGradientColor1: "#A4CAB8",
      iconGradientColor2: "#466A6F"
  },
  "orange": {
    gradient:
      "linear(180.75deg, gradient-orange-a 0.96%, gradient-orange-b 106.43%)",
      iconGradientColor1: "#EDC39C",
      iconGradientColor2: "#7E5D4A"
  },
  "pink": {
    gradient:
      "linear(181.06deg, gradient-pink-a 1.25%, gradient-pink-b 150.79%)",
      iconGradientColor1: "#B05D52",
      iconGradientColor2: "#F4C9FF"
  },
  "grey": {
    gradient: "linear-gradient(12.57deg, #F7EEF6 -31.18%, #E9EEF1 102.25%)",
      iconGradientColor1: "#865DB6",
      iconGradientColor2: "#E2A3FA"
  }
};

export default {
  title: "starknet.io/Icons",
  component: Icon,
  argTypes: {
    color: {
      options: ["purple", "peach", "blue", "blue-default", "cyan", "orange", "pink", "grey"],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Icon>;
type ColorKey = "purple" | "peach" | "blue" | "blue-default" | "cyan" | "orange" | "pink" | "grey";

export const CardIcons = (args: { color: ColorKey; }) => {
    const { color } = args;

    return <ThemeProvider>
    <Flex direction="column" p={12}>
        <Heading variant="h3">AccountAbstractionIcon</Heading>
        <Box padding="15px 0 30px 0">
          <AccountAbstractionIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">BlockExplorerIcon</Heading>
        <Box padding="15px 0 30px 0"><BlockExplorerIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">CommunityIcon</Heading>
        <Box padding="15px 0 30px 0"><CommunityIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">DappsIcon</Heading>
        <Box padding="15px 0 30px 0"><DappsIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" /></Box>
        <Heading variant="h3">DepositAndWithdrawIcon</Heading>
        <Box padding="15px 0 30px 0"><DepositAndWithdrawIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">DevelopersIcon</Heading>
        <Box padding="15px 0 30px 0"><DevelopersIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">DocsIcon</Heading>
        <Box padding="15px 0 30px 0"><DocsIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">HowSNWorksIcon</Heading>
        <Box padding="15px 0 30px 0"><HowSNWorksIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">OnChainComputationIcon</Heading>
        <Box padding="15px 0 30px 0"><OnChainComputationIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" /></Box>
        <Heading variant="h3">OnrampIcon</Heading>
        <Box padding="15px 0 30px 0"><OnrampIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">ScalingIcon</Heading>
        <Box padding="15px 0 30px 0"><ScalingIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">TrustlessnessIcon</Heading>
        <Box padding="15px 0 30px 0"><TrustlessnessIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" /></Box>
        <Heading variant="h3">TutorialsIcon</Heading>
        <Box padding="15px 0 30px 0"><TutorialsIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">WalletIcon</Heading>
        <Box padding="15px 0 30px 0"><WalletIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))"/></Box>
        <Heading variant="h3">BlogIcon</Heading>
        <Box padding="15px 0 30px 0">
          <BlogIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">CommunityEventsIcon</Heading>
        <Box padding="15px 0 30px 0">
          <CommunityEventsIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">CoursesIcon</Heading>
        <Box padding="15px 0 30px 0">
          <CoursesIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">GithubIcon</Heading>
        <Box padding="15px 0 30px 0">
          <GithubIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">JobsIcon</Heading>
        <Box padding="15px 0 30px 0">
          <JobsIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">LocalEnvironmentIcon</Heading>
        <Box padding="15px 0 30px 0">
          <LocalEnvironmentIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">OnlineCommunitiesIcon</Heading>
        <Box padding="15px 0 30px 0">
          <OnlineCommunitiesIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
        <Heading variant="h3">ToolsAndResourcesIcon</Heading>
        <Box padding="15px 0 30px 0">
          <ToolsAndResourcesIcon gradientColor1={colors[color].iconGradientColor1} gradientColor2={colors[color].iconGradientColor2} filter="drop-shadow(28.0494px 28.0494px 52.5926px rgba(0, 0, 0, 0.25)) drop-shadow(7.01235px 10.5185px 24.5432px rgba(0, 0, 0, 0.25))" />
        </Box>
    </Flex>
  </ThemeProvider>;
};

CardIcons.args = {
  color: "purple"
}
