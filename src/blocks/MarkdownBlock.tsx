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
} from "src/libs/chakra-ui";
import { slugify } from "src/utils/utils";

interface Props {
  readonly body: string;
}

// @ts-expect-error
export async function MarkdownBlock({ body }: Props): JSX.Element {
  return (
    <Box>
      <ReactMarkdown
        components={{
          h2: (props) => (
            <>
              {/* <Spacer
                height="140px"
                id={`toc-${slugify(props.children.join(" "))}`}
              /> */}
              <Heading
                id={`toc-${slugify(props.children.join(" "))}`}
                color="heading-navy-fg"
                variant="h3"
                marginBottom="24px"
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
                marginBottom="24px"
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
          img: (props) => <Img my="40px" borderRadius="8px" {...props} />,
          a: (props) => <Link variant="standard" {...props} />,
        }}
      >
        {body}
      </ReactMarkdown>
    </Box>
  );
}
