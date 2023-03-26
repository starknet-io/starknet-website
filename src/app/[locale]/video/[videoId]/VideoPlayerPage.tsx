import { VideoPlayer } from "@ui/VideoPlayer/player/VideoPlayer";
import { playlist } from "@ui/VideoPlayer/constants";

export default function VideoPlayerPage({ videoId }: { videoId: string }) {
  return <VideoPlayer chapters={playlist} initialActiveChapter={videoId} />;
}
