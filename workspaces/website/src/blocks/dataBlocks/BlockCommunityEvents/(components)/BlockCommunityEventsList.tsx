import {
  Box,
  Flex,
  Grid,
  Container,
  HStack,
  SystemStyleObject,
} from "@chakra-ui/react";
import moment from "moment";
import { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-hooks-web";
import { useHits } from "react-instantsearch-hooks";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { Card, CardBody, CardLink, CardImg, CardTitle } from "@ui/Card/Card";
import { Button } from "@ui/Button";
import { getUnixTime, startOfDay } from "date-fns";
import { navigate } from "vite-plugin-ssr/client/router";

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
}
const bgStyles: Record<Props["variant"], SystemStyleObject> = {
  home: {
    position: "relative",
    minHeight: { base: 2538, md: 2138, lg: 1838 },
    paddingTop: 900,
    mt: "-900",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bg: "brand-primary-solar-tangerine-solid-8",
      clipPath: "polygon(0 14vw,100% 0,100% calc(100% - 14vw),0 100%)",
      backgroundImage: "url(/assets/community-events-bg.svg)",
      backgroundSize: "130%",
      backgroundPosition: "center",
      zIndex: -1,
    },
  },
  generic: {},
};

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
  variant = "home",
}: Props): JSX.Element | null {
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
          maxW={{ base: "contentMaxW.lg", md: "contentMaxW.xl" }}
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
            mb="40px"
            sx={headingStyles[variant]}
          >
            Community events near you
          </Heading>
          <CustomHits hitsPerPage={hitsPerPage} />
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
function CustomHits({ hitsPerPage }: { hitsPerPage: number }) {
  const { hits }: HitProps = useHits();

  return (
    <>
      <Grid
        gap={4}
        gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      >
        {hits.map((hit, i) => {
          if (i > hitsPerPage) return null;
          else {
            return (
              <Card variant="grid" key={hit?.name}>
                <CardImg variant="grid" src={hit.image} />
                <CardBody variant="grid">
                  <Text variant="cardBody">
                    {hit?.end_date
                      ? `${moment(hit?.start_date).format(
                          "ddd MMM DD"
                        )} - ${moment(hit?.end_date).format(
                          "ddd MMM DD, YYYY"
                        )}`
                      : moment(hit?.start_date).format("ddd MMM DD, YYYY")}
                  </Text>
                  <Heading m="0" variant="h3" color="heading-navy-fg">
                    {hit.name}
                  </Heading>
                  <CardLink variant="iconLink" href="">
                    Learn more{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.34467 2.09467C7.63756 1.80178 8.11244 1.80178 8.40533 2.09467L12.7803 6.46967C12.921 6.61032 13 6.80109 13 7C13 7.19891 12.921 7.38968 12.7803 7.53033L8.40533 11.9053C8.11244 12.1982 7.63756 12.1982 7.34467 11.9053C7.05178 11.6124 7.05178 11.1376 7.34467 10.8447L10.4393 7.75H1.75C1.33579 7.75 1 7.41421 1 7C1 6.58579 1.33579 6.25 1.75 6.25H10.4393L7.34467 3.15533C7.05178 2.86244 7.05178 2.38756 7.34467 2.09467Z"
                        fill="#3F8CFF" // content.link / brand-primary-galaxy-blue-solid-9
                      />
                    </svg>
                  </CardLink>
                </CardBody>
              </Card>
            );
          }
        })}
      </Grid>
      <Flex mt="24px" alignItems="center" direction="column">
        <Button
          onClick={() => navigate("/en/events")}
          variant="outline"
          bg="surface.accent.value"
        >
          {`Check out all events ->`}
        </Button>
      </Flex>
    </>
  );
}
