import "./live-preview.css";
import LivePreivewPage from "./(componnets)/LivePreivewPage";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { Category } from "@starknet-io/cms-data/src/categories";

export interface Props {
  readonly categories: readonly Category[];
  readonly topics: readonly Topic[];
}

export default async function Page({categories, topics}: Props) {
  
  return (
    <ThemeProvider>
      <LivePreivewPage
        topics={topics}
        categories={categories}
      />
    </ThemeProvider>
  );
}
