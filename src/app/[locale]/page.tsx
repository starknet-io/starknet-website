import Page from "./[...slug]/page";

export const dynamic = "force-dynamic";

export default async function Index({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  return <Page params={{ locale, slug: ["home"] }} />;
}
