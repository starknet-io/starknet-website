import remarkParse from "remark-parse";
import { unified } from "unified";
import { Index } from "unist-util-index";

import { TopLevelBlock } from "@starknet-io/cms-data/src/pages";
import { HeadingData } from "./TableOfContents";

export function blocksToTOC(blocks: readonly TopLevelBlock[] = [], level: number, tableOfContents: HeadingData[] = []): readonly HeadingData[] {
  blocks.forEach((block) => {
    if(block.type === 'page_header'){
      return
    }
    else if (block.type === "container") {
      blocksToTOC(block.blocks, level, tableOfContents);
    } else if (block.type === "flex_layout" || block.type === "group") {
      if (!block.heading) {
        blocksToTOC(block.blocks, level, tableOfContents);
      } else {
        const headingData: HeadingData = {
          title: block.heading,
          level,
        };
        tableOfContents.push(headingData);
        blocksToTOC(block.blocks, level + 1, tableOfContents);
      }
    } else if (block.type === "ordered_block") {
      const sortedBlocks = Array.from(block.blocks || []).sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      const blockItems: HeadingData[] = sortedBlocks.map((block) => {
        return {
          title: block.title,
          level
        };
      });

      tableOfContents.push(...blockItems);
    } else if (block.type === "accordion") {
      if (block.heading != null) {
        const headingData: HeadingData = {
          title: block.heading,
          level
        };
        tableOfContents.push(headingData);
      }
    } else if (block.type === "markdown") {
      const processor = unified()
        .use(remarkParse)
        .use(() => {
          return (tree: any) => {
            const typeIndex = new Index("type", tree);
            const headings = typeIndex.get("heading");

            const headingItems: HeadingData[] = headings.map((node: any) => {
              const textNode = node.children.find((n: any) => {
                return n.type === "text";
              });

              return {
                title: textNode?.value ?? "",
                level
              };
            });

            tableOfContents.push(...headingItems);
          };
        });

      const node = processor.parse(block.body);
      processor.runSync(node);
    } else if ("title" in block) {
      const headingData: HeadingData = {
        title: block.title,
        level
      };
      tableOfContents.push(headingData);
    } else if ("heading" in block && block.heading != null) {
      const headingData: HeadingData = {
        title: block.heading,
        level
      };
      tableOfContents.push(headingData);
    }
  });

  return tableOfContents;
}
