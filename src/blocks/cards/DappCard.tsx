import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

import NextLink from "next/link";

type Props = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
};

export const DappCard = ({
  image,
  imageAlt,
  title,
  description,
  linkLabel,
  linkHref,
}: Props) => {
  return <Box>Dapp card</Box>;
};
