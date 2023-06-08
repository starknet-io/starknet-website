"use client";

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
import { useMemo, useState, useEffect } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useInfiniteHits,
} from "src/libs/react-instantsearch-hooks-web";
import { useRefinementList } from "react-instantsearch-hooks";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { titleCase } from "src/utils/utils";
import Link from "next/link";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersButton from "../../(components)/MobileFilter/MobileFiltersButton";
import useMobileFiltersDrawer from "../../(components)/MobileFilter/useMobileFiltersDrawer";
import MobileFiltersDrawer from "../../(components)/MobileFilter/MobileFiltersDrawer";
import JobsCard from "./JobsCard";

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
  readonly seo: {
    readonly title: string;
    readonly subtitle: string;
  };
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
          facetsRefinements={{ locale: [params.locale] }}
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

  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    console.log('selectedFilters ', selectedFilters)
  }, [selectedFilters])
  useEffect(() => {
    console.log('roles ', roles)
    console.log('types ', types)
  }, [roles, types])

  const handleFilterClick = (attribute: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!newFilters[attribute]) {
        newFilters[attribute] = [];
      }

      if (newFilters[attribute].includes(value)) {
        newFilters[attribute] = newFilters[attribute].filter((val) => val !== value);
      } else {
        newFilters[attribute].push(value);
      }
      return newFilters;
    });
  };

  const { isOpen, setFilterOpen, onOpen, onClose, filtersCount } = useMobileFiltersDrawer([
    ...roles,
    ...types,
  ]);

  const handleApplyFilters = () => {
    if (selectedFilters["job.role"]) {
      selectedFilters["job.role"].map((role) => {
        refineRoles(role);
      });
    }

    if (selectedFilters["job.type"]) {
      selectedFilters["job.type"].map(type => {
        refineTypes(type);
      })
    }
    setFilterOpen(false);
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    refineRoles("");
    refineTypes("");
  };
  
  return (
    <PageLayout
      sectionHeaderTitle={seo.title}
      sectionHeaderDescription={seo.subtitle}
      sectionHeaderBottomContent={
        <MobileFiltersButton
          filtersCount={selectedFilters["job.role"]?.length ?? 0 + selectedFilters["job.type"]?.length ?? 0}
          onClick={onOpen}
          style={{
            marginBlock: "16px",
          }}
        />
      }
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${params.locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
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
          <CustomRole items={roles} refine={handleFilterClick} selectedFilters={selectedFilters} />
          <CustomType items={types} refine={handleFilterClick} selectedFilters={selectedFilters} />
          <Button variant="solid" fullWidth mb={2} mt={6} onClick={handleApplyFilters}>Apply filters</Button>
          <Button variant="outline" onClick={handleClearFilters} fullWidth>Clear all</Button>
          {/* {roles.map((role) => (
            <Button
              key={role.label}
              size="sm"
              variant={checkIfFilterExists(role.label, "job.role", selectedFilters) ? "filterActive" : "filter"}
              onClick={() => handleFilterClick("job.role", role.label)}
            >
              {role.label}
            </Button>
          ))}
          {types.map((type) => (
            <Button
              key={type.label}
              size="sm"
              variant={checkIfFilterExists(type.label, "job.type", selectedFilters) ? "filterActive" : "filter"}
              onClick={() => handleFilterClick("job.type", type.label)}
            >
              {type.label}
            </Button>
          ))} */}
        </Box>
      }
      main={
        <Box>
          <CustomHits />
          <MobileFiltersDrawer isOpen={isOpen} onClose={onClose}>
          <CustomRole items={roles} refine={handleFilterClick} selectedFilters={selectedFilters} />
          <CustomType items={types} refine={handleFilterClick} selectedFilters={selectedFilters} />
          <Button variant="solid" fullWidth mb={2} mt={6} onClick={handleApplyFilters}>Apply filters</Button>
          <Button variant="outline" onClick={handleClearFilters} fullWidth>Clear all</Button>
          {/* {roles.map((role) => (
            <Button
              key={role.label}
              size="sm"
              variant={checkIfFilterExists(role.label, "job.role", selectedFilters) ? "filterActive" : "filter"}
              onClick={() => handleFilterClick("job.role", role.label)}
            >
              {role.label}
            </Button>
          ))}
          milos
          {types.map((type) => (
            <Button
              key={type.label}
              size="sm"
              variant={checkIfFilterExists(type.label, "job.type", selectedFilters) ? "filterActive" : "filter"}
              onClick={() => handleFilterClick("job.type", type.label)}
            >
              {type.label}
            </Button>
          ))} */}
          </MobileFiltersDrawer>
        </Box>
      }
    />
  );
};
function CustomRole({
  items,
  refine,
  selectedFilters
}: {
  items: RefinementListProps["items"];
  refine: (value: string) => void;
  selectedFilters: any;
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
            variant={checkIfFilterExists(item.label, "job.role", selectedFilters) ? "filterActive" : "filter"}
            onClick={() => refine("job.role", item.label)}
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
  selectedFilters
}: {
  items: RefinementListProps["items"];
  refine: (value: string) => void;
  selectedFilters: any;
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
            variant={checkIfFilterExists(item.label, "job.type", selectedFilters) ? "filterActive" : "filter"}
              size="sm"
              onClick={() => refine("job.type", item.label)}
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
};

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<JobsHit>();

  return (
    <>
      <Flex gap={4} direction="column" flex={1}>
        {hits.map((hit, i) => (
          <JobsCard key={i} hit={hit} />
        ))}
      </Flex>
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
