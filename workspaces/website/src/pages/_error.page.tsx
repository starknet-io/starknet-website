import NotFound from "@ui/NotFound/NotFound";
import { DocumentProps } from "src/renderer/types";

export function Page() {
  return <NotFound type="page" />;
}

export const documentProps = {
  title: "Page Not Found!"
} satisfies DocumentProps
