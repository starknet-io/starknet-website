import type { Page as PageType } from "@starknet-io/cms-data/src/pages";
import { usePageContext } from "src/renderer/PageContextProvider";
import CMSPage from "./(components)/CMSPage";

export interface Props {
  readonly data: PageType;
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  }
}

export default function Page(props: Props): JSX.Element {
  const { locale } = usePageContext();
  const { data, env } = props;

  return (
    <CMSPage
      data={data}
      env={env}
      locale={locale}
      />
  );
}

