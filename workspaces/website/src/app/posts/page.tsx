// import { getCategories } from "@starknet-io/cms-data/src/categories";
// import { getTopics } from "@starknet-io/cms-data/src/topics";
// import { PostsPage } from "./(components)/PostsPage";

export const metadata = {
  title: "Blog",
};

// export default async function Page(props: LocaleProps) {
//   const categories = await getCategories(props.params.locale);
//   const topics = await getTopics(props.params.locale);

//   return (
//     <>
//       <PostsPage
//         {...props}
//         categories={categories}
//         topics={topics}
//         env={{
//           ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
//           ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
//           ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
//         }}
//       />
//     </>
//   );
// }
