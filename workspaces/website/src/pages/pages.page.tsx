import PagePage from "src/app/[...slug]/page";
import { useLocale } from "../app/(components)/ClientLocaleProvider";
import NotFound from "@ui/NotFound/NotFound";

export function Page({ data }: any): JSX.Element {
  const locale = useLocale();

  if (data == null) {
    return <NotFound type="page" />;
  }

  return <PagePage params={{ locale }} data={data} />;
}
