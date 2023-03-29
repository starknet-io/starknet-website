import { VideoPlayer } from "@ui/VideoPlayer/player/VideoPlayer";
import { playlist } from "@ui/VideoPlayer/constants";
import getVideoMetadata from "@ui/VideoPlayer/meta/getVideoMetadata";

export async function generateMetadata({
  params: { videoId },
}: {
  params: { videoId: string };
}) {
  return getVideoMetadata(videoId);
}

export default function VideoPlayerPage({ videoId }: { videoId: string }) {
  return (
    <>
      {/* <MetaVideo chapter={videoId} /> */}
      <VideoPlayer chapters={playlist} initialActiveChapter={videoId} />
    </>
  );
}
