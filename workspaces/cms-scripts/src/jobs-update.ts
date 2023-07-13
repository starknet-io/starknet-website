import fs from "fs/promises";
import * as path from "path";
import YAML from "yaml";
process.chdir(path.resolve(__dirname, "../../.."));

import { yaml } from "./utils";

async function updateJobs() {
  const resourceName = "jobs";
  const filenames = await fs.readdir(`_data/${resourceName}`);

  for (const filename of filenames) {
    const filepath = path.join("_data", resourceName, filename);

    const data = await yaml(filepath);
    const isOlderThanTwoMonths = (dateString: string) => {
      const date = new Date(dateString);
      const today = new Date();
      today.setMonth(today.getMonth() - data.archive_after);
      return date < today;
    }
    const isOlder = isOlderThanTwoMonths(data.published_at);
    if (isOlder) {
      data.status = "archived";
    }
    await fs.writeFile(filepath, YAML.stringify(data), {
      encoding: "utf8",
    });
  }
}
updateJobs();
