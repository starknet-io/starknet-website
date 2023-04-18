"use client";
import {
  Alert as ChakraAlert,
  AlertProps,
  Icon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Box
} from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";
import {
  Link,
} from "src/libs/chakra-ui";
import ReactMarkdown from "react-markdown";
import { scrollIntoView } from "../../utils/scrollIntoView";

import {
  HiOutlineMegaphone,
  HiExclamationTriangle,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import {
  IoCloseOutline
} from "react-icons/io5";

type props = {
  body: string;
  toId?: string;
  variant?: 'important' | 'info' | 'warning';
  title: string;
  hasCloseButton?: boolean;
  uuid?: string;
  icon?: string;
} & AlertProps;

export const Alert = ({ body, uuid, hasCloseButton = true, variant = "info", title, toId, ...rest }: props) => {
  const handleOnClick = () => {
    if (!toId) {
      return;
    }
    scrollIntoView(toId);
  };
  const renderIcon = () => {
    switch (variant) {
      case "important":
        return HiExclamationTriangle;
      case "warning":
        return HiOutlineCog6Tooth;
      default:
        return HiOutlineMegaphone;
    }
  }

  const {
    isOpen: isVisible,
    onClose
  } = useDisclosure({ defaultIsOpen: true })

  const handleClose = () => {
    localStorage.setItem(`uuid-${uuid}`, "true");
    onClose();
  }

  return isVisible ? (
    <ChakraAlert status="info" variant={variant} onClick={handleOnClick} {...rest}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          position: "relative",
          margin: "0 auto",
          alignItems: "center",
          flexDirection: "row"
        }}
        maxW={{ md: "7xl" }}
        px={{ base: "16px", md: "32px" }}
        alignItems={{ base: "baseline", md: "center" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          style={{
            width: "100%",
            display: "flex",
            position: "relative",
            margin: "0 auto",
            padding: "0",
            flexDirection: "row"
          }}
          alignItems={{ base: "flex-start", lg: "center" }}
        >
        <Icon
          as={renderIcon()}
          fontSize="xl"
          marginRight="19px"
          width="24px"
          height="24px"
        />
        <Box
          style={{
            width: "100%",
            display: "flex",
            position: "relative",
            margin: "0 auto",
            padding: "0"
          }}
          alignItems={{ base: "baseline", lg: "center" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>
          <Text variant="cardBody"><ReactMarkdown
            components={{
              a: (props) => <Link variant="standard" {...props} />,
            }}
          >
            {body}
          </ReactMarkdown></Text>
          </AlertDescription>
        </Box>
      </Box>
      {!!hasCloseButton && <Icon as={IoCloseOutline}
        width="28px"
        height="28px"
        alignSelf='flex-start'
        // position='absolute'
        // right={{ base: "-35px", xl: "32px" }}
        top={{ base: "2px", xl: "-3px" }}
        cursor="pointer"
        onClick={handleClose}
      />}
      </Box>

    </ChakraAlert>
  ) : <></>;
};
