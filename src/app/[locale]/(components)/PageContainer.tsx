"use client";
import { Alert } from "@ui/Alert";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  alert: any;
};

export const PageContainer = ({ children, alert }: Props) => {
  const [type, title, description ] = alert;
  return (
    <Flex direction="column" flex="1">
      <Alert title={title.title} variant={type.type}>{description.description}</Alert>
      {children}
    </Flex>
  );
};
