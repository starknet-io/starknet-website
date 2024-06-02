import {
  Box,
  Heading,
  Image,
  Stack,
  List,
  ListItem,
  HStack,
  Circle,
  Text,
} from "@chakra-ui/react";
import {
  DappsProps,
  TagObject,
} from "@starknet-io/cms-data/src/starknet-db-projects-dapps";
import { Button } from "@ui/Button";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@chakra-ui/react";
import { navigate } from "vite-plugin-ssr/client/router";
import useQueryString from "src/hooks/useQueryString";
import { IoSearchOutline } from "react-icons/io5";

enum SORT_BY {
  ALL = "All",
  MAINNET = "Mainnet",
  TESTNET = "Testnet",
}

const DappsPage = ({ list, categories }: DappsProps) => {
  const [searchValue, setSearchValue] = useState<string>();
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    TagObject | undefined
  >();

  const queryParams = useQueryString();

  useEffect(() => {
    const { category, sortBy, searchValue } = queryParams;
    const fullCategory = categories.find((item) => item.slug === category);
    setSelectedCategory(fullCategory);
    setSortBy(sortBy);
    setSearchValue(searchValue || "");
  }, [queryParams]);

  const url = new URL(window.location.href);
  useEffect(() => {
    if (!selectedCategory?.slug && !sortBy && !searchValue) {
      navigate(url.pathname);
      return;
    }

    const queryParams = new URLSearchParams();
    selectedCategory && queryParams.set("category", selectedCategory.slug);
    sortBy && queryParams.set("sortBy", sortBy);
    searchValue && queryParams.set("searchValue", searchValue);

    navigate(`${url.pathname}?${queryParams.toString()}`, {
      keepScrollPosition: true,
    });
  }, [searchValue, sortBy, selectedCategory, url.pathname]);
  const projects = useMemo(() => {
    const byCategory =
      selectedCategory !== undefined
        ? list.filter((item) => item.tags.includes(selectedCategory.slug))
        : list;
    if (!searchValue) return byCategory;
    return byCategory.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }, [selectedCategory, searchValue]);

  const projectsSort = useMemo(() => {
    if (sortBy === SORT_BY.MAINNET)
      return projects.filter((project) => project.isLive);
    if (sortBy === SORT_BY.TESTNET)
      return projects.filter((project) => project.isTestnetLive);
    else return projects;
  }, [sortBy, projects]);

  const handleChangeCategory = (category: string | undefined) => {
    const fullCategory = categories.find((item) => item.slug === category);
    setSelectedCategory(fullCategory);
  };

  return (
    <>
      <>
        <Stack display="flex" direction="row" gap="100px">
          <List display="flex" flexDir="column" gap="5px">
            <Heading color="#0C0C4F" fontSize={18} fontWeight={600}>
              Categories
            </Heading>
            <ListItem display="flex">
              {selectedCategory === undefined && (
                <Box w="2px" h="40px" bgGradient="linear(#EC796B,#D672EF)" />
              )}
              <Button
                sx={{
                  color: selectedCategory === undefined ? "#0C0C4F" : "#6B7280",
                  fontSize: 14,
                  fontWeight: 400,
                }}
                variant="none"
                onClick={() => handleChangeCategory(undefined)}
              >
                All
              </Button>
            </ListItem>
            {categories.map((category) => {
              return (
                <ListItem key={category.slug} display="flex">
                  {selectedCategory === category && (
                    <Box
                      w="2px"
                      h="40px"
                      bgGradient="linear(#EC796B,#D672EF)"
                    />
                  )}
                  <Button
                    variant="none"
                    sx={{
                      color:
                        selectedCategory === category ? "#0C0C4F" : "#6B7280",
                      fontSize: 14,
                      fontWeight: 400,
                    }}
                    onClick={() => handleChangeCategory(category.slug)}
                  >
                    {category.label.charAt(0).toUpperCase() +
                      category.label.slice(1).replace("_", " ")}
                  </Button>
                </ListItem>
              );
            })}
          </List>
          <Box w="100%">
            <HStack justifyContent="space-between">
              <Box>
                <HStack gap="8px">
                  {Object.values(SORT_BY).map((sortByItem) => (
                    <Button
                      variant="none"
                      fontSize={12}
                      px="16px"
                      py="8px"
                      bgColor={
                        sortBy === sortByItem ||
                        (sortByItem === SORT_BY.ALL && !sortBy)
                          ? "#0C0C4F"
                          : "#F6F6F6"
                      }
                      color={
                        sortBy === sortByItem ||
                        (sortByItem === SORT_BY.ALL && !sortBy)
                          ? "#FFFFFF"
                          : "#6B7280"
                      }
                      onClick={() => setSortBy(sortByItem)}
                    >
                      {sortByItem}
                    </Button>
                  ))}
                </HStack>
              </Box>
              <HStack
                bgColor="white"
                px="18px"
                py="4px"
                borderRadius="8px"
                cursor="pointer"
              >
                <IoSearchOutline size={20} />
                <Input
                  border="none"
                  p="0"
                  outline="none"
                  _focus={{ border: "none" }}
                  _focusVisible={{ border: "none" }}
                  cursor="pointer"
                  bgColor="transparent"
                  fontSize="14px"
                  defaultValue={searchValue}
                  placeholder="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </HStack>
            </HStack>
            <List display="flex" flexWrap="wrap" gap="20px" mt="40px">
              {projectsSort.map((item) => {
                return (
                  <ListItem
                    width={{ base: "343px", sm: "373px", md: "323px" }}
                    height="286px"
                    bgColor="white"
                    padding="32px"
                    key={item.name}
                    borderRadius="8px"
                  >
                    <Circle size="56px" bgColor="red" mb={3}>
                      <Image
                        src={item.network.twitterImage}
                        loading="lazy"
                        fit="fill"
                        borderRadius="100%"
                      />
                    </Circle>
                    <Text noOfLines={1} mb="8px" fontSize={18} fontWeight={600}>
                      {item.name}
                    </Text>
                    <Text noOfLines={2}>{item.description}</Text>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Stack>
      </>
    </>
  );
};

export default DappsPage;
