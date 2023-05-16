
import { getPageById } from "@starknet-io/cms-data/src/pages";
import { redirect } from 'next/navigation';

async function Page({
  params
}: {
  params: { id: string };
}) {
  const data = await getPageById(params.id, "en");
  if (!data) {
    return (
      <div>
        <h1>This is a preview page</h1>
      </div>
    )
  } else {
    redirect(`en/${data}`);
  }
}

export default Page