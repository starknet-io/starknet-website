
import React, { useState } from "react";
import { slugify } from "@starknet-io/cms-utils/src/index";
import * as Toc from "@ui/TableOfContents/TableOfContents";
import { Heading } from "@ui/Typography/Heading";

export interface HeadingData {
  readonly title: string;
  readonly level: number;
}

interface Props {
  readonly headings: readonly HeadingData[];
  readonly tocCustomTitle?: string;
}

export function TableOfContents(props: Props) {
  const [activeId, setActiveId] = useState();

  const headingElementsRef = React.useRef({});
  React.useEffect(() => {
    const callback = (headings: any) => {
      headingElementsRef.current = headings.reduce(
        (map: any, headingElement: any) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current,
      );

      const visibleHeadings: any[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        // @ts-expect-error
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: any) =>
        props.headings.findIndex((h) => `toc-${slugify(h.title)}` === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: any, b: any): any =>
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    props.headings.forEach((h) => {
      const el = document.getElementById(`toc-${slugify(h.title)}`);
      
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [props.headings, setActiveId]);

  return (
    <Toc.Root spacing={3}>
      <Heading
        py="16px"
        pl="16px"
        textTransform="uppercase"
        variant="h6"
        color="heading-navy-fg"
      >
        {props.tocCustomTitle ? props.tocCustomTitle : "On this page"}
      </Heading>
      {props.headings.map((h, i) => (
        <Toc.Item key={i} isActive={`toc-${slugify(h.title)}` === activeId} pl={`${h.level * 16}px`}>
          <a style={{ lineHeight: '1.7em' }} href={`#toc-${slugify(h.title)}`}>{h.title}</a>
        </Toc.Item>
      ))}
    </Toc.Root>
  );
}
