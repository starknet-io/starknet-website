import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { use } from "react";
import { getPageByFilename } from "src/data/pages";
import { PageContentContainer } from "../(components)/PageContentContainer";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly page: string;
  };
}

export default function Page({ params }: Props): JSX.Element {
  const { title, MDXContent } = use(
    getPageByFilename(params.page, params.locale)
  );

  return (
    <PageContentContainer>
      <>
        <MDXContent
          components={{
            h2: (props) => <Heading as="h2" variant="h2" {...props} />,
            h3: (props) => <Heading as="h3" variant="h3" {...props} />,
            h4: (props) => <Heading as="h4" variant="h4" {...props} />,
            h5: (props) => <Heading as="h5" variant="h5" {...props} />,
            h6: (props) => <Heading as="h6" variant="h6" {...props} />,
          }}
        />
      </>
    </PageContentContainer>
  );
}
