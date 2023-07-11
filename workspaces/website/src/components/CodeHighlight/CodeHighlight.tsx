import hljs from "highlight.js";
import { CodeBlock as CodeBlockType } from "@starknet-io/cms-data/src/pages";
import { Box, Divider, Text } from "@chakra-ui/react";
import CopyButton from "@ui/Button/CopyButton";
import { codeLanguages } from "@starknet-io/cms-config/src/blocks";

type CodeHighlightProps = {
  code?: string
  language?: CodeBlockType['language']
}

export default function CodeHighlight(props: CodeHighlightProps) {
  const { code, language } = props;
  const langDetails = codeLanguages.find(c => c.value === language)

  let codeHtml = ''
  if(code && language){
    codeHtml = hljs.highlight(code, {language}).value
  } else if(code){
    codeHtml = hljs.highlightAuto(code).value
  }
  const langAbbreviation = langDetails?.abbreviation || language
  const languageClassname = language ? `hljs language-${language}`: 'hljs'

  return (
    <Box position="relative" zIndex="0" className="hljs-box" role='group' mb='1rem'>
        <pre>
          <code
            dangerouslySetInnerHTML={{ __html: codeHtml }}
            className={languageClassname}
          />
        </pre>
      <Box position="absolute" right="1.25em" top='5px' display="flex" alignItems='center' gap="10px" opacity={0} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' _groupHover={{
        opacity: 1
      }}>
        {langAbbreviation && (
          <>
            <Text fontSize='sm'>{langAbbreviation}</Text>
            <Divider orientation='horizontal' height='1rem' w='1px' bg='code-divider-bg'/>
          </>
         )}
        <CopyButton code={code} />
      </Box>
    </Box>
  );
}
