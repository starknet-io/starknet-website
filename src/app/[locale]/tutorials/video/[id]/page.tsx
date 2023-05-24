"use client";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Flex
} from "@chakra-ui/react";
import Link from "next/link";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import * as GridCard from "@ui/Card/GridCard";
import moment from "moment";

export interface AutoProps {
  readonly params: {
    readonly locale: string;
  };
}

interface Tutorial {
  id: string;
  title: string;
  url: string;
  tags: string[];
  author: string;
  difficulty: string;
  published_at: string;
}


function TutorialPage({ params }: AutoProps): JSX.Element | null {
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const pathname = usePathname()!;
  
  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await axios.get<Tutorial>(`/api/getTutorialById?id=${`tutorials:uk:${pathname.split('/').pop()}.yml`}`);
        setTutorial(response.data);
      } catch (error) {
        // handle error
      }
    };

    fetchTutorial();
  }, [pathname]);

  if (!tutorial) {
    return <div>Loading...</div>;
  }
  const videoId = tutorial.url.split('/').pop();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const date = moment(tutorial.published_at).format("MMM DD, YYYY");
  return <PageLayout
    sectionHeaderTitle={tutorial.title}
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
            href={`/${params.locale}/developers`}
            fontSize="sm"
            noOfLines={1}
          >
            Developers
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            href={`/${params.locale}/tutorials`}
            fontSize="sm"
            noOfLines={1}
          >
            Tutorials
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontSize="sm">{tutorial.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    }
    main={<div>
      <Box width="100%" height={{base: "250px", sm: "350px", md: "500px", lg: "650px"}}>
        <iframe width="100%" height="100%" src={embedUrl} frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Box>
      <Flex mb="4" mt="4" direction="row">
        <GridCard.Content
          title={''}
          author={tutorial.author}
          date={date}
          difficulty={tutorial.difficulty}
          direction="row"
        />
        <Flex height="40px" ml="24px">
          {Array.isArray(tutorial.tags) &&
          tutorial.tags.map((tag, i) => {
            // only show max 2 tags
            if (i > 1) return null;
            return (
              <Tag key={i} variant="listCard">
                {tag}
              </Tag>
            );
          })}
        </Flex>
      </Flex>
    </div>}/>;
}

export default TutorialPage;