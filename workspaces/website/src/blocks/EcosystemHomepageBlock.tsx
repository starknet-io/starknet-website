import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import StarknetProject from "./StarknetProject";
import "./OutlineCardsStyle.css";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { EcosystemBlock as EcosystemBlockType } from "@starknet-io/cms-data/src/pages";
import { useCMSLink } from "src/utils/useCMSLink";

type Project = {
  name: string;
  image: string;
  url: string;
};

type ApiResponse = {
  content: {
    network: {
      twitterImage: string;
      website: string;
    }[];
  };
};

type CircleProps = {
  items: Project[];
  direction: "left" | "right";
};

const CircleRow: React.FC<CircleProps> = ({ items, direction }) => {
  const totalItems = items.length % 2 === 0 ? items.length : items.length - 1;
  const itemsPerRow = totalItems;
  const [firstRowItems, setFirstRowItems] = useState<Project[]>(
    items.slice(0, itemsPerRow)
  );

  useEffect(() => {
    setFirstRowItems(items.slice(0, itemsPerRow));
  }, [items]);

  const handleFirstRowErrorImg = (image: string) => {
    const updatedFirstRow = firstRowItems.filter(
      (item) => item.image !== image
    );
    setFirstRowItems(updatedFirstRow);
  };

  return (
    <Box overflow="visible" position="relative" height="200">
      <Box className="rssBlock">
        <div
          className={
            direction === "left" ? "marqueeStyle" : "marqueeStyleRight"
          }
        >
          {firstRowItems.map((item, index) => (
            <StarknetProject
              project={item}
              key={index}
              handleErrorImg={handleFirstRowErrorImg}
            />
          ))}
          {firstRowItems.map((item, index) => (
            <StarknetProject
              project={item}
              key={index}
              handleErrorImg={handleFirstRowErrorImg}
            />
          ))}
          {firstRowItems.map((item, index) => (
            <StarknetProject
              project={item}
              key={index}
              handleErrorImg={handleFirstRowErrorImg}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};

interface EcosystemBlockProps extends EcosystemBlockType {}

const EcosystemBlock = ({ title, ctaText, ctaUrl }: EcosystemBlockProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { isAbsolute, href } = useCMSLink(ctaUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.starknet-db.com/projects?page=0&size=200"
        );
        const data: ApiResponse = await response.json();

        const formattedProjects: Project[] = data.content.map(
          (project: any) => ({
            name: project.name,
            image: project.network.twitterImage,
            url: project.network.website,
          })
        );

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProjects = projects.filter(
    (item) => item.image !== undefined && item.url !== undefined
  );
  const itemsPerRow = Math.ceil(filteredProjects.length / 3);
  const firstRowItems = filteredProjects.slice(0, itemsPerRow);
  const secondRowItems = filteredProjects.slice(itemsPerRow, itemsPerRow * 2);
  const thirdRowItems = filteredProjects.slice(itemsPerRow * 2);

  if (filteredProjects) {
    return (
      <Box
        bg="brand-secondary-comet-green-3"
        padding="15% 50px"
        sx={{
          "clip-path": "polygon(0 14vw,100% 0,100% calc(100% - 14vw),0 100%)",
          backgroundImage: "url(/assets/outline-bg.svg)",
          backgroundSize: "130%",
          backgroundPosition: "center",
          marginTop: { base: 0, lg: -100 },
        }}
      >
        <Box
          maxW={{ base: "contentMaxW.lg", md: "contentMaxW.xl" }}
          px={{
            base: "page.left-right.base",
            md: "page.left-right.md",
          }}
          width="100%"
          m="0 auto"
          pt="10px"
        >
          <Heading
            variant="h2"
            color="heading-navy-fg"
            pt="40px"
            pb="120px"
            borderTop="1px solid"
            borderColor="border.divider"
          >
            {title}
          </Heading>
        </Box>
        <Flex direction="column" gap="24px" overflow="visible" height="600px">
          <CircleRow items={firstRowItems} direction="right" />
          <CircleRow items={secondRowItems} direction="left" />
          <CircleRow items={thirdRowItems} direction="right" />
        </Flex>
        <Flex maxW="1036px" width="100%" m="0 auto" justifyContent="center">
          <Button
            variant="outline"
            mt="140px"
            bg="brand-secondary-comet-green-3"
            href={href}
            isExternal={isAbsolute}
          >
            {ctaText}
          </Button>
        </Flex>
      </Box>
    );
  } else {
    return null;
  }
};

export default EcosystemBlock;
