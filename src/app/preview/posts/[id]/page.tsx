import { getPostById } from "@starknet-io/cms-data/src/posts";
import { redirect } from 'next/navigation';

async function Page({
  params
}: {
  params: { id: string }
}) {
  const data = await getPostById(params.id, "en");
  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    redirect(`en/posts/${data.category ? `${data.category}/` : ""}${data.slug}`);
  }

  
}

export default Page