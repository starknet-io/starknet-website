import { useEffect } from "react";
import hljs from "highlight.js";
import { CodeBlock as CodeBlockType } from "@starknet-io/cms-data/src/pages";
import { Box, Divider, Text } from "@chakra-ui/react";
import CopyButton from "@ui/Button/CopyButton";
import { codeLanguages } from "@starknet-io/cms-config/src/blocks";
import "../style/highlight/highlight.css";

export default function CodeBlock(
  props: Pick<CodeBlockType, "body" | "language">
) {
  const { body, language } = props;
  const langDetails = codeLanguages.find(c => c.value === language)

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <Box position="relative" zIndex="0" bg="card-code-bg" role='group'>
      <Box
        rounded="8px"
        m="8"
        sx={{ "& > div": { paddingBlock: "5", paddingEnd: "4" } }}
      >
        <pre>
          <code
            dangerouslySetInnerHTML={{ __html: body.code }}
            className={`language-${language}`}
          />
        </pre>
      </Box>
      <Box position="absolute" right="1.25em" top='1rem' display="flex" alignItems='center' gap="10px" opacity={1} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' _groupHover={{
        opacity: 1
      }}>
        <Text fontSize='sm'>{langDetails?.abbreviation || language}</Text>
        <Divider orientation='horizontal' height='1rem' w='1px' bg='code-divider-bg'/>
        <CopyButton code={body.code} />
      </Box>
    </Box>
  );
}
