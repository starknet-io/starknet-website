import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

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

  if (node.internal.type === "Mdx") {
    let slug = createFilePath({ node, getNode, basePath: "content/posts" });
    let lang = defaultLanguage;

    if (/^[/]\w{2}[/]/.test(slug)) {
      lang = slug.split("/")[1];
    } else {
      slug = `/${defaultLanguage}${slug}`;
    }

    createNodeField({
      node,
      name: "lang",
      value: lang,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  // const { createPage, createRedirect, createSlice } = actions;

  // createRedirect({
  //   ...commonRedirectProps,
  //   fromPath: "/",
  //   toPath: `/${defaultLanguage}`,
  // });

  // const postTemplate = path.resolve("./src/templates/Post.tsx");

  // const result = await graphql<any>(`
  //   {
  //     posts: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
  //       nodes {
  //         childMdx {
  //           id
  //           fields {
  //             locale
  //             isDefault
  //           }
  //           frontmatter {
  //             slug
  //           }
  //           internal {
  //             contentFilePath
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // if (result.errors) {
  //   reporter.panicOnBuild("Error loading MDX result", result.errors);
  // }

  // const posts = result.data.posts.nodes;

  // posts.foreach(({ childMdx: node }: any) => {
  //   return [
  //     `mdx-${node.id}`,
  //     createSlice({
  //       id: `blog-${node.fields.locale}-${}`,
  //       component: node.internal.contentFilePath,
  //     }),
  //   ];
  // });

  // posts.forEach(({ childMdx: node }: any) => {
  //   if (node.fields.isDefault) {
  //     createRedirect({
  //       ...commonRedirectProps,
  //       fromPath: node.frontmatter.slug,
  //       toPath: `${defaultLanguage}/${node.frontmatter.slug}`,
  //     });

  //     createPage({
  //       // As mentioned above you could also query something else like frontmatter.title above and use a helper function
  //       // like slugify to create a slug
  //       path: node.frontmatter.slug,
  //       // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
  //       component: postTemplate,
  //       // You can use the values in this context in
  //       // our page layout component
  //       context: { slug: node.frontmatter.slug },
  //     });
  //   }
  // });
};
