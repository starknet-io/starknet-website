import React from "react";
import { graphql, Slice } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";

const shortcodes = { Link };

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
      <MDXProvider components={shortcodes}>
        <Slice
          alias={`blog-${
            data.mdx.fields.locale
          }-${data.mdx.frontmatter.slug.replace(/\//g, "--")}`}
        />
      </MDXProvider>
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
