import React from "react";
// import { graphql, Slice } from "gatsby";
// import { PageLayout } from "../components/Layout";

interface Props {
  readonly children: React.ReactNode;
  readonly data: any;
}

export default function PageTemplate({ data, children }: Props) {
  if (data.mdx == null) {
    return <div>This page hasn&apos;t been translated yet</div>;
  }

  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>

      {/* <Slice alias='content-mdx' allowEmpty={true} /> */}
    </>
  );
}

export const query = `
  query ($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { path: { eq: $slug } }
    ) {
      frontmatter {
        title
        path
      }
      fields {
        locale
        isDefault
      }
    }
  }
`;
