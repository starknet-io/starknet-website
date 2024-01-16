/**
 * Module dependencies.
 */

import { DocumentProps } from "src/renderer/types";

/**
 * Export `Page` component
 */

export { NewsletterPage as Page } from "src/pages/subscribe-newsletter/NewsletterPage";

/**
 * Export `documentProps`.
 */

export const documentProps = {
  title: "Starknet Newsletter",
  description: "Subscribe to the Starknet newsletter to stay up to date with the latest news and developments from the Starknet team."
} satisfies DocumentProps
