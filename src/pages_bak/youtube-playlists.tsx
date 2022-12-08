import * as React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { PageLayout } from "../components/Layout";
import Image from "next/image";

export default function YoutubePlaylists(props: PageProps<any>) {
  return (
    <PageLayout>
      <div className="container mx-auto my-2">
        <div
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {props.data.playlists.nodes.map(
            ({ youTubePlaylist, remoteImage }: any) => (
              <a
                key={youTubePlaylist.id}
                className="relative"
                href={`https://www.youtube.com/playlist?list=${youTubePlaylist.id}`}
              >
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    src={remoteImage.publicURL}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {youTubePlaylist.snippet.title}
                </p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">
                  {youTubePlaylist.snippet.channelTitle}
                </p>
              </a>
            ),
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export function Head(props: HeadProps<any>) {
  return <title>youtube playlists</title>;
}

export const query = graphql`
  {
    playlists: allYouTubePlaylists {
      nodes {
        youTubePlaylist {
          id
          snippet {
            title
            description
            channelId
            channelTitle
            publishedAt
          }
        }
        remoteImage {
          publicURL
        }
      }
    }
  }
`;
