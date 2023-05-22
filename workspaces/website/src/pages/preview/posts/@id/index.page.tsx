import { Post } from "@starknet-io/cms-data/src/posts";
import { navigate } from "vite-plugin-ssr/client/router";

export interface Props {
  data: Post;
}

export const Page = ({ data }: Props) => {
  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    navigate(`en/posts/${data.category ? `${data.category}/` : ""}${data.slug}`);
    return null
  }

  
}
