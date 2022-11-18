import React from "react";
import { graphql, Slice } from "gatsby";

interface Props {
  readonly children: React.ReactNode;
  readonly data: any;
}

export default function PageTemplate({ data, children }: Props) {
  if (data.mdx == null) {
    return <div>This page hasn't been translated yet</div>;
  }

  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>

      <Slice alias='content-mdx' allowEmpty/>
    </>
  );
}

export const query = graphql`
  query ($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
      }
      fields {
        locale
        isDefault
      }
    }
  }
`;
