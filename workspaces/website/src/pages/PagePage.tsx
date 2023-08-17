import type { Page as PageType } from "@starknet-io/cms-data/src/pages";
import { usePageContext } from "src/renderer/PageContextProvider";
import CMSPage from "./(components)/CMSPage";
import { SocialMediaData } from "@starknet-io/cms-data/src/getSocialMediaData";

export interface Props {
  readonly data: PageType;
  readonly socialMedia: SocialMediaData
}

export default function Page({ 
  data,
  socialMedia,
}: Props): JSX.Element {
  const { locale } = usePageContext();
  console.log("socialMedia", socialMedia)

  return (
    <CMSPage
      data={data}
      locale={locale}
      />
  );
}

