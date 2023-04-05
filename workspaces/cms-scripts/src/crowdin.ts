import * as path from "node:path";
import { collections } from "@starknet-io/cms-config/src/collections";
import { yaml } from "./utils";
import { getFirst, getJSON, getString } from "@starknet-io/cms-utils/src/node";

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

export type Collection = (typeof collections)[number];
export type FileCollection = Extract<Collection, { files: any }>;
export type CollectionFile = FileCollection["files"][0];
export type CollectionWithFields = Extract<Collection, { fields: any }>;
export type Fields = CollectionWithFields["fields"];

export type FieldWithTypes = Extract<Fields[number], { types: any }>;
export type FieldWithTypesFields =
  FieldWithTypes["types"][number]["fields"][number];
export type FieldWithTypesWithFields = Extract<
  Fields[number] | FieldWithTypesFields,
  { fields: any }
>;

export type Field =
  | Fields[number]
  | FieldWithTypes["types"][number]["fields"][number]
  | FieldWithTypesWithFields["fields"][number];

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
      collectionFile.fields as Field[],
      translationFilepath
    );
  } else if ("folder" in collection) {
    return translateFields(data, collection.fields, translationFilepath);
  } else {
    collection satisfies never;
  }
}

async function translateFields(data: any, fields: Field[], filepath: string) {
  let translatedData: any = null;

  for (const field of fields) {
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
        if (translatedData == null) {
          translatedData = await getFirst(
            () => getJSON("../" + filepath + ".json"),
            async () => ({})
          );
        }

        data[field.name] = translatedData[field.name] ?? data[field.name];

        break;

      case "object":
        if ("fields" in field) {
          data[field.name] = await translateFields(
            data[field.name],
            field.fields,
            filepath + "_" + field.name
          );
        }
        break;

      case "markdown":
        data[field.name] = await getFirst(
          () => getString("../" + filepath + "_" + field.name + ".md"),
          () => data[field.name]
        );
        break;

      case "list":
        const fieldData = data[field.name];

        if (Array.isArray(fieldData)) {
          for (const index of fieldData.keys()) {
            if ("types" in field) {
              const type = field.types.find(
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
                field.fields,
                filepath + "_" + field.name + "_" + index
              );
            }
          }
        }

        break;

      default:
        field satisfies never;
    }
  }

  return data;
}

export function handleFields(
  files: Files[],
  data: any,
  fields: Field[],
  filepath: string
) {
  const jsonFile: JsonFile = {
    type: "json",
    data: {},
    filepath,
  };

  files.push(jsonFile);

  fields.forEach((field) => {
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
            files,
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
