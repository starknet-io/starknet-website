"use client";
import { HeadingsItems } from "@ui/HeadingNav/HeadingsNav";
import { useHeadingsData, useIntersectionObserver } from "@ui/HeadingNav/hooks";
import { useState } from "react";

export const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents">
      <HeadingsItems headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};
