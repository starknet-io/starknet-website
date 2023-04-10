import { playlist } from "@ui/VideoPlayer/constants";
import getVideoMetadata from "@ui/VideoPlayer/getVideoMetadata";
import { ThemeProvider } from "../providers/ThemeProvider";
import VideoEmbedPage from "./(components)/VideoEmbedPage";

interface VideoParams {
  searchParams: { chapter: string };
}
export async function generateMetadata({
  searchParams: { chapter = playlist[0].id },
}: VideoParams) {
  return getVideoMetadata(chapter);
}

export default function Page({
  searchParams: { chapter = playlist[0].id },
}: VideoParams) {
  return <VideoEmbedPage chapter={chapter} />;
}
