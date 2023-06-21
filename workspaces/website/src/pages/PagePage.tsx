import type { Page as PageType } from "@starknet-io/cms-data/src/pages";
import { usePageContext } from "src/renderer/PageContextProvider";
import CMSPage from "./(components)/CMSPage";

export interface Props {
  readonly data: PageType;
}

export default function Page({ 
  data,
}: Props): JSX.Element {
  const { locale } = usePageContext();

  return (
    <CMSPage
      data={data}
      locale={locale}
      />
  );
}

