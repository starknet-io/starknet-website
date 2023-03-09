import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayerInWebsite } from "@ui/VideoPlayer/VideoPlayerInWebsite";

export const metadata = {
  title: "Video Tutorials",
};

interface Props extends VideoIdProps {}

export default function Page({ params }: Props) {
  const { videoId } = params;
  return (
    <VideoPlayerInWebsite chapters={playlist} initialActiveChapter={videoId} />
  );
}
