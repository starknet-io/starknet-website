import {
  Box,
  Divider,
  Flex,
  Grid,
  HStack,
  SystemStyleObject,
  useColorMode,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import algoliasearch from "algoliasearch/lite";
import { getUnixTime, startOfDay } from "date-fns";
import { useMemo } from "react";
import { useHits } from "react-instantsearch-hooks";
import { Configure, InstantSearch } from "react-instantsearch-hooks-web";
import EventsGridCard from "src/pages/events/EventGridCard";
import { navigate } from "vite-plugin-ssr/client/router";
import EventCard from "../../../../pages/events/EventCard";

export interface AutoProps {
  readonly params: {
    readonly locale: string;
  };
}

export interface Props extends AutoProps {
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
  hitsPerPage?: number;
  variant: "home" | "generic";
  cardType?: "grid" | "event";
  title?: string;
}

const headingStyles: Record<Props["variant"], SystemStyleObject> = {
  home: {
    fontSize: "64px",
    fontWeight: "600",
    lineHeight: "80px",
    maxW: 710,
    mb: "64px",
  },
  generic: {},
};
export function BlockCommunityEventsList({
  params,
  env,
  hitsPerPage = 3,
  variant = "generic",
  cardType = "grid",
  title = "Community events near you",
}: Props): JSX.Element | null {
  const { colorMode } = useColorMode();
  const bgStyles: Record<Props["variant"], SystemStyleObject> = {
    home: {
      position: "relative",
      minHeight: { base: 2538, md: 2138, lg: 1838 },
      paddingTop: 900,
      mt: "-960",
      mb: { base: 0, lg: -130 },
      pb: "7vw",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "brand-primary-solar-tangerine-solid-8",
        clipPath: "polygon(0 14vw,100% 0,100% calc(100% - 14vw),0 100%)",
        backgroundImage:
          colorMode === "light"
            ? "url(/assets/pattern-orange-light.svg)"
            : "url(/assets/pattern-orange-dark.svg)",
        backgroundSize: "130%",
        backgroundPosition: "center",
        zIndex: -1,
      },
    },
    generic: {},
  };
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={`web_events_${env.ALGOLIA_INDEX}_asc`}
    >
      <Configure
        hitsPerPage={hitsPerPage}
        facetsRefinements={{ locale: [params.locale] }}
        filters={`start_date_ts > ${getUnixTime(
          startOfDay(new Date())
        )} AND type: community_event`}
      />
      <Box sx={bgStyles[variant]}>
        <Box
          maxW={
            cardType === "event"
              ? "900px"
              : { base: "contentMaxW.lg", md: "contentMaxW.xl" }
          }
          px={{
            base: "page.left-right.base",
            md: "page.left-right.md",
          }}
          m="0 auto"
          className="community-events-list"
        >
          <Heading
            variant="h2"
            color="content.accent.value"
            align={cardType === "event" ? "center" : "left"}
            mb="40px"
            sx={headingStyles[variant]}
          >
            {title}
          </Heading>
          <CustomHits hitsPerPage={hitsPerPage} cardType={cardType} />
        </Box>
      </Box>
    </InstantSearch>
  );
}

type HitProps = {
  readonly hits: readonly {
    readonly start_date: string;
    readonly end_date?: string;
    readonly name: string;
    readonly image: string;
    readonly city: string;
    readonly country: string;
    readonly description: string;
    readonly tags: string[];
    readonly url: string;
  }[];
};
function CustomHits({
  hitsPerPage,
  cardType,
}: {
  hitsPerPage: number;
  cardType: "grid" | "event";
}) {
  const { hits }: HitProps = useHits();

  return (
    <>
      {cardType === "event" && (
        <Flex gap={4}>
          {hits.map((hit, i) => {
            if (i > hitsPerPage) return null;
            return (
              <EventCard key={`${i}-event`} event={hit} isPastEvent={false} />
            );
          })}
        </Flex>
      )}
      {cardType === "grid" && (
        <Grid
          gap={{
            base: "cards.gap-standard.base",
            md: "cards.gap-standard.md",
            lg: "cards.gap-standard.lg",
          }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        >
          {hits.map((hit, i) => {
            if (i > hitsPerPage) return null;
            return (
              <EventsGridCard
                key={`${i}-event`}
                event={hit}
                isPastEvent={false}
              />
            );
          })}
        </Grid>
      )}
      <Flex
        mt={{
          base: "page.block-gap.base",
          md: "page.block-gap.md",
          lg: "page.block-gap.lg",
        }}
        alignItems="center"
        direction="column"
        pb="4xl"
      >
        {cardType === "event" ? (
          <HStack mt="16px" width="100%">
            <Divider />
            <Button
              onClick={() => navigate("/en/events")}
              flexShrink={0}
              variant="rounded"
            >
              See all events
            </Button>
            <Divider />
          </HStack>
        ) : (
          <Button onClick={() => navigate("/en/events")} variant="solid">
            {`Check out all events ->`}
          </Button>
        )}
      </Flex>
    </>
  );
}
