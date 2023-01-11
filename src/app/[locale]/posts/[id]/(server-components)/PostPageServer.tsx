import { PageContentContainer } from "src/app/[locale]/(components)/PageContentContainer";
import { getPostByFilename } from "src/data/posts";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly id: string;
  };
}

// @ts-expect-error Server Component
export async function PostPageServer({ params }: Props): JSX.Element {
  const { title, MDXContent } = await getPostByFilename(
    params.id,
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
