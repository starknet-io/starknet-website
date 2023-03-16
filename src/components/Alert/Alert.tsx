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
  children: React.ReactNode;
  toId?: string;
  variant?: 'important' | 'info' | 'warning';
  title: string;
  hasCloseButton?: boolean;
  uuid?: string;
} & AlertProps;

export const Alert = ({ children, uuid, hasCloseButton = true, variant = "info", title, toId, ...rest }: props) => {
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
          maxWidth: "80rem",
          width: "100%",
          display: "flex",
          position: "relative",
          margin: "0 auto",
        }}
        alignItems={{ base: "baseline", xl: "center" }}
        flexDirection={{ base: "column", xl: "row" }}
        paddingRight={{
          base: '0',
          xl: '50px'
        }}
      >
        <Icon
          as={renderIcon()}
          fontSize="xl"
          marginRight="19px"
          position={{ base: "absolute", xl: "relative" }}
          left={{ base: "-35", xl: "auto" }}
          top={{ base: "2px", xl: "auto" }}
        />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
        {variant === 'info' && !!hasCloseButton && <Icon as={IoCloseOutline}
          width="28px"
          height="28px"
          alignSelf='flex-start'
          position='absolute'
          right={{ base: "-35px", xl: "15px" }}
          top={{ base: "2px", xl: "-3px" }}
          cursor="pointer"
          onClick={handleClose}
        />}
      </Box>
    </ChakraAlert>
  ) : <></>;
};
