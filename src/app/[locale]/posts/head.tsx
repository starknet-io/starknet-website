import HeadTags from "src/app/[locale]/(components)/HeadTags";

export const dynamic = 'force-dynamic'

export default function Head() {
  return (
    <>
      <HeadTags title="Blog" />
    </>
  );
}
