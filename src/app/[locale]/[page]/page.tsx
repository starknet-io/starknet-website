import { use } from "react";
import { getPageByFilename } from "src/data/pages";
import { PageContentContainer } from "../(components)/PageContentContainer";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly page: string;
  };
}

export default function Page({ params }: Props): JSX.Element {
  const { title, MDXContent } = use(
    getPageByFilename(params.page, params.locale)
  );

  return (
    <PageContentContainer>
      <>
        <h2>{title}</h2>
        <MDXContent />
      </>
      <div>Content nav</div>
    </PageContentContainer>
  );
}
