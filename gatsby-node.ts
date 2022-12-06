import { GatsbyCache, GatsbyNode } from "gatsby";
import path from "path";
import i18nConfig from "./i18n/config.json";
import {
  createFileNodeFromBuffer,
  FileSystemNode,
  CreateFileNodeFromBufferArgs,
} from "gatsby-source-filesystem";
import { google, youtube_v3 } from "googleapis";
import * as dotenv from "dotenv";

dotenv.config();

const languages = new Set(i18nConfig.map((c) => c.code));
const defaultLanguage = "en";

const commonRedirectProps = {
  isPermanent: true,
  ignoreCase: true,
  force: true,
};

type CreateFileNodeBaseArgs = Omit<CreateFileNodeFromBufferArgs, "buffer">;

interface CreateFileNodeFromURLArgs extends CreateFileNodeBaseArgs {
  readonly url: string;
}

async function createFileNodeFromURL(
  args: CreateFileNodeFromURLArgs
): Promise<FileSystemNode> {
  const res = await fetch(args.url);
  const buffer = Buffer.from(await res.arrayBuffer());

  return await createFileNodeFromBuffer({
    ...args,
    buffer,
  });
}

export interface CreateFileNodeFromThumbnailsArgs
  extends CreateFileNodeBaseArgs {
  readonly thumbnails: youtube_v3.Schema$ThumbnailDetails | undefined | null;
}

async function createFileNodeFromThumbnails(
  args: CreateFileNodeFromThumbnailsArgs
) {
  const url =
    args.thumbnails?.maxres?.url ??
    args.thumbnails?.standard?.url ??
    args.thumbnails?.high?.url ??
    args.thumbnails?.medium?.url ??
    args.thumbnails?.default?.url;

  if (url == null) {
    return undefined;
  }

  return await createFileNodeFromURL({
    ...args,
    url,
  });
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
  reporter,
  cache,
}) => {
  try {
    const youtube = google.youtube({
      version: "v3",
      auth: process.env.YOUTUBE_API_KEY,
    });

    const { data: playlists } = await youtube.playlists.list({
      part: ["snippet", "contentDetails"],
      channelId: "UCnDWguR8mE2oDBsjhQkgbvg",
      maxResults: 20,
    });

    for await (const playlist of playlists.items ?? []) {
      if (playlist.contentDetails?.itemCount! === 0) {
        continue
      }

      const playlistNodeId = createNodeId(playlist.id!);

      const image = await createFileNodeFromThumbnails({
        thumbnails: playlist.snippet?.thumbnails,
        createNode,
        createNodeId,
        parentNodeId: playlistNodeId,
        cache,
      });

      await createNode({
        remoteImage___NODE: image?.id,
        id: playlistNodeId,
        youTubePlaylist: playlist,
        internal: {
          type: "YouTubePlaylists",
          contentDigest: createContentDigest(playlist),
        },
      });

      const { data: playlistItems } = await youtube.playlistItems.list({
        part: ["snippet"],
        playlistId: playlist.id!,
        maxResults: 20,
      });
      for await (const playlistItem of playlistItems.items ?? []) {
        const playlistItemNodeId = createNodeId(playlistItem.id!);

        const image = await createFileNodeFromThumbnails({
          thumbnails: playlistItem.snippet?.thumbnails,
          createNode,
          createNodeId,
          parentNodeId: playlistItemNodeId,
          cache,
        });

        await createNode({
          remoteImage___NODE: image?.id,
          id: playlistItemNodeId,
          parentNodeId: playlistNodeId,
          youTubePlaylistItem: playlistItem,
          internal: {
            type: "YouTubePlaylistItem",
            contentDigest: createContentDigest(playlist),
          },
        });
      }
    }
  } catch (err: any) {
    console.log(err);
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage, createRedirect, createSlice } = actions;

  const postTemplate = path.resolve("./src/templates/Post.tsx");

  const result = await graphql<any>(`
    {
      posts: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMdx {
            id
            fields {
              locale
              isDefault
            }
            frontmatter {
              path
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const posts = result.data.posts.nodes;

  posts.forEach(({ childMdx: node }: any) => {
    createSlice({
      id: `content-mdx-${node.frontmatter.path}-${node.fields.locale}`,
      component: node.internal.contentFilePath,
    });
  });

  posts.forEach(({ childMdx: node }: any) => {
    if (node.fields.isDefault) {
      createRedirect({
        ...commonRedirectProps,
        fromPath: node.frontmatter.path,
        toPath: `/${defaultLanguage}${node.frontmatter.path}`,
      });

      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          slug: node.frontmatter.path,
          locale: node.fields.locale,
        },
        slices: {
          "content-mdx": `content-mdx-${node.frontmatter.path}-${node.fields.locale}`,
        },
      });
    }
  });
};

export const onPostBootstrap: GatsbyNode["onPostBootstrap"] = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    ...commonRedirectProps,
    fromPath: "/",
    toPath: `/${defaultLanguage}`,
  });

  languages.forEach((lang) => {
    createRedirect({
      ...commonRedirectProps,
      fromPath: `/${lang}/*`,
      toPath: `/${lang}/404`,
      statusCode: 404,
      force: false,
    });
  });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "settings") {
    const parent = getNode(node.parent!)!;
    const match = parent.internal.description?.match(
      /\/settings\/(\w{2})\/.+\.yml?/
    );

    let lang = defaultLanguage;

    if (match != null) {
      lang = match[1];
    }

    createNodeField({ node, name: "locale", value: lang });
    createNodeField({
      node,
      name: "isDefault",
      value: lang === defaultLanguage,
    });
  }
};
