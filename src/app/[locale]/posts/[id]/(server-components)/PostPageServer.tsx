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
    params.locale,
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
