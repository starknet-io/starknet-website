"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import {
  Box
} from "src/libs/chakra-ui";

interface Tutorial {
  id: string;
  title: string;
  url: string;
  tags: string[];
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

  return <PageLayout
    sectionHeaderTitle={tutorial.title}
    main={<div>
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
      <iframe width="100%" height="600px" src={embedUrl} frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>}/>;
}

export default TutorialPage;