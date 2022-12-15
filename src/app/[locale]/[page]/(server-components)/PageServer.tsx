import { getContentByFilename } from "../../../../data/content";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly page: string;
  };
}

// @ts-expect-error Server Component
export async function PageServer({ params }: Props): JSX.Element {
  const { title, MDXContent } = await getContentByFilename(
    params.page,
    params.locale,
  );

  return (
    <>
      <h1>{title}</h1>
      <MDXContent />
    </>
  );
}
