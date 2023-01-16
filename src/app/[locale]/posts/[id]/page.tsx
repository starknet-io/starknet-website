import { notFound } from "next/navigation";
import { getPostByFilename } from "src/data/posts";

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
      <div className="mx-auto  max-w-7xl px-2 sm:px-4 lg:px-8 pt-7">
        <div className="prose">
          <h2>{title}</h2>
          <MDXContent />
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
