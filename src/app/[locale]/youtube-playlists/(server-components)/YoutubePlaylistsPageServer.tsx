import { google } from "googleapis";

// @ts-expect-error Server Component
export async function YoutubePlaylistsPageServer(): JSX.Element {
  const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
  });

  const { data: playlists } = await youtube.playlists.list({
    part: ["snippet", "contentDetails"],
    channelId: "UCnDWguR8mE2oDBsjhQkgbvg",
    maxResults: 20,
  });

  return (
    <>
      <div className="container mx-auto my-2">
        <div
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {playlists.items?.map((item) => (
            <a
              key={item.id}
              className="relative"
              href={`https://www.youtube.com/playlist?list=${item.id}`}
            >
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    item.snippet?.thumbnails?.maxres?.url ??
                    item.snippet?.thumbnails?.standard?.url ??
                    item.snippet?.thumbnails?.high?.url ??
                    item.snippet?.thumbnails?.medium?.url ??
                    item.snippet?.thumbnails?.default?.url!
                  }
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {item.snippet?.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {item.snippet?.channelTitle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
