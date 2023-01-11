import { use } from "react";
import { getPostByFilename } from "src/data/posts";
import { PageContentContainer } from "../../(components)/PageContentContainer";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly id: string;
  };
}

export default function Page({ params }: Props): JSX.Element {
  const { title, MDXContent } = use(
    getPostByFilename(params.id, params.locale)
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
