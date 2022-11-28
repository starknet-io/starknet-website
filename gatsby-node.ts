import { GatsbyNode } from "gatsby";
import path from "path";
import i18nConfig from "./i18n/config.json";

const languages = new Set(i18nConfig.map((c) => c.code));
const defaultLanguage = "en";

const commonRedirectProps = {
  isPermanent: true,
  ignoreCase: true,
  force: true,
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
              path
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
      id: `content-mdx-${node.frontmatter.path}-${node.fields.locale}`,
      component: node.internal.contentFilePath,
    });
  });

  posts.forEach(({ childMdx: node }: any) => {
    if (node.fields.isDefault) {
      createRedirect({
        ...commonRedirectProps,
        fromPath: node.frontmatter.path,
        toPath: `/${defaultLanguage}${node.frontmatter.path}`,
      });

      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          slug: node.frontmatter.path,
          locale: node.fields.locale,
        },
        slices: {
          "content-mdx": `content-mdx-${node.frontmatter.path}-${node.fields.locale}`,
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
