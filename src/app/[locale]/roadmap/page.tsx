import { generateGenericMetadata } from "src/utils/seo";
import RoadmapsPage from "./(components)/RoadmapPage";
import {
  getRoadmapPosts,
  getRoadmapVersions,
} from "workspaces/cms-data/src/roadmap";

export const generateMetadata = () => generateGenericMetadata("Roadmap");

export default async function Page(props: LocaleProps) {
  const roadmapPosts = await getRoadmapPosts(props.params.locale);
  const roadmapVersions = await getRoadmapVersions(props.params.locale);

  return (
    <RoadmapsPage
      roadmapPosts={roadmapPosts}
      locale={props.params.locale}
      roadmapVersions={roadmapVersions}
    />
  );
}
