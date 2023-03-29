import { playlist } from "@ui/VideoPlayer/constants";
import getVideoMetadata from "@ui/VideoPlayer/meta/getVideoMetadata";
import { VideoPlayer } from "@ui/VideoPlayer/player/VideoPlayer";

export async function generateMetadata({
  params: { videoId },
}: {
  params: { videoId: string };
}) {
  return getVideoMetadata(videoId);
}

interface Props extends VideoIdProps {}

export default function Page({ params }: Props) {
  const { videoId } = params;
  return <VideoPlayer chapters={playlist} initialActiveChapter={videoId} />;
}
