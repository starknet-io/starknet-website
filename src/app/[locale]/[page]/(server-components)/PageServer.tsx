import { getContentByFilename } from "src/data/content-at-runtime";

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
    params.locale
  );

  return (
    <div className="mx-auto  max-w-7xl px-2 sm:px-4 lg:px-8 pt-7">
      <div className="prose">
        <h2>{title}</h2>
        <MDXContent />
      </div>
    </div>
  );
}
