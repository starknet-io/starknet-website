import { PostPageServer, Props } from "./(server-components)/PostPageServer";

export default function Page(props: Props) {
  return (
    <>
      <PostPageServer {...props} />
    </>
  );
}
