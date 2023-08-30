import { Box, HStack, Divider, Grid, Flex } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useInfiniteHits,
} from "react-instantsearch-hooks-web";
import { useRefinementList } from "react-instantsearch-hooks";
import { PageLayout } from "@ui/Layout/PageLayout";
import { titleCase } from "src/utils/utils";
import MobileFiltersButton from "../(components)/MobileFilter/MobileFiltersButton";
import useMobileFiltersDrawer from "../(components)/MobileFilter/useMobileFiltersDrawer";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersDrawer from "../(components)/MobileFilter/MobileFiltersDrawer";
import { navigate } from "vite-plugin-ssr/client/router";
import TutorialsCard from "./TutorialsCard";
import { Tutorial } from "@starknet-io/cms-data/src/tutorials";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { Chip } from "@ui/Chip/Chip";
import { ChipFilterLabel } from "@ui/ChipFilter/ChipFilterLabel";
import { ChipFilterContainer } from "@ui/ChipFilter/ChipFilterContainer";

type RefinementListItem = {
  value: string;
  label: string;
  highlighted?: string;
  count: number;
  isRefined: boolean;
};

let levelRanks: { [key: string]: number } = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

export interface Props extends LocaleProps {
  readonly params: LocaleParams & {
    readonly course?: string;
  };
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
  readonly seo: {
    title: string;
    subtitle: string;
  };
}

export function TutorialsPage({ params, env, seo }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch
        searchClient={searchClient}
        indexName={`web_tutorials_${env.ALGOLIA_INDEX}`}
      >
        <Configure
          hitsPerPage={40}
          facetsRefinements={{
            locale: [params.locale],
            course: params.course != null ? [params.course] : [],
          }}
        />
        <TutorialsPageLayout params={params} seo={seo} />
      </InstantSearch>
    </Box>
  );
}

const TutorialsPageLayout = ({
  params,
  seo,
}: Pick<Props, "params" | "seo">) => {
  const { items: typeItems, refine: refineTypes } = useRefinementList({
    attribute: "type",
    sortBy: ["name:asc"],
  });

  const { items: difficultyItems, refine: refineDifficulty } =
    useRefinementList({
      attribute: "difficulty",
      sortBy: ["name:asc"],
    });

  const { items: tagsItems, refine: refineTags } = useRefinementList({
    attribute: "tags",
    sortBy: ["name:asc"],
  });

  const { isOpen, onOpen, onClose, filtersCount } = useMobileFiltersDrawer([
    ...typeItems,
    ...difficultyItems,
    ...tagsItems,
  ]);

  return (
    <PageLayout
      sectionHeaderTitle={seo.title}
      sectionHeaderDescription={seo.subtitle}
      breadcrumbs={
        <Breadcrumbs
          locale={params.locale}
          items={[
            {
              label: "Developers",
              link: `/${params.locale}/developers`,
            },
            {
              label: "Tutorials",
              link: "",
            },
          ]}
        ></Breadcrumbs>
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <CustomDifficulty
            items={difficultyItems.sort(
              (a: RefinementListItem, b: RefinementListItem) =>
                levelRanks[a.value] - levelRanks[b.value]
            )}
            refineDifficulty={refineDifficulty}
          />
          <CustomType items={typeItems} refineTypes={refineTypes} />
          <CustomCourse params={params} />
          <CustomTags items={tagsItems} refineTags={refineTags} />
        </Box>
      }
      main={
        <Box
          mt={{
            base: "page.gap-condenced.base",
            md: "page.gap-condenced.md",
            lg: "page.gap-condenced.lg",
          }}
        >
          <MobileFiltersButton
            filtersCount={filtersCount}
            onClick={onOpen}
            style={{
              marginBlock: "1rem",
            }}
          />
          <CustomHits locale={params.locale} />
          <MobileFiltersDrawer isOpen={isOpen} onClose={onClose}>
            <Flex direction="column" gap="sm">
              <CustomDifficulty
                items={difficultyItems.sort(
                  (a: RefinementListItem, b: RefinementListItem) =>
                    levelRanks[a.value] - levelRanks[b.value]
                )}
                refineDifficulty={refineDifficulty}
              />
              <CustomType items={typeItems} refineTypes={refineTypes} />
              <CustomCourse params={params} />
              <CustomTags items={tagsItems} refineTags={refineTags} />
            </Flex>
          </MobileFiltersDrawer>
        </Box>
      }
    />
  );
};
function CustomDifficulty({
  items,
  refineDifficulty,
}: {
  items: RefinementListProps["items"];
  refineDifficulty: (v: string) => void;
}) {
  return (
    <Box>
      <ChipFilterLabel pt="none">Level</ChipFilterLabel>
      <ChipFilterContainer>
        {items.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Chip
              key={i}
              isSelected={item.isRefined}
              onClick={() => refineDifficulty(item.value)}
            >
              {label}
            </Chip>
          );
        })}
      </ChipFilterContainer>
    </Box>
  );
}

