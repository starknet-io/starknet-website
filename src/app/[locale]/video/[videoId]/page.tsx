import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayer } from "@ui/VideoPlayer/control-custom/VideoPlayerWebsite";

export const metadata = {
  title: "Video Tutorials",
};

interface Props extends VideoIdProps {}

export default function Page({ params }: Props) {
  const { videoId } = params;
  return <VideoPlayer chapters={playlist} initialActiveChapter={videoId} />;
}
