import { playlist } from "@ui/VideoPlayer/utils";
import { VideoPlayer } from "@ui/VideoPlayer/control-custom/VideoPlayerWebsite";
import VideoPlayerPage from "./VideoPlayerPage";

export const metadata = {
  title: "Video Tutorials",
};

interface Props extends VideoIdProps {}

export default function Page({ params }: Props) {
  const { videoId } = params;
  return <VideoPlayerPage videoId={videoId} />;
}
