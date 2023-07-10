import { CodeBlock as CodeBlockType } from "@starknet-io/cms-data/src/pages";
import CodeHighlight from "@ui/CodeHighlight/CodeHighlight";

type CodeBlockProps = {
  code?: string;
  language?: CodeBlockType["language"];
};

export default function CodeBlock(props: CodeBlockProps) {
  const { code, language = 'cairo' } = props;

  return <CodeHighlight code={code || ""} language={language || ""} />;
}
