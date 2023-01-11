import { getPageByFilename } from "src/data/pages";
import { PageContentContainer } from "../../(components)/PageContentContainer";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly page: string;
  };
}

// @ts-expect-error Server Component
export async function PageServer({ params }: Props): JSX.Element {
  const { title, MDXContent } = await getPageByFilename(
    params.page,
    params.locale
  );

  return (
    <PageContentContainer>
      <div className="prose">
        <h2>{title}</h2>
        <MDXContent />
      </div>
    </PageContentContainer>
  );
}
