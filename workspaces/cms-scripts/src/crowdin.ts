import path from "node:path";
import { collections } from "@starknet-io/cms-config/src/collections";
import { yaml } from "./utils";
import fs from "node:fs/promises";
import { CmsField } from "@starknet-io/cms-config/src/types";

export type JsonFile = {
  type: "json";
  data: { [key: string]: string };
  filepath: string;
};

export type MarkdownFile = {
  type: "markdown";
  data: string;
  filepath: string;
};

export type Files = JsonFile | MarkdownFile;

export async function translateFile(
  locale: string,
  collectionName: string,
  filename: string
) {
  const collection = collections.find((c) => c.name === collectionName)!;
  const dataFilepath = path.join("_data", collection.name, filename);
  const translationFilepath = path.join(
    "_crowdin",
    "translation",
    locale,
    collection.name,
    path.basename(filename, ".yml")
  );
  const data = await yaml(dataFilepath);

  if ("files" in collection) {
    const collectionFile = collection.files.find(
      (f) => path.basename(f.file) === filename
    )!;

    return translateFields(
      data,
      collectionFile.fields as CmsField[],
      translationFilepath
    );
  } else if ("folder" in collection) {
    return translateFields(data, collection.fields, translationFilepath);
  } else {
    collection satisfies never;
  }
}

async function translateFields(data: any, fields: CmsField[], filepath: string) {
  let translatedData: any = null;

  for (const field of fields) {
    if (field.crowdin !== false) {
      switch (field.widget) {
        case "text":
        case "string":
          if (translatedData == null) {
            try {
              const file = await fs.readFile(
                path.join(process.cwd(), filepath + ".json"),
                "utf8",
              );

              translatedData = JSON.parse(file);
            } catch { }
          }

          data[field.name] = translatedData?.[field.name] ?? data?.[field.name];

          break;

        case "object":
          if ("fields" in field) {
            if (data[field.name] != null) {
              data[field.name] = await translateFields(
                data[field.name],
                field.fields,
                filepath + "_" + field.name
              );
            }
          }
          break;

        case "markdown":
          try {
            data[field.name] = await fs.readFile(
              path.join(process.cwd(), filepath + "_" + field.name + ".md"),
              "utf8",
            );
          } catch { }

          break;

        case "list":
          const fieldData = data[field.name];

          if (Array.isArray(fieldData)) {
            for (const index of fieldData.keys()) {
              if ("types" in field) {
                const type = field.types?.find(
                  (type) => type.name === fieldData[index]["type"]
                );

                if (type != null) {
                  fieldData[index] = await translateFields(
                    fieldData[index],
                    type.fields,
                    filepath + "_" + field.name + "_" + index
                  );
                } else {
                  console.log("type not found");
                }
              } else if ("fields" in field) {
                fieldData[index] = await translateFields(
                  fieldData[index],
                  field.fields ?? [],
                  filepath + "_" + field.name + "_" + index
                );
              }
            }
          }

          break;
      }
    }
  }

  return data;
}

export function handleFields(
  files: Files[],
  data: any,
  fields: CmsField[],
  filepath: string
) {
  const jsonFile: JsonFile = {
    type: "json",
    data: {},
    filepath,
  };

  files.push(jsonFile);

  fields.forEach((field) => {
    if (field.crowdin !== false) {


      switch (field.widget) {
        case "string":
        case "text":
          jsonFile.data[field.name] = data[field.name];
          break;


        case "object":
          if ("fields" in field) {
            if (data[field.name] != null) {
              handleFields(
                files,
                data[field.name],
                field.fields,
                filepath + "_" + field.name
              );
            }
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
                const type = field.types?.find(
                  (type) => type.name === data["type"]
                );

                if (type != null) {
                  handleFields(
                    files,
                    data,
                    type.fields,
                    filepath + "_" + field.name + "_" + index
                  );
                } else {
                  console.log("type not found");
                }
              } else if ("fields" in field) {
                handleFields(
                  files,
                  data,
                  field.fields ?? [],
                  filepath + "_" + field.name + "_" + index
                );
              }
            });
          }

          break;
      }
    }
  });
}
