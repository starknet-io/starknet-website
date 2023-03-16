"use client";
import { Alert } from "@ui/Alert";
import { Flex } from "@chakra-ui/react";
import type { Alert as AlertType } from "src/data/settings/alert";

type Props = {
  children: React.ReactNode;
  alerts: AlertType[];
};

export const PageContainer = ({ children, alerts }: Props) => {
  return (
    <Flex direction="column" flex="1">
      {alerts?.map((alert, i) => {
        if (typeof window !== 'undefined') {
          if (!window.localStorage.getItem(`uuid-${alert.id}`)) {
            return <Alert key={`${i}-alert`} title={alert.title} hasCloseButton={alert.hasCloseButton} uuid={alert.id} variant={alert.variant}>{alert.children}</Alert>
          }
        }
      })}
      {children}
    </Flex>
  );
};
