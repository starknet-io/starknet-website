import React from "react";
import * as GridCard from "@ui/Card/GridCard";
import { Tag } from "@ui/Tag/Tag";
import { HStack } from "@chakra-ui/react";
import moment from "moment";

export type Tutorial = {
  readonly id?: string;
  readonly type: "youtube" | "blog" | "github";
  readonly url: string;
  readonly image?: string;
  readonly title: string;
  readonly author?: string;
  readonly published_at: string;
  readonly difficulty?: "beginner" | "intermediate" | "advanced";
  readonly tags?: string[];
  readonly locale: string;
  readonly filepath: string;
};

type TutorialsCardProps = {
  hit: Tutorial;
};
export default function TutorialsCard({ hit }: TutorialsCardProps) {
  const date = moment(hit.published_at).format("MMM DD, YYYY");

  return (
    <GridCard.Root href={`tutorials/video/${hit.id}`} key={hit.title}>
      <GridCard.Image url={hit.image} type={hit.type} />
      <GridCard.Body>
        {/* <GridCard.Category category={hit.tags} /> */}
        <GridCard.Content
          title={hit.title}
          author={hit.author}
          date={date}
          difficulty={hit.difficulty}
        />
      </GridCard.Body>
      <GridCard.Footer>
        <HStack spacing="8px">
          {Array.isArray(hit?.tags) &&
            hit.tags.map((tag, i) => {
              // only show max 2 tags
              if (i > 1) return null;
              return (
                <Tag key={i} variant="listCard">
                  {tag}
                </Tag>
              );
            })}
        </HStack>
      </GridCard.Footer>
    </GridCard.Root>
  );
}
