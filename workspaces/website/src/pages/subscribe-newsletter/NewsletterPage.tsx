
/**
 * Module dependencies.
 */

import { Box } from "@chakra-ui/react";
import { PageLayout } from "@ui/Layout/PageLayout";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";
import { NewsletterForm } from "../(components)/roadmap/NewsletterForm";

/**
 * `Props` type.
 */

export interface Props {
  readonly env: {
    readonly CLOUDFLARE_RECAPTCHA_KEY: string;
  };
  readonly seo: SEOTexts['newsletter'];
}

/**
 * Export `NewsletterPage` component.
 */

export function NewsletterPage({ env, seo }: Props) {
  return (
    <PageLayout
      sectionHeaderTitle={seo.title}
      sectionHeaderDescription={seo.subtitle}
      main={
        <Box maxW={500}>
          <NewsletterForm
            env={env}
            hideHeader
          />
        </Box>
      }
    />
  )
};
