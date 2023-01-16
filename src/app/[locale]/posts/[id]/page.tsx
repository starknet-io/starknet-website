import { notFound } from "next/navigation";
import { use } from "react";
import { getPostByFilename } from "src/data/posts";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly id: string;
  };
}

export default function Page({ params }: Props): JSX.Element {
  try {
    const { title, MDXContent } = use(
      getPostByFilename(params.id, params.locale),
    );

    return (
      <div className="mx-auto  max-w-7xl px-2 sm:px-4 lg:px-8 pt-7">
        <div className="prose">
          <h2>{title}</h2>
          <MDXContent />
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
