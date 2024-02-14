// import { ResponsiveValue } from '@chakra-ui/styled-system';
import { useRef, useEffect, useState, ReactNode, forwardRef } from "react";
// toDo rebuild this card in to a generalized grid card
import {
  Badge,
  Box,
  HStack,
  Image as ChakraImage,
  Tooltip as ChakraTooltip, TooltipProps,
  Icon,
  Flex,
  Link,
  // useBreakpointValue
} from "@chakra-ui/react";
import { Tag } from "@ui/Tag/Tag";
import { HiArrowUpRight } from "react-icons/hi2";
import { Text } from "@ui/Typography/Text";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";
import {
  HiOutlineAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineUser,
} from "react-icons/hi2";
import { titleCase } from "src/utils/utils";

type RootProps = {
  children: ReactNode;
  href: string;
  newTab?: boolean;
};

type CardContentVariant = 'vertical' | 'horizontal';

const Root = ({ children, href, newTab }: RootProps) => {
  return (
    <CardGradientBorder padding="0" borderRadius={{ base: "8px" }}>
      <Box
        as="a"
        {...newTab && {target: "_blank"}}
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
  // const size = useBreakpointValue({ base: '581', md: '430px', xl: '320px' });
  const cloudflareImage = url; //`https://www.starknet.io/cdn-cgi/image/width=${size},height=auto,format=auto${url}`;
  const isProd = import.meta.env.VITE_ALGOLIA_INDEX === "production";
  const renderImage = () => {
    switch (type) {
      case "github":
        return "/assets/tutorials/github.png";

      case "youtube":
        return isProd ? cloudflareImage : url;
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
  children: ReactNode;
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

type Author = {
  readonly author?: string;
  readonly author_link?: string;
}

type ContentProps = {
  title: string;
  date?: string;
  authors?: Author[];
  difficulty?: string;
  variant?: CardContentVariant;
  tags?: string[];
};

const Content = ({ title, date, authors, difficulty, variant = "vertical", tags }: ContentProps) => {
  if (!difficulty) return null;
  const formattedDifficulty = titleCase(difficulty);
  return (
    <Flex gap="3" direction="column" alignItems="flex-start" flex={variant === "vertical" ? 1 : "initial"} w={variant === "vertical" ? "full" : "auto"}>
      <Text
        color="heading-navy-fg"
        fontSize="18px"
        variant="cardBody"
        fontWeight="bold"
        noOfLines={2}
      >
        {title}
      </Text>
      <Flex
        direction={variant === "vertical" ? "column" : "row"}
        alignItems={variant === "horizontal" ? "center" : "flex-start"}
        gap={variant === "horizontal" ? "2" : "3"}
      >
        {authors?.map((anAuthor, i) => (
          <HStack spacing="2" alignItems="flex-start">
            <Icon
              as={HiOutlineUser}
              boxSize="24px"
              stroke="tutorials-card-icon-color"
            />
            {anAuthor.author_link ? (
              <Link href={anAuthor.author_link} isExternal={true} mr="2">
                <Text
                  variant="textLink"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {anAuthor.author}
                  <Icon ml={1} boxSize="14px" as={HiArrowUpRight} />
                </Text>
              </Link>
            ) : (
              <Text variant="cardBody" noOfLines={4}>
                {anAuthor.author}
              </Text>
            )}
          </HStack>
        ))}
      </Flex>
      <Flex direction="row">
        <Flex direction={variant === "vertical" ? "column" : "row"} alignItems={variant === "horizontal" ? "center" : "flex-start"} gap={variant === "horizontal" ? "2" : "3"}>
          <HStack spacing="2">
            <Icon as={HiOutlineCalendarDays} boxSize="24px" stroke="tutorials-card-icon-color" />
            <Text variant="cardBody" noOfLines={4}>
              {date}
            </Text>
          </HStack>
          <HStack spacing="2">
            <Icon as={HiOutlineAcademicCap} boxSize="24px" stroke="tutorials-card-icon-color" />
            <Text variant="cardBody" noOfLines={4}>
              {formattedDifficulty}
            </Text>
          </HStack>
        </Flex>
        {variant === "horizontal" ? (
          <Flex height="40px" ml="24px">
            {Array.isArray(tags) &&
              tags.map((tag, i) => {
                // only show max 2 tags
                if (i > 1) return null;
                return (
                  <Tag key={i} variant="listCard">
                    {tag}
                  </Tag>
                );
              })}
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
};

type FooterProps = {
  children: ReactNode;
};
const Footer = ({ children }: FooterProps) => {
  return (
    <Flex p={6} w="full">
      {children}
    </Flex>
  );
};

type Props = TooltipProps & {
  children: ReactNode;
};

const Tooltip = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <ChakraTooltip
      ref={ref}
      shouldWrapChildren
      hasArrow
      px={2}
      py={1}
      fontSize="sm"
      rounded="md"
      {...props}
    />
  );
});

Tooltip.displayName = "Tooltip";


interface StringListProps {
  strings: string[];
  maxWidth?: string;
}

const StringList = forwardRef<HTMLDivElement, StringListProps>(
  ({ strings, maxWidth }, ref) => {
    const [showAll, setShowAll] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (tooltipRef.current) {
        setShowTooltip(tooltipRef.current.clientWidth < tooltipRef.current.scrollWidth);
      }
    }, [strings]);

    return (
      <Flex wrap="wrap" ref={ref}>
        {strings.map((str, index) => {
          if (showAll || index < strings.length - 1) {
            return (
              <Box key={index} mr={2} mb={2}>
                <Text>{str}</Text>
              </Box>
            );
          }
          if (index === strings.length - 1) {
            return (
              <Box
                key={index}
                textAlign="right"
                mt={2}
                onClick={() => setShowAll(true)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                ref={tooltipRef}
              >
                {showTooltip && (
                  <Tooltip
                    label={strings.slice(index).join(", ")}
                    placement="top"
                    hasArrow
                  >
                    <Text>+{strings.length - index - 1}</Text>
                  </Tooltip>
                )}
                {!showTooltip && <Text>+{strings.length - index - 1}</Text>}
              </Box>
            );
          }
          return null;
        })}
      </Flex>
    );
  }
);
StringList.displayName = "StringList";

type TagsProps = {
  tags: Array<string>;
};

const Tags = ({ tags }: TagsProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = Array.from(
      boxRef.current?.querySelectorAll("div") || []
    ) as HTMLDivElement[];
    let textWidth = 0;
    let i;
    for (i = 0; i < textElements.length; i++) {
      const textElement = textElements[i];
      textWidth += textElement.clientWidth;
      if (textWidth > boxRef.current!.clientWidth) {
        break;
      }
      // if (i < textElements.length - 1) {
      //   boxRef.current!.querySelectorAll("div")[i].style.display = "none";
      // }
    }
  }, [boxRef, tags]);

  return (
    <div ref={boxRef} style={{ maxWidth: "300px" }}>
      <StringList strings={tags} />
    </div>
  );
};

export { Root, Image, Body, Category, Content, Footer, Tags };

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
