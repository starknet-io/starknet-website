import hljs from "highlight.js";
import { CodeBlock as CodeBlockType } from "@starknet-io/cms-data/src/pages";
import { Box, Divider, Text } from "@chakra-ui/react";
import CopyButton from "@ui/Button/CopyButton";
import { codeLanguages } from "@starknet-io/cms-config/src/blocks";

type CodeHighlightProps = {
  code: string
  language: CodeBlockType['language']
}

export default function CodeHighlight(props: CodeHighlightProps) {
  const { code, language } = props;
  const langDetails = codeLanguages.find(c => c.value === language)

  const codeHtml = code ? hljs.highlight(code, {language}).value: ''

  return (
    <Box position="relative" zIndex="0" className="hljs-box" role='group' mb='1rem'>
        <pre>
          <code
            dangerouslySetInnerHTML={{ __html: codeHtml }}
            className={`hljs language-${language}`}
          />
        </pre>
      <Box position="absolute" right="1.25em" top='5px' display="flex" alignItems='center' gap="10px" opacity={0} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' _groupHover={{
        opacity: 1
      }}>
        <Text fontSize='sm'>{langDetails?.abbreviation || language}</Text>
        <Divider orientation='horizontal' height='1rem' w='1px' bg='code-divider-bg'/>
        <CopyButton code={code} />
      </Box>
    </Box>
  );
}
