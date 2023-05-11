import LivePreivewPage from "./(componnets)/LivePreivewPage";
import { ThemeProvider } from "../providers/ThemeProvider";
import getBlocksDynamicData from "../[locale]/(components)/utils/getBlocksDynamicData";
import { getTopics } from "workspaces/cms-data/src/topics";
import "./live-preview.css";

type PageProps = {
  searchParams: {
    type: string;
  };
};
export default async function Page({ searchParams }: PageProps) {
  if (searchParams.type === "PAGE") {
    const blocksDynamicData = await getBlocksDynamicData("en");
    return (
      <ThemeProvider>
        <LivePreivewPage blocksDynamicData={blocksDynamicData} />
      </ThemeProvider>
    );
  }
  if (searchParams.type === "POST") {
    const blocksDynamicData = await getBlocksDynamicData("en");
    const topics = await getTopics("en");
    return (
      <ThemeProvider>
        <LivePreivewPage
          blocksDynamicData={blocksDynamicData}
          topics={topics}
        />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider>
      <LivePreivewPage />
    </ThemeProvider>
  );
}
