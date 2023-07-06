import { CodeBlock as CodeBlockType } from "@starknet-io/cms-data/src/pages";
import CodeHighlight from "@ui/CodeHighlight/CodeHighlight";

type CodeBlockProps = {
  body?: CodeBlockType["body"];
  language: CodeBlockType["language"];
};

export default function CodeBlock(props: CodeBlockProps) {
  const { body, language } = props;

  return <CodeHighlight code={body?.code || ""} language={language} />;
}
