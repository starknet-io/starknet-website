"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import {
  Box
} from "src/libs/chakra-ui";
import * as GridCard from "@ui/Card/GridCard";
import moment from "moment";
interface Tutorial {
  id: string;
  title: string;
  url: string;
  tags: string[];
  author: string;
  difficulty: string;
  published_at: string;
}

const TutorialPage: React.FC = () => {
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
    main={<div>
      <Box width="100%" height={{base: "250px", sm: "350px", md: "500px", lg: "650px"}}>
        <iframe width="100%" height="100%" src={embedUrl} frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Box>
      <Box mb="4" mt="4">
        <GridCard.Content
          title={''}
          author={tutorial.author}
          date={date}
          difficulty={tutorial.difficulty}
        />
      </Box>
      <Box mb="4">
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
      </Box>
    </div>}/>;
}

export default TutorialPage;