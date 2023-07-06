import {
  Button,
  ButtonProps,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { HiClipboardDocumentList } from "react-icons/hi2";

interface CopyButtonProps extends ButtonProps {
  code: string;
}

function CopyButton({ code, ...props }: CopyButtonProps) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Tooltip isOpen={hasCopied} label="Copied" hasArrow _groupHover={{}}>
      <Button
        padding={0}
        aria-label="Copy code"
        textTransform="uppercase"
        zIndex="1"
        onClick={onCopy}
        variant="unstyled"
        height='auto'
        minH='auto'
        minW='unset'
        {...props}
      >
        <HiClipboardDocumentList />
      </Button>
    </Tooltip>
  );
}

export default CopyButton;
