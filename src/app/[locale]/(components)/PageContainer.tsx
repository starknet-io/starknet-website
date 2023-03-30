"use client";
import { useMemo } from "react";
import { Alert } from "@ui/Alert";
import { Flex } from "@chakra-ui/react";
import type { Alert as AlertType } from "src/data/settings/alert";
import { useLocation } from "react-use";
import { ThemeProvider } from "src/app/providers/ThemeProvider";

type Props = {
  children: React.ReactNode;
  alerts: AlertType[];
};

export const PageContainer = ({ children }: Props) => {
  // const { pathname } = useLocation()!;
  // const path = pathname.replace(/^\/[^/]+\//, "");
  // let result = useMemo(() => {
  //   if (typeof window !== "undefined") {
  //     let result = alerts.find((obj) => obj.page_url?.includes(path));
  //     if (!window.localStorage.getItem(`uuid-${result?.id}`)) {
  //       return result;
  //     }
  //   }
  // }, [path, alerts]);

  return (
    <ThemeProvider>
      <Flex direction="column" flex="1">
        {/* {result ? (
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
          })
        )} */}
        {children}
      </Flex>
    </ThemeProvider>
  );
};
