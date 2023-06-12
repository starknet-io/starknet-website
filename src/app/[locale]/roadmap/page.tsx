import { generateGenericMetadata } from "src/utils/seo";
import RoadmapsPage from "./(components)/RoadmapPage";
import {
  getRoadmapPosts,
  getRoadmapVersions,
} from "workspaces/cms-data/src/roadmap";
import { getRoadmapSettings } from "@starknet-io/cms-data/src/settings/roadmap";

export const generateMetadata = () => generateGenericMetadata("Roadmap");

export default async function Page(props: LocaleProps) {
  const roadmapPosts = await getRoadmapPosts(props.params.locale);
  const roadmapVersions = await getRoadmapVersions(props.params.locale);
  const roadmapSettings = await getRoadmapSettings(props.params.locale);

  return (
    <RoadmapsPage
      roadmapPosts={roadmapPosts}
      locale={props.params.locale}
      roadmapVersions={roadmapVersions}
      roadmapSettings={roadmapSettings}
    />
  );
}
