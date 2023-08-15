import React, { useState, useEffect } from 'react';
import { Box, Flex } from "@chakra-ui/react";
import StarknetProject from "./StarknetProject";
import './OutlineCardsStyle.css';

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
    }
  };

type CircleProps = {
  items: Project[];
  direction: 'left' | 'right';
};

const CircleRow: React.FC<CircleProps> = ({ items, direction }) => {
  const totalItems = items.length % 2 === 0 ? items.length : items.length - 1;
  const itemsPerRow = totalItems / 2;
  const [firstRowItems, setFirstRowItems] = useState<Project[]>(items.slice(0, itemsPerRow));
  const [secondRowItems, setSecondRowItems] = useState<Project[]>(items.slice(itemsPerRow, itemsPerRow * 2));

  useEffect(() => {
    setFirstRowItems(items.slice(0, itemsPerRow))
    setSecondRowItems(items.slice(itemsPerRow, itemsPerRow * 2))
  }, [items])

  const handleFirstRowErrorImg = (image: string) => {
    const updatedFirstRow = firstRowItems.filter(item => item.image !== image);
    setFirstRowItems(updatedFirstRow);

    if (updatedFirstRow.length < secondRowItems.length) {
      setSecondRowItems(secondRowItems.slice(0, -1));
    }
  };

  const handleSecondRowErrorImg = (image: string) => {
    const updatedSecondRow = secondRowItems.filter(item => item.image !== image);
    setSecondRowItems(updatedSecondRow);

    if (updatedSecondRow.length < firstRowItems.length) {
      setFirstRowItems(firstRowItems.slice(0, -1));
    }
  };

  return (
    <Box overflow="visible" position="relative" height="200">
      <Box className="rssBlock">
        <div className={direction === "left" ? "marqueeStyle": "marqueeStyleRight"}>
          {firstRowItems.map((item, index) => (
            <StarknetProject project={item} key={index} handleErrorImg={handleFirstRowErrorImg} />
          ))}
        </div>
        <div className={direction === "left" ? "marqueeStyle2": "marqueeStyle2Right"}>
          {secondRowItems.map((item, index) => (
            <StarknetProject project={item} key={index} handleErrorImg={handleSecondRowErrorImg} />
          ))}
        </div>
      </Box>
    </Box>
  );
};

const StarknetProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.starknet-db.com/projects?page=0&size=200');
        const data: ApiResponse = await response.json();

        const formattedProjects: Project[] = data.content.map((project: any) => ({
          name: project.name,
          image: project.network.twitterImage,
          url: project.network.website,
        }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProjects = projects.filter(item => item.image !== undefined && item.url !== undefined)
  const itemsPerRow = Math.ceil(filteredProjects.length / 3);
  const firstRowItems = filteredProjects.slice(0, itemsPerRow);
  const secondRowItems = filteredProjects.slice(itemsPerRow, itemsPerRow * 2);
  const thirdRowItems = filteredProjects.slice(itemsPerRow * 2);

  if (filteredProjects) {

  return (
    <Flex
      direction="column"
      gap="24px"
      overflow="visible"
      height="600px"
    >
      <CircleRow items={firstRowItems} direction="right" />
      <CircleRow items={secondRowItems} direction="left" />
      <CircleRow items={thirdRowItems} direction="right" />
    </Flex>
  )
} else {
  return null;
}
};

export default StarknetProjects;