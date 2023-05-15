import { generateGenericMetadata } from "src/utils/seo";
import Page from "./[...slug]/page";

export const generateMetadata = () => generateGenericMetadata();

export default async function Index({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  return <Page params={{ locale, slug: ["home"] }} />;
}
