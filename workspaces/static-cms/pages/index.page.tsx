import * as React from "react";

export const documentProps = {
  title: "Content Manager",
};

const Loading = () => <div>Loading...</div>;

const CMSPage = React.lazy(() => import("./CMSPage"));

export function Page() {
  return (
    <>
      <ClientOnly client={<CMSPage />} fallback={<Loading />} />
    </>
  );
}

function useIsClient() {
  const [state, setState] = React.useState<boolean>(false);

  React.useEffect(() => {
    setState(true);
  }, []);

  return state;
}

interface Props {
  readonly fallback?: React.ReactNode;
  readonly client?: React.ReactNode;
}

function ClientOnly({ fallback, client }: Props) {
  const isClient = useIsClient();

  return (
    <React.Suspense fallback={fallback}>
      {isClient ? client : fallback}
    </React.Suspense>
  );
}
