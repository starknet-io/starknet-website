import { TutorialsPage, Props } from "./(components)/TutorialsPage";

export const metadata = {
  title: "Tutorials",
};

export default function Page(props: Omit<Props, "env">) {
  return (
    <>
      <TutorialsPage
        {...props}
        env={{
          ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
