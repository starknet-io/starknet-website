"use client";
import { ResponsiveValue } from '@chakra-ui/styled-system';
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
} from "src/libs/chakra-ui";
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

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

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

type ContentProps = {
  title: string;
  date?: string;
  author?: string;
  difficulty?: string;
  direction?: string;
};

const Content = ({ title, date, author, difficulty, direction = "column" }: ContentProps) => {
  if (!difficulty) return null;
  const formattedDifficulty = titleCase(difficulty);
  return (
    <Flex gap="3" direction={direction as ResponsiveValue<FlexDirection>} flex={direction === "column" ? 1 : "initial"} w={direction === "column" ? "full" : "auto"}>
      <Text
        color="heading-navy-fg"
        fontSize="18px"
        variant="cardBody"
        fontWeight="bold"
        noOfLines={2}
      >
        {title}
      </Text>
      <HStack spacing="2">
        <Icon as={HiOutlineCalendarDays} boxSize="24px" stroke="#0F172A" />
        <Text variant="cardBody" noOfLines={4}>
          {date}
        </Text>
      </HStack>
      <HStack spacing="2">
        <Icon as={HiOutlineUser} boxSize="24px" stroke="#0F172A" />
        <Text variant="cardBody" noOfLines={4}>
          {author}
        </Text>
      </HStack>
      <HStack spacing="2">
        <Icon as={HiOutlineAcademicCap} boxSize="24px" stroke="#0F172A" />
        <Text variant="cardBody" noOfLines={4}>
          {formattedDifficulty}
        </Text>
      </HStack>
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
