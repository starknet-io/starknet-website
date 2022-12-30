import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFileCompatible } from "@mdx-js/mdx/lib/compile";

interface Post {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly topic: string;
  readonly short_desc: string;
}

async function fileToPost(file: VFileCompatible): Promise<Post> {
  const code = await mdx.compile(file, {
    development: false,
    outputFormat: "function-body",
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  });

  const { id, title, category, topic, short_desc } = await mdx.run(code, {
    ...runtime,
  });

  return { id, title, category, topic, short_desc } satisfies Post;
}

try {
  const rootPath = path.resolve(__dirname, "../../..");
  const postsPath = path.resolve(rootPath, "_data/posts");

  const dotenvFiles = [
    path.resolve(rootPath, ".env.local"),
    path.resolve(rootPath, ".env"),
  ];

  dotenvFiles.forEach((path) => dotenv.config({ path }));

  const indexName = "web_posts_dev";

  const objects = [];

  for await (const locale of await fs.readdir(postsPath)) {
    const files = await fs.readdir(path.resolve(postsPath, locale));

    for (const filename of files) {
      const file = await fs.readFile(path.resolve(postsPath, locale, filename));

      objects.push({
        ...(await fileToPost(file)),
        locale,
        filepath: path.join("_data/posts", locale, filename),
      });
    }
  }

  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID!,
    process.env.ALGOLIA_WRITE_API_KEY!,
  );
  const index = client.initIndex(indexName);

  await index
    .replaceAllObjects(objects, {
      safe: true,
      autoGenerateObjectIDIfNotExist: true,
    })
    .wait();
} catch (err) {
  console.error(err);
}
