import fs from "node:fs/promises";
import * as path from "node:path";
import * as dotenv from "dotenv";
import { collections } from "@starknet-io/cms-config/src/collections";

process.chdir(path.resolve(__dirname, "../../.."));

const dotenvFiles = [".env.local", ".env"];

dotenvFiles.forEach((path) => dotenv.config({ path }));

import { yaml } from "./utils";

type JsonFile = {
  type: "json";
  data: { [key: string]: string };
  filepath: string;
};

type MarkdownFile = {
  type: "markdown";
  data: string;
  filepath: string;
};

type Files = JsonFile | MarkdownFile;

type Collection = (typeof collections)[number];
type CollectionWithFields = Extract<Collection, { fields: any }>;
type Fields = CollectionWithFields["fields"];

type FieldWithTypes = Extract<Fields[number], { types: any }>;
type FieldWithTypesFields = FieldWithTypes["types"][number]["fields"][number];
type FieldWithTypesWithFields = Extract<
  Fields[number] | FieldWithTypesFields,
  { fields: any }
>;

type Field =
  | Fields[number]
  | FieldWithTypes["types"][number]["fields"][number]
  | FieldWithTypesWithFields["fields"][number];

const files: Files[] = [];

for (const collection of collections) {
  if ("files" in collection) {
    for (const collectionFile of collection.files) {
      const data = await yaml(collectionFile.file);

      handleFields(
        data,
        collectionFile.fields as Field[],
        path.join(collection.name, path.basename(collectionFile.file, ".yml"))
      );
    }
  } else if ("folder" in collection) {
    const filenames = await fs.readdir(collection.folder);

    for (const filename of filenames) {
      const filepath = path.join(collection.folder, filename);
      const data = await yaml(filepath);

      handleFields(
        data,
        collection.fields,
        path.join(collection.name, path.basename(filename, ".yml"))
      );
    }
  } else {
    collection satisfies never;
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

function handleFields(data: any, fields: Field[], filepath: string) {
  const jsonFile: JsonFile = {
    type: "json",
    data: {},
    filepath,
  };

  files.push(jsonFile);

  fields.forEach((field) => {
    // console.log(field.widget, field.name);
    // console.log(data[field.name]);

    switch (field.widget) {
      case "number":
      case "boolean":
      case "datetime":
      case "image":
      case "relation":
      case "select":
      case "hidden":
        // we don't translate this
        break;

      case "text":
      case "string":
        jsonFile.data[field.name] = data[field.name];
        break;

      case "object":
        if ("fields" in field) {
          handleFields(
            data[field.name],
            field.fields,
            filepath + "_" + field.name
          );
        }
        break;

      case "markdown":
        files.push({
          type: "markdown",
          data: data[field.name],
          filepath: filepath + "_" + field.name,
        });
        break;

      case "list":
        if (Array.isArray(data[field.name])) {
          (data[field.name] as any[]).forEach((data: any, index) => {
            if ("types" in field) {
              const type = field.types.find(
                (type) => type.name === data["type"]
              );

              if (type != null) {
                // console.log(type)
                handleFields(
                  data,
                  type.fields,
                  filepath + "_" + field.name + "_" + index
                );
              } else {
                console.log("type not found");
              }
            } else if ("fields" in field) {
              handleFields(
                data,
                field.fields,
                filepath + "_" + field.name + "_" + index
              );
            }
          });
        }

        break;

      default:
        field satisfies never;
    }
  });
}
