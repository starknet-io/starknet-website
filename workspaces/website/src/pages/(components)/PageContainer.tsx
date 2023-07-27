import { useMemo } from "react";
import { Alert } from "@ui/Alert";
import { Flex } from "@chakra-ui/react";
import type { Alert as AlertType } from "@starknet-io/cms-data/src/settings/alert";
import { usePageContext } from "src/renderer/PageContextProvider";

type Props = {
  children: React.ReactNode;
  alerts: AlertType[];
};

export const PageContainer = ({ children, alerts }: Props) => {
  const { urlPathname: pathname } = usePageContext();

  let result = useMemo(() => {
    if (typeof window !== "undefined") {
      let result = alerts?.find((obj) => obj.page_url?.includes(pathname));
      if (!window.localStorage.getItem(`uuid-${result?.id}`)) {
        return result;
      }
    }

    return null;
  }, [pathname, alerts]);

  return (
    <Flex direction="column" flex="1">
      {result ? (
        <Alert
          title={result.title}
          hasCloseButton={result.hasCloseButton}
          uuid={result.id}
          variant={result.variant}
          body={result.body}
        />
      ) : (
        alerts?.map((alert, i) => {
          if (!alert.page_url && typeof window !== "undefined") {
            if (!window.localStorage.getItem(`uuid-${alert.id}`)) {
              return (
                <Alert
                  key={`${i}-alert`}
                  title={alert.title}
                  hasCloseButton={alert.hasCloseButton}
                  uuid={alert.id}
                  variant={alert.variant}
                  body={alert.body}
                />
              );
            }
          }

          return null;
        })
      )}
      {children}
    </Flex>
  );
};
