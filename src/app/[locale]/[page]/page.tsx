import { PageServer, Props } from "./(server-components)/PageServer";

export default function Page(props: Props) {
  return (
    <>
      <PageServer {...props} />
    </>
  );
}