function CustomType({
  items,
  refineTypes,
}: {
  items: RefinementListProps["items"];
  refineTypes: any;
}) {
  return (
    <Box>
      <ChipFilterLabel>Type</ChipFilterLabel>
      <ChipFilterContainer>
        {items.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Chip
              key={i}
              isSelected={item.isRefined}
              onClick={() => refineTypes(item.value)}
            >
              {label}
            </Chip>
          );
        })}
      </ChipFilterContainer>
    </Box>
  );
}
function CustomTags({
  items,
  refineTags,
}: {
  items: RefinementListProps["items"];
  refineTags: any;
}) {
  return (
    <Box>
      <ChipFilterLabel variant="h6" mb={4}>
        Tags
      </ChipFilterLabel>
      <ChipFilterContainer>
        {items.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Chip
              key={i}
              isSelected={item.isRefined}
              onClick={() => refineTags(item.value)}
            >
              {label}
            </Chip>
          );
        })}
      </ChipFilterContainer>
    </Box>
  );
}

const courses = [
  {
    label: "Bytesized series",
    value: "bytesized_series",
  },
  {
    label: "Starknet edu series",
    value: "starknet_edu",
  },
  {
    label: "Cairo 101",
    value: "cairo_101",
  },
  {
    label: "Cairo workshops",
    value: "cairo_workshops",
  },
  {
    label: "Hackathon Feb 22",
    value: "hackathon_feb_22",
  },
  {
    label: "Hackathon Oct 22",
    value: "hackathon_oct_22",
  },
];

function CustomCourse({ params }: Pick<Props, "params">) {
  return (
    <Box>
      <ChipFilterLabel>Courses / series</ChipFilterLabel>
      <ChipFilterContainer>
        {courses.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Chip
              key={i}
              isSelected={item.value === params.course}
              onClick={() => {
                if (item.value === params.course) {
                  navigate(`/${params.locale}/tutorials`, {
                    overwriteLastHistoryEntry: true,
                  });
                } else {
                  navigate(`/${params.locale}/tutorials/${item.value}`, {
                    overwriteLastHistoryEntry: true,
                  });
                }
              }}
            >
              {label}
            </Chip>
          );
        })}
      </ChipFilterContainer>
    </Box>
  );
}

// function CustomTags() {
//   const { items, refine } = useRefinementList({
//     attribute: "tags",
//     sortBy: ["name:asc"],
//   });

//   return (
//     <Box mt={8} maxHeight="300px" overflowY="auto">
//       <Heading variant="h6" mb={4}>
//         Tags
//       </Heading>
//       <VStack dir="column" alignItems="stretch">
//         {items.map((item, i) => {
//           let label = titleCase(item.label);

//           return (
//             <Button
//               size="sm"
//               variant={item.isRefined ? "filterActive" : "filter"}
//               onClick={() => refine(item.value)}
//               key={i}
//               justifyContent="flex-start"
//             >
//               {label}
//             </Button>
//           );
//         })}
//       </VStack>
//     </Box>
//   );
// }
type CustomHitsProps = {
  locale: string;
};
function CustomHits({ locale }: CustomHitsProps) {
  const { hits, showMore, isLastPage } = useInfiniteHits<Tutorial>();

  return (
    <>
      <Grid
        templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        templateRows="1fr"
        rowGap="48px"
        mt={{
          base: "page.block-gap.base",
          md: "page.block-gap.md",
          lg: "page.block-gap.lg",
        }}
        columnGap={{
          base: "cards.gap-standard.base",
          md: "cards.gap-standard.md",
          lg: "cards.gap-standard.lg",
        }}
      >
        {hits.map((hit) => {
          // let tags: string[] = [];
          // if (hit.difficulty) tags.push(hit.difficulty);
          // if (hit.type) tags.push(hit.type);

          return <TutorialsCard key={hit.objectID} hit={hit} locale={locale} />;
        })}
      </Grid>
      {/* {hits.map((hit, i) => (
          <ArticleCard.Root href="$" key={i}>
            <ArticleCard.Image url={`/static/${hit.image}`} />

            <ArticleCard.Body>
              <ArticleCard.Category category={hit?.category} />
              <ArticleCard.Content title={hit.title} excerpt={hit.short_desc} />
            </ArticleCard.Body>
            <ArticleCard.Footer
              postType="audio"
              publishedAt="Nov 24, 2022"
              duration="1hr 2mins"
            />
          </ArticleCard.Root>
        ))} */}

      {!isLastPage && (
        <HStack mt="24">
          <Divider />
          <Button onClick={() => showMore()} flexShrink={0} variant="rounded">
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
