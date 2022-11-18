import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";
import i18nConfig from "./i18n/config.json";

const languages = new Set(i18nConfig.map((c) => c.code));
const defaultLanguage = "en";

const commonRedirectProps = {
  isPermanent: true,
  ignoreCase: true,
  force: true,
};

export const onCreateNode: GatsbyNode<{
  fileAbsolutePath: string;
}>["onCreateNode"] = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // if (node.internal.type === "Mdx") {
  //   const match = node.internal.contentFilePath?.match(/content\/(\w{2})\/.+\.mdx?/);

  //   let locale = defaultLanguage;

  //   if (match != null) {
  //     locale == match[1];
  //   }

  //   createNodeField({ node, name: `locale`, value: locale });
  //   createNodeField({
  //     node,
  //     name: `isDefault`,
  //     value: locale == defaultLanguage,
  //   });
  // }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage, createRedirect, createSlice } = actions;

  const postTemplate = path.resolve("./src/templates/Post.tsx");

  const result = await graphql<any>(`
    {
      posts: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMdx {
            id
            fields {
              locale
              isDefault
            }
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const posts = result.data.posts.nodes;

  posts.forEach(({ childMdx: node }: any) => {
    createSlice({
      id: `content-mdx-${node.frontmatter.slug}-${node.fields.locale}`,
      component: node.internal.contentFilePath,
    });
  });

  posts.forEach(({ childMdx: node }: any) => {
    if (node.fields.isDefault) {
      createRedirect({
        ...commonRedirectProps,
        fromPath: node.frontmatter.slug,
        toPath: `${defaultLanguage}/${node.frontmatter.slug}`,
      });

      createPage({
        // As mentioned above you could also query something else like frontmatter.title above and use a helper function
        // like slugify to create a slug
        path: node.frontmatter.slug,
        // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
        component: postTemplate,
        // You can use the values in this context in
        // our page layout component
        context: {
          slug: node.frontmatter.slug,
          locale: node.fields.locale,
        },
        slices: {
          "content-mdx": `content-mdx-${node.frontmatter.slug}-${node.fields.locale}`,
        },
      });
    }
  });
};

export const onPostBootstrap: GatsbyNode["onPostBootstrap"] = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    ...commonRedirectProps,
    fromPath: "/",
    toPath: `/${defaultLanguage}`,
  });

  languages.forEach((lang) => {
    createRedirect({
      ...commonRedirectProps,
      fromPath: `/${lang}/*`,
      toPath: `/${lang}/404`,
      statusCode: 404,
      force: false,
    });
  });
};
