import "./live-preview.css";
import LivePreivewPage from "./(componnets)/LivePreivewPage";
import { ThemeProvider } from "../providers/ThemeProvider";
import getBlocksDynamicData from "../[locale]/(components)/utils/getBlocksDynamicData";
import { getTopics } from "workspaces/cms-data/src/topics";
import { getCategories } from "workspaces/cms-data/src/categories";

export default async function Page() {
  const blocksDynamicData = await getBlocksDynamicData("en");
  const topics = await getTopics("en");
  const categories = await getCategories("en");

  return (
    <ThemeProvider>
      <LivePreivewPage
        blocksDynamicData={blocksDynamicData}
        topics={topics}
        categories={categories}
      />
    </ThemeProvider>
  );
}
