import { DefaultLogFields, ListLogLine, simpleGit } from "simple-git";

const git = simpleGit();

const cache: {
  [key: string]: Promise<(DefaultLogFields & ListLogLine) | null>;
} = {};

export async function gitlog(
  filepath: string,
): Promise<(DefaultLogFields & ListLogLine) | null> {
  if (cache[`log-${filepath}`] == null) {
    cache[`log-${filepath}`] = (async () => {
      const logResult = await git.log({
        file: filepath,
        maxCount: 1,
      });

      return logResult.latest
        ? {
            ...logResult.latest,
            body: "",
          }
        : null;
    })();
  }

  return cache[`log-${filepath}`];
}
