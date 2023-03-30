import Link from "next/link";
import Page from "./[...slug]/page";

export default async function Index({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  return (
    <div
      style={{
        display: "grid",
      }}
    >
      <Link href="/en/video/prover">Video page</Link>
      <Link href="/video-embed">Embed</Link>
    </div>
  );
}
