import { defaultLocale } from "./i18n/config";
import { Meta, getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";
import { TopLevelBlock } from "./pages";

export interface AnnouncementsPost extends Meta {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly badge: string;
  readonly blocks: readonly TopLevelBlock[];
}

export async function getAnnouncements(
  locale: string
): Promise<readonly AnnouncementsPost[]> {
  try {
    const announcements: AnnouncementsPost[] = [];

    const filesInDir = await fs.readdir(
      path.join(process.cwd(), "../../public/data/announcements", locale)
    );

    const jsonFilesInDir = filesInDir.filter((file) => file.endsWith(".json"));

    for (const fileName of jsonFilesInDir) {
      const fileData = await fs.readFile(
        path.join(
          process.cwd(),
          "../../public/data/announcements",
          locale,
          fileName
        ),
        "utf8"
      );
      const jsonData = JSON.parse(fileData.toString());
      announcements.push(jsonData);
    }

    return announcements;
  } catch (cause) {
    throw new Error("getAnnouncements failed!");
  }
}

export async function getAnnouncementsPostBySlug(
  slug: string,
  locale: string
): Promise<AnnouncementsPost> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "../../public/data/announcements",
                value,
                slug + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error(`Announcement not found! ${slug}`);
  }
}
