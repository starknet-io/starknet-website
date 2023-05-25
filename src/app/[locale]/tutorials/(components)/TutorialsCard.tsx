import React from "react";
import * as GridCard from "@ui/Card/GridCard";
import { Tag } from "@ui/Tag/Tag";
import { HStack } from "@chakra-ui/react";
import moment from "moment";
import { Tutorial } from "workspaces/cms-data/src/tutorials";

type TutorialsCardProps = {
  hit: Tutorial;
};
export default function TutorialsCard({ hit }: TutorialsCardProps) {
  const date = moment(hit.published_at).format("MMM DD, YYYY");

  return (
    <GridCard.Root
      href={hit.type === "youtube" ? `tutorials/video/${hit.id}` : hit.url}
      key={hit.title}
      newTab={hit.type !== "youtube"}
    >
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
