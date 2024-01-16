// toDo rebuild this card in to a generalized grid card
import {
  Badge,
  Box,
  HStack,
  Image as ChakraImage,
  Icon,
  Flex,
  ChakraProps,
  useBreakpointValue
} from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";
import { Heading } from "@ui/Typography/Heading";
import { FiBookOpen, FiHeadphones, FiTv } from "react-icons/fi";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";
import { Category as DataCategory } from "@starknet-io/cms-data/src/categories";

type RootProps = {
  children: React.ReactNode;
  href: string;
  type?: | "grid" | "featured";
  sx?: ChakraProps['sx']
};

const Root = ({ children, href, type = "grid", sx }: RootProps) => {
  return (
    <CardGradientBorder padding="0" borderRadius={{ base: "8px" }} overflow="hidden" sx={sx}>
      <Box as="a" href={href} _hover={{ textDecor: "none" }} role="group">
        <Box p="0" height="full" borderRadius="8px" bg="card-bg">
          <Flex
            direction="column"
            gap={{ base: "8", lg: "16" }}
            // justify="space-between"
            height={type === "featured" ? "400px" : "full"}
          >
            <Flex gap={type === "featured" ? "1" : "8"} direction={type === "featured" ? "row" : "column"} flex={1}>
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
  type?: | "grid" | "featured";
};

const Image = ({ url, imageAlt, type = "grid" }: ImageProps) => {
  const size = useBreakpointValue({ base: '581px', sm: '350px', md: '430px', xl: '320px' });
  const featuredImageSize = useBreakpointValue({ base: '581px', sm: '350px', md: '430px', lg: '550px', xl: '606px' });
  const cloudflareImage = `https://www.starknet.io/cdn-cgi/image/width=${type === "featured" ? featuredImageSize : size},height=auto,format=auto${url}`;
  const isProd  = import.meta.env.VITE_ALGOLIA_INDEX === "production";
  return (
    <Box overflow="hidden" {...type === "featured" && { width: "auto", maxWidth: "60%"}}>
      <ChakraImage
        src={isProd ? cloudflareImage : url}
        alt={imageAlt}
        width="full"
        height={type === "featured" ? "100%" : { base: "16rem", lg: "10rem" }}
        objectFit={type === "featured" ? "contain" : { base: "contain", lg: "cover" }}
        {...type === "grid" && { borderTopRadius: 8}}
      />
    </Box>
  );
};

type BodyProps = {
  children: React.ReactNode;
  type?: | "grid" | "featured";
};

const Body = ({ children, type = "grid" }: BodyProps) => {
  return (
    <Flex flex={1} direction="column" pl={6} pr={6} {...type === "featured" && { pt: 8 }}>
      {children}
    </Flex>
  );
};

interface CategoryProps {
  category: DataCategory;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <Box pb={3}>
      <Badge variant={category.slug.replaceAll("-", "_")}>
        {category.name}
      </Badge>
    </Box>
  );
};

type ContentProps = {
  title: string;
  excerpt: string;
  type?: | "grid" | "featured";
};

const Content = ({ title, excerpt, type = "grid" }: ContentProps) => {
  return (
    <Flex gap="3" direction="column" flex={1}>
      <Heading
        color="heading-navy-fg"
        variant={type === "featured" ? "h2" : "h4"}
        fontWeight="bold"
        noOfLines={type === "featured" ? 3 : 2}
        {...type === "featured" && { fontSize: "2.7rem", lineHeight: "3.025rem" }}
      >
        {title}
      </Heading>
      <Text variant="cardBody" noOfLines={4}>
        {excerpt}
      </Text>
    </Flex>
  );
};

type FooterProps = {
  postType: string;
  publishedAt?: string;
  timeToConsume?: string;
  type?: | "grid" | "featured";
};
const Footer = ({
  postType,
  publishedAt = "N/A",
  timeToConsume = "5min read",
  type = "grid"
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
    <Flex p={type === "featured" ? "14px 0" : 6}>
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
//                 <Text fontSize="sm" variant="cardBody">
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
