"use client";
// toDo rebuild this card in to a generalized grid card
import {
  Badge,
  Box,
  HStack,
  Image as ChakraImage,
  Icon,
  Flex,
} from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";
import { FiBookOpen, FiHeadphones, FiTv } from "react-icons/fi";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";

type RootProps = {
  children: React.ReactNode;
  href: string;
};

const Root = ({ children, href }: RootProps) => {
  return (
    <CardGradientBorder padding="0" borderRadius={{ base: "8px" }}>
      <Box as="a" href={href} _hover={{ textDecor: "none" }} role="group">
        <Box p="0" height="full" borderRadius="8px" bg="card-bg">
          <Flex
            direction="column"
            gap={{ base: "8", lg: "16" }}
            // justify="space-between"
            height="full"
          >
            <Flex gap="8" direction="column" flex={1}>
              {children}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </CardGradientBorder>
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
        height={{ base: "16rem", md: "12rem", lg: "10rem" }}
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
    <Flex flex={1} direction="column" pl={6} pr={6}>
      {children}
    </Flex>
  );
};

const Category = ({ category }: any) => {
  return (
    <Box pb={3}>
      <Badge variant={category?.id}>{category?.label}</Badge>
    </Box>
  );
};

type ContentProps = {
  title: string;
  excerpt: string;
};

const Content = ({ title, excerpt }: ContentProps) => {
  return (
    <Flex gap="3" direction="column" flex={1}>
      <Text
        color="heading-navy-fg"
        fontSize="18px"
        variant="baseBold"
        noOfLines={2}
      >
        {title}
      </Text>
      <Text fontSize="sm" variant="baseRegular" noOfLines={4}>
        {excerpt}
      </Text>
    </Flex>
  );
};

type FooterProps = {
  postType: string;
  publishedAt?: string;
  timeToConsume?: string;
};
const Footer = ({
  postType,
  publishedAt = "N/A",
  timeToConsume = "5min read",
}: FooterProps) => {
  const renderPostTypeIcon = () => {
    switch (postType) {
      case "article":
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
    <Flex p={6}>
      <HStack>
        <Icon as={renderPostTypeIcon()} />

        <Text fontSize="sm" color="muted">
          {publishedAt} ·
        </Text>
        <Text fontSize="sm" color="muted">
          {timeToConsume}
        </Text>
      </HStack>
    </Flex>
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
