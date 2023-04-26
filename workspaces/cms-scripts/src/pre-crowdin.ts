import fs from "node:fs/promises";
import * as path from "node:path";
import * as dotenv from "dotenv";
import { collections } from "@starknet-io/cms-config/src/collections";

process.chdir(path.resolve(__dirname, "../../.."));

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

import { scandir, yaml } from "./utils";
import { Files, handleFields } from "./crowdin";
import { CmsField } from "@starknet-io/cms-config/src/types";

const files: Files[] = [];

for (const collection of collections) {
  if (collection.crowdin) {
    if ("files" in collection) {
      for (const collectionFile of collection.files) {
        if (collectionFile.crowdin) {
          const data = await yaml(collectionFile.file);

          handleFields(
            files,
            data,
            collectionFile.fields as CmsField[],
            path.join(collection.name, path.basename(collectionFile.file, ".yml"))
          );
        }
      }
    } else if ("folder" in collection) {
      const filenames = await scandir(path.join("_data", collection.name));

      for (const filename of filenames) {
        const filepath = path.join("_data", collection.name, filename);
        const data = await yaml(filepath);

        handleFields(
          files,
          data,
          collection.fields,
          path.join(collection.name, path.basename(filename, ".yml"))
        );
      }
    } else {
      collection satisfies never;
    }
  }
}

await fs.mkdir("_crowdin/source", {
  recursive: true,
});

for (const collection of collections) {
  await fs.mkdir(path.join("_crowdin/source", collection.name), {
    recursive: true,
  });
}

for (const file of files) {
  if (file.type == "json") {
    await fs.writeFile(
      path.join("_crowdin/source", file.filepath + ".json"),
      JSON.stringify(file.data, undefined, "  "),
      {
        encoding: "utf8",
      }
    );
  } else if (file.type === "markdown") {
    await fs.writeFile(
      path.join("_crowdin/source", file.filepath + ".md"),
      file.data,
      {
        encoding: "utf8",
      }
    );
  }
}
