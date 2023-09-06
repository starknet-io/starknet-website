import { Box, Flex, HStack, Divider } from "@chakra-ui/react";
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
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersButton from "../(components)/MobileFilter/MobileFiltersButton";
import useMobileFiltersDrawer from "../(components)/MobileFilter/useMobileFiltersDrawer";
import MobileFiltersDrawer from "../(components)/MobileFilter/MobileFiltersDrawer";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";
import JobsCard from "./JobsCard";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { ChipFilterLabel } from "@ui/ChipFilter/ChipFilterLabel";
import { ChipFilterContainer } from "@ui/ChipFilter/ChipFilterContainer";
import { Chip } from "@ui/Chip/Chip";

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
  readonly seo: SEOTexts["jobs"];
}

export function JobsPage({ params, env, seo }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch
        searchClient={searchClient}
        indexName={`web_jobs_${env.ALGOLIA_INDEX}`}
      >
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale], status: ["active"] }}
        />
        <JobsPageLayout params={params} seo={seo} />
      </InstantSearch>
    </Box>
  );
}

const JobsPageLayout = ({ params, seo }: Pick<Props, "params" | "seo">) => {
  const { items: roles, refine: refineRoles } = useRefinementList({
    attribute: "job.role",
    sortBy: ["name:asc"],
  });

  const { items: types, refine: refineTypes } = useRefinementList({
    attribute: "job.type",
    sortBy: ["name:asc"],
  });

  const {
    isOpen,
    setFilterOpen,
    onOpen,
    onClose,
    handleFilterClick,
    filtersCounts,
    selectedFilters,
    setSelectedFilters,
  } = useMobileFiltersDrawer([...roles, ...types]);

  function mapSelectedFilters() {
    let result: { "job.role"?: string[]; "job.type"?: string[] } = {};

    let rolesFilteredValues = roles
      .filter((item) => item.isRefined)
      .map((item) => item.value);

    if (rolesFilteredValues.length > 0) {
      result["job.role"] = rolesFilteredValues;
    }

    let typesFilteredValues = types
      .filter((item) => item.isRefined)
      .map((item) => item.value);

    if (typesFilteredValues.length > 0) {
      result["job.type"] = typesFilteredValues;
    }

    return result;
  }

  const handleModalClose = () => {
    onClose();
    setSelectedFilters(mapSelectedFilters());
  };

  const handleApplyChanges = () => {
    if (selectedFilters["job.role"]?.length) {
      selectedFilters["job.role"].map((role) => {
        refineRoles(role);
      });
    } else {
      roles.map((role) => {
        role.isRefined && refineRoles(role.value);
      });
    }

    if (selectedFilters["job.type"]?.length) {
      selectedFilters["job.type"].map((type) => {
        refineTypes(type);
      });
    } else {
      types.map((type) => {
        type.isRefined && refineTypes(type.value);
      });
    }
  };

  const handleApplyFilters = () => {
    handleApplyChanges();
    setFilterOpen(false);
  };

  const handleClearFilters = () => {
    handleApplyChanges();
    setSelectedFilters({});
  };

  return (
    <PageLayout
      sectionHeaderTitle={seo.title}
      sectionHeaderDescription={seo.subtitle}
      sectionHeaderBottomContent={
        <MobileFiltersButton
          filtersCount={filtersCounts}
          onClick={onOpen}
          style={{
            marginBlock: "16px",
          }}
        />
      }
      breadcrumbs={
        <Breadcrumbs
          locale={params.locale}
          items={[
            {
              label: "Community",
              link: `/${params.locale}/community`,
            },
            {
              label: "Jobs",
              link: ``,
            },
          ]}
        />
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <CustomRole
            items={roles}
            refine={refineRoles}
            selectedFilters={selectedFilters}
          />
          <CustomType
            items={types}
            refine={refineTypes}
            selectedFilters={selectedFilters}
          />
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
          <CustomHits />
          <MobileFiltersDrawer isOpen={isOpen} onClose={handleModalClose}>
            <CustomRole
              items={roles}
              refine={handleFilterClick}
              selectedFilters={selectedFilters}
              isDesktop={false}
            />
            <CustomType
              items={types}
              refine={handleFilterClick}
              selectedFilters={selectedFilters}
              isDesktop={false}
            />
            <Button
              variant="solid"
              fullWidth
              mb={2}
              mt={6}
              onClick={handleApplyFilters}
            >
              Apply filters
            </Button>
            <Button variant="outline" onClick={handleClearFilters} fullWidth>
              Clear all
            </Button>
          </MobileFiltersDrawer>
        </Box>
      }
    />
  );
};
function CustomRole({
  items,
  refine,
  selectedFilters,
  isDesktop = true,
}: {
  items: RefinementListProps["items"];
  refine: any;
  selectedFilters: any;
  isDesktop?: boolean;
}) {
  const checkIfFilterExists = (
    role: string,
    filter: string,
    selectedFilters: { [key: string]: string[] }
  ) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box>
      <ChipFilterLabel pt="0">Role</ChipFilterLabel>
      <ChipFilterContainer>
        {items.map((item, i) => (
          <Chip
            key={i}
            isSelected={
              isDesktop
                ? item.isRefined
                : checkIfFilterExists(item.label, "job.role", selectedFilters)
            }
            onClick={() =>
              isDesktop ? refine(item.value) : refine("job.role", item.label)
            }
          >
            {item.label}
          </Chip>
        ))}
      </ChipFilterContainer>
    </Box>
  );
}

function CustomType({
  items,
  refine,
  selectedFilters,
  isDesktop = true,
}: {
  items: RefinementListProps["items"];
  refine: any;
  selectedFilters: any;
  isDesktop?: boolean;
}) {
  const checkIfFilterExists = (
    role: string,
    filter: string,
    selectedFilters: { [key: string]: string[] }
  ) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box>
      <ChipFilterLabel>Type</ChipFilterLabel>
      <ChipFilterContainer>
        {items.map((item, i) => {
          const label = titleCase(item.label);
          return (
            <Chip
              key={i}
              isSelected={
                isDesktop
                  ? item.isRefined
                  : checkIfFilterExists(item.label, "job.type", selectedFilters)
              }
              onClick={() =>
                isDesktop ? refine(item.value) : refine("job.type", item.label)
              }
            >
              {label}
            </Chip>
          );
        })}
      </ChipFilterContainer>
    </Box>
  );
}

interface Contact {
  discord: string;
  email: string;
  logo: string;
  name: string;
  twitter: string;
}
interface Job {
  description: string;
  how_to_apply: string;
  location: string;
  required_experience: string;
  role: string;
  scope: string;
  title: string;
  type: string;
  apply_url: string;
}

export type JobsHit = {
  contact?: Contact; // contact can be undefined in live preview
  job?: Job; // job can be undefined in live preview
  published_at?: string;
  archived?: string;
  archive_after: string;
};

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<JobsHit>();

  return (
    <>
      <Flex
        rowGap={4}
        columnGap={{
          base: "cards.gap-standard.base",
          md: "cards.gap-standard.md",
          lg: "cards.gap-standard.lg",
        }}
        direction="column"
        flex={1}
        mt={{
          base: "page.gap-condenced.base",
          md: "page.gap-condenced.md",
          lg: "page.gap-condenced.lg",
        }}
      >
        {hits.map((hit, i) => (
          <JobsCard key={i} hit={hit} />
        ))}
      </Flex>
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
