
import { navigate } from "vite-plugin-ssr/client/router";

import { Page as PageType } from "@starknet-io/cms-data/src/pages";

export interface Props {
  data: PageType;
}

export const Page = ({
  data
}: Props) => {
  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    navigate(`en/${data}`);
    return null
  }
}

export default Page