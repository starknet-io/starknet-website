"use client";

import {
  Badge,
  Box,
  HStack,
  Image as ChakraImage,
  Link,
  Stack,
  Icon,
  useColorModeValue as mode,
} from "src/libs/chakra-ui";
import { Text } from "../../components/Typography/Text";
import { FiBookOpen, FiHeadphones, FiTv } from "react-icons/fi";
import { Heading } from "@ui/Typography/Heading";

// type Props = {
//   img?: string;
//   imgAlt?: string;
//   postType: "post" | "audio" | "video";
//   category?:
//     | "engineering"
//     | "community-calls"
//     | "stark_struct"
//     | "stark_math"
//     | "stark_at_home"
//     | "governance"
//     | "community_and_events";
//   title?: any;
//   excerpt?: any;
//   publishedAt?: string;
//   href?: string;
//   variant?: "default" | "lg";
// };

type RootProps = {
  children: React.ReactNode;
  href: string;
};

const Root = ({ children, href }: RootProps) => {
  return (
    <Link href={href} _hover={{ textDecor: "none" }} role="group">
      <Box
        p="0"
        bg="article-card-bg"
        boxShadow={mode("xs", "xs-dark")}
        _groupHover={{ boxShadow: mode("sm", "sm-dark") }}
        transition="all 0.2s"
        height="full"
        borderRadius={8}
      >
        <Stack
          spacing={{ base: "8", lg: "16" }}
          justify="space-between"
          height="full"
        >
          <Stack spacing="8">{children}</Stack>
        </Stack>
      </Box>
    </Link>
  );
};

type ImageProps = {
  url?: string;
  imageAlt?: string;
};

const Image = ({ url, imageAlt }: ImageProps) => {
  return (
    <Box overflow="hidden">
      <ChakraImage
        src={url}
        alt={imageAlt}
        width="full"
        height="10rem"
        objectFit="cover"
        borderTopRadius={8}
      />
    </Box>
  );
};

type BodyProps = {
  children: React.ReactNode;
};

const Body = ({ children }: BodyProps) => {
  return (
    <Box pl={6} pr={6}>
      {children}
    </Box>
  );
};

type CategoryProps = {
  category?:
    | "engineering"
    | "community-calls"
    | "stark_struct"
    | "stark_math"
    | "stark_at_home"
    | "governance"
    | "community_and_events"
    | string;
};
const Category = ({ category }: CategoryProps) => {
  return (
    <Box pb={3}>
      <Badge variant={category}>{category}</Badge>
    </Box>
  );
};

type ContentProps = {
  title: string;
  excerpt: string;
  featured?: boolean;
};

const Content = ({ title, excerpt, featured = false }: ContentProps) => {
  if (featured) {
    return (
      <Stack spacing="3">
        <Heading as="h3" variant="h3">
          {title}
        </Heading>
        <Text fontSize="sm" variant="baseRegular">
          {excerpt}
        </Text>
      </Stack>
    );
  }
  return (
    <Stack spacing="3">
      <Text fontSize="md" variant="baseExtraBold">
        {title}
      </Text>
      <Text fontSize="sm" variant="baseRegular">
        {excerpt}
      </Text>
    </Stack>
  );
};

type FooterProps = {
  postType: "post" | "audio" | "video";
  publishedAt?: string;
  duration?: string;
};
const Footer = ({
  postType,
  publishedAt,
  duration = "5min read",
}: FooterProps) => {
  const renderPostTypeIcon = () => {
    switch (postType) {
      case "post":
        return FiBookOpen;
      case "audio":
        return FiHeadphones;
      case "video":
        return FiTv;

      default:
        return FiBookOpen;
    }
  };
  return (
    <Box p={6}>
      <HStack>
        <Icon as={renderPostTypeIcon()} />

        <Text fontSize="sm" color="muted">
          {publishedAt}·
        </Text>
        <Text fontSize="sm" color="muted">
          {duration}
        </Text>
      </HStack>
    </Box>
  );
};

export { Root, Image, Body, Category, Content, Footer };

// export const ArticleCard = ({
//   img,
//   imgAlt,
//   category,
//   title,
//   excerpt,
//   href,
// }: Props) => {
//   return (
//     <Link href={href} _hover={{ textDecor: "none" }} role="group">
//       <Box
//         p="0"
//         bg="article-card-bg"
//         boxShadow={mode("xs", "xs-dark")}
//         _groupHover={{ boxShadow: mode("sm", "sm-dark") }}
//         transition="all 0.2s"
//         height="full"
//         borderRadius={8}
//       >
//         <Stack
//           spacing={{ base: "8", lg: "16" }}
//           justify="space-between"
//           height="full"
//         >
//           <Stack spacing="8">
//             <Box overflow="hidden">
//               <Image
//                 src={img}
//                 alt={imgAlt}
//                 width="full"
//                 height="15rem"
//                 objectFit="cover"
//                 borderTopRadius={8}
//               />
//             </Box>
//             <Box pl={6} pr={6}>
//               <Box pb={3}>
//                 <Badge variant={category}>{category}</Badge>
//               </Box>

//               <Stack spacing="3">
//                 <Text fontSize="md" variant="baseExtraBold">
//                   {title}
//                 </Text>
//                 <Text fontSize="sm" variant="baseRegular">
//                   {excerpt}
//                 </Text>
//               </Stack>
//             </Box>
//           </Stack>
//         </Stack>
//       </Box>
//     </Link>
//   );
// };
