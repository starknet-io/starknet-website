import { defaultLocale } from "./i18n";
import { getFirst, getMDXModule } from "./utils";

interface Topic {
  readonly id: string;
  readonly name: string;
}

export async function getTopicByFilename(
  filename: string,
  locale: string,
): Promise<Topic> {
  try {
    return await getFirst(
      () => getMDXModule(`topics/${locale}/${filename}.md`),
      () => getMDXModule(`topics/${defaultLocale}/${filename}.md`),
    );
  } catch (cause) {
    throw new Error(`Topic not found! ${filename}`, {
      cause,
    });
  }
}
