
import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Flex,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useInfiniteHits
} from "react-instantsearch-hooks-web";
import { useRefinementList } from "react-instantsearch-hooks";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { titleCase } from "src/utils/utils";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersButton from "../(components)/MobileFilter/MobileFiltersButton";
import useMobileFiltersDrawer from "../(components)/MobileFilter/useMobileFiltersDrawer";
import MobileFiltersDrawer from "../(components)/MobileFilter/MobileFiltersDrawer";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";
import JobsCard from "./JobsCard";
import { MarkdownBlock } from "src/blocks/MarkdownBlock";

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
  readonly seo: SEOTexts['jobs'];
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
          facetsRefinements={{ 
            locale: [params.locale],
            status: ['active']
          }}
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
    setSelectedFilters
  } = useMobileFiltersDrawer([
    ...roles,
    ...types,
  ]);

  function mapSelectedFilters() {
    let result: { "job.role"?: string[], "job.type"?: string[] } = {};

    let rolesFilteredValues = roles
        .filter(item => item.isRefined)
        .map(item => item.value);

    if (rolesFilteredValues.length > 0) {
        result["job.role"] = rolesFilteredValues;
    }

    let typesFilteredValues = types
        .filter(item => item.isRefined)
        .map(item => item.value);

    if (typesFilteredValues.length > 0) {
        result["job.type"] = typesFilteredValues;
    }

    return result;
  }

  const handleModalClose = () => {
    onClose();
    setSelectedFilters(mapSelectedFilters());
  }

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
      selectedFilters["job.type"].map(type => {
        refineTypes(type);
      })
    } else {
      types.map((type) => {
        type.isRefined && refineTypes(type.value);
      });
    }
  }

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
      sectionHeaderBottomContent={(
        <>
          <Text
            color={'muted'}
            style={{marginTop: '-40px'}}
            variant={'body'}
          >
            <MarkdownBlock body={seo.description} />
          </Text>
            
          <MobileFiltersButton
            filtersCount={filtersCounts}
            onClick={onOpen}
            style={{
              marginBlock: "16px",
            }}
          />
        </>
      )}
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${params.locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${params.locale}/community`}
              fontSize="sm"
              noOfLines={1}
            >
              Community
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize="sm">Jobs</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <CustomRole items={roles} refine={refineRoles} selectedFilters={selectedFilters} />
          <CustomType items={types} refine={refineTypes} selectedFilters={selectedFilters} />
        </Box>
      }
      main={
        <Box>
          <CustomHits />
          <MobileFiltersDrawer isOpen={isOpen} onClose={handleModalClose}>
          <CustomRole items={roles} refine={handleFilterClick} selectedFilters={selectedFilters} isDesktop={false} />
          <CustomType items={types} refine={handleFilterClick} selectedFilters={selectedFilters} isDesktop={false} />
          <Button variant="solid" fullWidth mb={2} mt={6} onClick={handleApplyFilters}>Apply filters</Button>
          <Button variant="outline" onClick={handleClearFilters} fullWidth>Clear all</Button>
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
  isDesktop = true
}: {
  items: RefinementListProps["items"];
  refine: any;
  selectedFilters: any;
  isDesktop?: boolean;
}) {
  const checkIfFilterExists = (role: string, filter: string, selectedFilters: { [key: string]: string[] }) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box>
      <Heading variant="h6" mb={4}>
        Role
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            size="sm"
            variant={isDesktop ? (item.isRefined ? "filterActive" : "filter") : checkIfFilterExists(item.label, "job.role", selectedFilters) ? "filterActive" : "filter"}
            onClick={() => isDesktop ? refine(item.value) : refine("job.role", item.label)}
            key={i}
            justifyContent="flex-start"
          >
            {item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

function CustomType({
  items,
  refine,
  selectedFilters,
  isDesktop = true
}: {
  items: RefinementListProps["items"];
  refine: any;
  selectedFilters: any;
  isDesktop?: boolean;
}) {
  const checkIfFilterExists = (role: string, filter: string, selectedFilters: { [key: string]: string[] }) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  return (
    <Box mt={8}>
      <Heading variant="h6" mb={4}>
        Type
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => {
          const label = titleCase(item.label);
          return (
            <Button
              variant={isDesktop ? (item.isRefined ? "filterActive" : "filter") : checkIfFilterExists(item.label, "job.type", selectedFilters) ? "filterActive" : "filter"}
              size="sm"
              onClick={() => isDesktop ? refine(item.value) : refine("job.type", item.label)}
              key={i}
              justifyContent="flex-start"
            >
              {label}
            </Button>
          );
        })}
      </VStack>
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
  published_at: string;
  archived?: string;
  archive_after?: number;
};

const isArchived = (published_at: string, archive_after: number): boolean | null => {
  if (archive_after === undefined) {
    return null;
  }

  const currentDate = new Date();
  const publishedDate = new Date(published_at);
  const archivedDate = new Date(publishedDate.setMonth(publishedDate.getMonth() + archive_after));

  return archivedDate <= currentDate;
};

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<JobsHit>();

  const activeHits = hits.filter(hit => !isArchived(hit.published_at, hit.archive_after!));

  return (
    <>
      <Flex gap={4} direction="column" flex={1}>
        {activeHits.map((hit, i) => (
          <JobsCard key={i} hit={hit} />
        ))}
      </Flex>
      {!isLastPage && (
        <HStack mt="24">
          <Divider />
          <Button
            onClick={() => showMore()}
            flexShrink={0}
            variant="outlineLight"
          >
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
