import PagePage, { Props } from "src/app/[...slug]/page";
import NotFound from "@ui/NotFound/NotFound";
import { usePageContext } from "src/renderer/PageContextProvider";
import { DocumentProps } from "src/renderer/types";

export function Page({ data }: Props): JSX.Element {
  const { locale } = usePageContext();

  if (data == null) {
    return <NotFound type="page" />;
  }

  return <PagePage params={{ locale }} data={data} />;
}

export function getDocumentProps({ data }: Props): DocumentProps {
  return {
    title: data.title,
  };
}
