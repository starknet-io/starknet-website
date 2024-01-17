/**
 * Module dependencies
 */

import { Divider, Grid } from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";

/**
 * Export `EmptySection` component.
 */

export const EmptySection = () => (
  <Grid
    alignItems={'center'}
    gridColumnGap={'24px'}
    gridTemplateColumns={'1fr auto 1fr'}
    height={'200px'}
  >
    <Divider />

    <Text>
      {'No content found'}
    </Text>

    <Divider />
  </Grid>
);
