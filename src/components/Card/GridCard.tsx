"use client";
// toDo rebuild this card in to a generalized grid card
import {
  Badge,
  Box,
  HStack,
  Image as ChakraImage,
  Link,
  Stack,
  Icon,
  useColorModeValue as mode,
  Flex,
} from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";
import { FiBookOpen, FiHeadphones, FiTv } from "react-icons/fi";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import {
  HiCalendar,
  HiCalendarDays,
  HiOutlineAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineUser,
} from "react-icons/hi2";
import { titleCase } from "src/utils/utils";
import { type } from "os";

type RootProps = {
  children: React.ReactNode;
  href: string;
};

const Root = ({ children, href }: RootProps) => {
  return (
    <CardGradientBorder padding="0" borderRadius={{ base: "8px" }}>
      <Box
        as="a"
        target="_blank"
        href={href}
        _hover={{ textDecor: "none" }}
        role="group"
      >
        <Box
          p="0"
          transition="all 0.2s"
          height="full"
          borderRadius="8px"
          bg="card-bg"
          w="full"
        >
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
  type: string;
};

const Image = ({ url, imageAlt, type }: ImageProps) => {
  const renderImage = () => {
    switch (type) {
      case "github":
        return "/assets/tutorials/github.png";

      case "youtube":
        return url;
      case "blog":
        return "/assets/tutorials/blog.png";
      default:
        return "/assets/tutorials/blog.png";
    }
  };

  return (
    <Box overflow="hidden" w="full">
      <ChakraImage
        src={renderImage()}
        alt={imageAlt}
        width="full"
        height={{ base: "14rem", lg: "10rem" }}
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
    <Flex flex={1} direction="column" pl={6} pr={6} w="full">
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
  date?: string;
  author?: string;
  difficulty?: string;
};

const Content = ({ title, date, author, difficulty }: ContentProps) => {
  if (!difficulty) return null;
  const formattedDifficulty = titleCase(difficulty);
  return (
    <Flex gap="3" direction="column" flex={1} w="full">
      <Text
        color="heading-navy-fg"
        fontSize="18px"
        variant="baseBold"
        noOfLines={2}
      >
        {title}
      </Text>
      <HStack spacing="2">
        <Icon as={HiOutlineCalendarDays} mr={2} boxSize="18px" />
        <Text fontSize="sm" variant="baseRegular" noOfLines={4}>
          {date}
        </Text>
      </HStack>
      <HStack spacing="2">
        <Icon as={HiOutlineUser} mr={2} boxSize="18px" />
        <Text fontSize="sm" variant="baseRegular" noOfLines={4}>
          {author}
        </Text>
      </HStack>
      <HStack spacing="2">
        <Icon as={HiOutlineAcademicCap} mr={2} boxSize="18px" />
        <Text fontSize="sm" variant="baseRegular" noOfLines={4}>
          {formattedDifficulty}
        </Text>
      </HStack>
    </Flex>
  );
};

type FooterProps = {
  children: React.ReactNode;
};
const Footer = ({ children }: FooterProps) => {
  return (
    <Flex p={6} w="full">
      {children}
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
