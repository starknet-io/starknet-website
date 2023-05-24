import { generateGenericMetadata } from "src/utils/seo";
import RoadmapsPage from "./(components)/RoadmapsPage";
import { getRoadmapPosts } from "workspaces/cms-data/src/roadmap";

export const generateMetadata = () => generateGenericMetadata("Roadmap");

export default async function Page(props: LocaleProps) {
  const roadmapPosts = await getRoadmapPosts(props.params.locale);

  return (
    <RoadmapsPage roadmapPosts={roadmapPosts} locale={props.params.locale} />
  );
}
