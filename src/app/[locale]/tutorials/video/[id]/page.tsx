import { notFound } from "next/navigation";
import React from "react";
import TutorialVideoPage, { AutoProps } from "./(components)/TutorialVideoPage";
import { getTutorialById } from "workspaces/cms-data/src/tutorials";

export default async function TutorialVideo({ params }: AutoProps) {
  const { locale, id } = params;

  try {
    const tutorial = await getTutorialById(id, locale);
    if (tutorial?.type !== "youtube") {
      throw new Error("Tutorial is not a video");
    }
    return <TutorialVideoPage tutorial={tutorial} params={params} />;
  } catch (error) {
    notFound();
  }
}
