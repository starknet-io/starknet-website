import ReactMarkdown from "react-markdown";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import {
  UnorderedList,
  OrderedList,
  ListItem,
  Img,
  Box,
  Spacer,
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
                as="h2"
                color="heading-navy-fg"
                variant="h2"
                fontSize="32px"
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
                id={`toc-${slugify(props.children.join(" "))}`}
                pb={4}
                as="h3"
                variant="h3"
                {...props}
              />
            </>
          ),
          h4: (props) => (
            <Heading color="heading-navy-fg" as="h4" variant="h4" {...props} />
          ),
          h5: (props) => (
            <Heading color="heading-navy-fg" as="h5" variant="h4" {...props} />
          ),
          h6: (props) => (
            <Heading color="heading-navy-fg" as="h6" variant="h6" {...props} />
          ),
          p: (props) => (
            <Text
              pt={2}
              pb={4}
              lineHeight="32px"
              variant="baseRegular"
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
