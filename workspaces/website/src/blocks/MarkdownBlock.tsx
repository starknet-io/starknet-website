import ReactMarkdown from "react-markdown";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import {
  UnorderedList,
  OrderedList,
  ListItem,
  Img,
  Box,
  Link,
} from "@chakra-ui/react";
import { slugify } from "@starknet-io/cms-utils/src/index";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import CodeHighlight from "@ui/CodeHighlight/CodeHighlight";
import remarkGfm from 'remark-gfm'
import '../style/table.css'
interface Props {
  readonly body: string;
}

export function MarkdownBlock({ body }: Props): JSX.Element {
  return (
    <Box>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: (props) => (
            <>
              {/* <Spacer
                height="140px"
                id={`toc-${slugify(props.children.join(" "))}`}
              /> */}
              <Heading
                as={"h1"}
                id={`toc-${slugify(props.children.join(" "))}`}
                color="heading-navy-fg"
                variant="h2"
                fontSize={"32px"}
                margin={"16px 0"}
                {...props}
              />
            </>
          ),
          h3: (props) => (
            <>
              {/* <Spacer
                height="140px"
                id={`toc-${slugify(props.children.join(" "))}`}
              /> */}
              <Heading
                color="heading-navy-fg"
                marginBottom="16px"
                id={`toc-${slugify(props.children.join(" "))}`}
                variant="h3"
                {...props}
              />
            </>
          ),
          h4: (props) => (
            <Heading color="heading-navy-fg" variant="h4" {...props} />
          ),
          h5: (props) => (
            <Heading color="heading-navy-fg" variant="h4" {...props} />
          ),
          h6: (props) => (
            <Heading color="heading-navy-fg" variant="h6" {...props} />
          ),
          p: (props) => (
            <Text
            pt={2}
            pb={4}
            lineHeight="32px"
            variant="body"
            {...props}
          />
          ),
          ul: (props) => <UnorderedList pl={1} mb={4} {...props} />,
          ol: (props) => <OrderedList mb={4} pl={1} {...props} />,
          li: (props) => <ListItem lineHeight="32px" {...props} />,
          img: (props) => <Img my="40px" borderRadius="8px" _dark={{ background: 'white' }} {...props} />,
          a: (props) => <Link variant="standard" {...props} />,
          pre: (props) => {
            // @ts-ignore
            if(props.node.children[0]?.tagName === 'code'){

              //@ts-ignore
              const codeProps = props.children[0]?.props as (undefined | Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> & ReactMarkdownProps)

              const code = typeof codeProps?.children?.[0] === 'string' ? codeProps?.children?.[0]: ''
              const language = codeProps?.className?.split("-")?.[1]

              if(!code){
                return <pre {...props}>{props.children}</pre>
              }
              
              return <CodeHighlight language={language} code={code} />
            }else {
              return <pre {...props}>{props.children}</pre>
            }
          },
          table: (props) => (
            <Box 
              overflowX={'auto'}
              _dark={{ 
                th: {
                  borderColor: 'fg-default'
                },
                td: {
                  borderColor: 'fg-default'
                }
              }}
            >
              <table  {...props}>{props.children}</table>
            </Box>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </Box>
  );
}
