import PagePage from "src/app/[...slug]/page";
import NotFound from "@ui/NotFound/NotFound";
import { usePageContext } from "src/renderer/usePageContext";

export function Page({ data }: any): JSX.Element {
  const locale = usePageContext().locale;

  if (data == null) {
    return <NotFound type="page" />;
  }

  return <PagePage params={{ locale }} data={data} />;
}
