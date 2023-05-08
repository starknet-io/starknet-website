
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
  useInfiniteHits,
} from "react-instantsearch-hooks-web";
import { useRefinementList } from "react-instantsearch-hooks";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { ListCard } from "@ui/Card/ListCard";
import { titleCase } from "src/utils/utils";
import Link from "next/link";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersButton from "../../(components)/MobileFilter/MobileFiltersButton";
import useMobileFiltersDrawer from "../../(components)/MobileFilter/useMobileFiltersDrawer";
import MobileFiltersDrawer from "../../(components)/MobileFilter/MobileFiltersDrawer";

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

  const { isOpen, onOpen, onClose, filtersCount } = useMobileFiltersDrawer([
    ...roles,
    ...types,
  ]);
  return (
    <PageLayout
      sectionHeaderTitle={seo.title}
      sectionHeaderDescription={seo.subtitle}
      sectionHeaderBottomContent={
        <MobileFiltersButton
          filtersCount={filtersCount}
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
          <CustomRole items={roles} refine={refineRoles} />
          <CustomType items={types} refine={refineTypes} />
        </Box>
      }
      main={
        <Box>
          <CustomHits />
          <MobileFiltersDrawer isOpen={isOpen} onClose={onClose}>
            <CustomRole items={roles} refine={refineRoles} />
            <CustomType items={types} refine={refineTypes} />
          </MobileFiltersDrawer>
        </Box>
      }
    />
  );
};
function CustomRole({
  items,
  refine,
}: {
  items: RefinementListProps["items"];
  refine: (value: string) => void;
}) {
  return (
    <Box>
      <Heading variant="h6" mb={4}>
        Role
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refine(item.value)}
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
}: {
  items: RefinementListProps["items"];
  refine: (value: string) => void;
}) {
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
              variant={item.isRefined ? "filterActive" : "filter"}
              size="sm"
              onClick={() => refine(item.value)}
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

type Hit = {
  contact: Contact;
  job: Job;
};

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<Hit>();

  return (
    <>
      <Flex gap={4} direction="column" flex={1}>
        {hits.map((hit, i) => {
          let tags: string[] = [];
          if (hit.job.role) tags.push(hit.job.role);
          if (hit.job.type) tags.push(hit.job.type);
          if (hit.job.location) tags.push(hit.job.location);
          return (
            <ListCard
              variant="job"
              key={i}
              startDateTime={hit.contact.name}
              image={hit.contact.logo}
              title={hit.job.title}
              description={hit.job.description}
              type={tags}
              href={hit.job.apply_url}
            />
          );
        })}
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
