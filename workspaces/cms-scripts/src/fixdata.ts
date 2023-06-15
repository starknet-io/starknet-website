import fs from "fs/promises";
import * as path from "path";
import * as dotenv from "dotenv";
import { google } from "googleapis";
import YAML from "yaml";

process.chdir(path.resolve(__dirname, "../../.."));

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

import { yaml } from "./utils";
import { youtubeVideoIdFromURL } from "@starknet-io/cms-utils/src";

const resourceName = "posts";
const filenames = await fs.readdir(`_data/${resourceName}`);

for (const filename of filenames) {
  const filepath = path.join("_data", resourceName, filename);

  const data = await yaml(filepath);

  if (data.video) {
    const id = youtubeVideoIdFromURL(data.video.url);

    if (id) {
      data.video.id = id;

      const youtube = google.youtube({
        version: "v3",
        auth: process.env.YOUTUBE_API_KEY,
      });

      const res = await youtube.videos.list({
        id: [id],
        part: ["snippet", "contentDetails"],
      });

      data.video.data = res.data?.items?.[0];
    }

    await fs.writeFile(filepath, YAML.stringify(data), {
      encoding: "utf8",
    });
  }
}
