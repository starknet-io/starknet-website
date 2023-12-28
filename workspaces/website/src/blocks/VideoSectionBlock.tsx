/**
 * Module dependencies
 */

import { Box, Show } from "@chakra-ui/react";
import {
  VideoSectionBlock as VideoSectionProps,
  ChapterInfo
} from "@starknet-io/cms-data/src/pages";

import { CategoryTabs } from "@ui/CategoryTabs/CategoryTabs";
import { Heading } from "@ui/Typography/Heading";
import { Chapter, playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
import { useMemo, useState } from "react";
import { MarkdownBlock } from "./MarkdownBlock";

/**
 * `ChapterType` type.
 */

type ChapterType = Chapter & ChapterInfo;

/**
 * Export `VideoSectionBlock` component.
 */

export default function VideoSectionBlock(props: VideoSectionProps) {
  const { playlistOnBottom, chapterDescriptionFullWidth } = props;

  const normalizedPlaylist = useMemo(() => {
    return playlist.map((chapter) => {
      const chapterInfo = props[chapter.id as keyof VideoSectionProps] as ChapterInfo;
      return ({
        ...chapter,
        ...chapterInfo
      }) as ChapterType;
    });
  }, [props, playlist])

  const [currentChapter, setCurrentChapter] = useState<ChapterType>(normalizedPlaylist[0]);

  return (
    <Box>
      <Heading
        color="heading-navy-fg"
        variant="h2"
        fontSize={"32px"}
        marginBottom={"24px"}
      >
        {currentChapter.title}
      </Heading>

      <VideoPlayerWebsite
        chapters={normalizedPlaylist}
        initialActiveChapter={normalizedPlaylist[0].id}
        onChapterChange={(id) => 
          setCurrentChapter(normalizedPlaylist.find((p) => p.id === id) ?? normalizedPlaylist[0])
        }
        playlistOnBottom={playlistOnBottom}
      />

      <Box marginTop={{ base: "32px", lg: !playlistOnBottom ? "64px" : "32px"  }}>
        <Show above="lg">   
          <CategoryTabs
            activeItemId={currentChapter.id}
            onTabClick={(id) => 
              setCurrentChapter(normalizedPlaylist.find((p) => p.id === id) ?? normalizedPlaylist[0])
            }
            items={normalizedPlaylist.map((p) => ({
              id: p.id,
              label: p.subtitle,
            }))}
            playlistOnBottom={playlistOnBottom}
          />
        </Show>

        <Box
          maxW={chapterDescriptionFullWidth ? "100%" : "656px"}
          marginInline="auto"
          marginTop={'32px'}
        >
          <MarkdownBlock body={currentChapter.content} />
        </Box>
      </Box>
    </Box>
  );
}
