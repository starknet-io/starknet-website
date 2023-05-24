import { generateGenericMetadata } from "src/utils/seo";
import RoadmapsPage from "./(components)/RoadmapsPage";
import { getRoadmapPosts } from "./utils";

export const generateMetadata = () => generateGenericMetadata("Roadmap");

export default function Page(props: LocaleProps) {
  const roadmapPosts = getRoadmapPosts();

  return (
    <RoadmapsPage roadmapPosts={roadmapPosts} locale={props.params.locale} />
  );
}
