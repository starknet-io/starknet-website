/**
 * Module dependencies
 */

import { DocumentProps } from "src/renderer/types";

/**
 * Export `Page` component
 */

export { default as Page } from "src/pages/roadmap/(components)/RoadmapPage";

/**
 * Export `documentProps`.
 */

export const documentProps = {
  title: "Starknet Roadmap",
  description: "Explore the Starknet Roadmap for a comprehensive journey through our development milestones. Follow our progress as we continue to enhance performance, security, and usability, driving Starknet towards a new era of decentralized computing. Stay informed and join us on this exciting roadmap as we redefine the possibilities of blockchain technology."
} satisfies DocumentProps;
