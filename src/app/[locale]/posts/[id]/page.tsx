import { notFound } from "next/navigation";
import { getPostByFilename } from "src/data/posts";
import { PageContentContainer } from "../../(components)/PageContentContainer";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly id: string;
  };
}

export default async function Page({ params }: Props): Promise<JSX.Element> {
  try {
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
  } catch (err) {
    console.log(err);
    notFound();
  }
}
