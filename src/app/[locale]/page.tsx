import Page from "./[...slug]/page";

export default async function Index({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  return <Page params={{ locale, slug: ["home"] }} />;
}
