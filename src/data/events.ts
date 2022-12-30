import fs from "node:fs/promises";
import path from "node:path";

export interface Event {
  readonly name: string;
  readonly image: string;
  readonly start_date: Date;
  readonly end_date: Date;
  readonly location: string; //'{"type":"Point","coordinates":[-7.0944214,53.1764117]}'
  readonly location_name: string;
  readonly url: string;
}

function mdxToEvent(data: any): Event {
  return data;
}

export async function getEventByFilename(
  filename: string,
  locale: string,
): Promise<Event> {
  try {
    return mdxToEvent(await import(`../events/${locale}/${filename}.md`));
  } catch {}

  try {
    return mdxToEvent(await import(`../events/en/${filename}.md`));
  } catch {}

  throw new Error(`Event not found! ${filename}`);
}

export async function getEvents(locale: string): Promise<readonly Event[]> {
  try {
    const files = await fs.readdir(
      path.resolve(__dirname, "../../../../../_data/events", locale),
    );

    return Promise.all(
      files.map((file) =>
        getEventByFilename(path.basename(file, ".md"), locale),
      ),
    );
  } catch {}
  try {
    const locale = "en";
    const files = await fs.readdir(
      path.resolve(__dirname, "../../../../../_data/events", locale),
    );

    return Promise.all(
      files.map((file) =>
        getEventByFilename(path.basename(file, ".md"), locale),
      ),
    );
  } catch {}

  throw new Error("Events not found!");
}
