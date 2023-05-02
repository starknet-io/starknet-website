import * as React from "react";
import CMS from "netlify-cms-app";
import { CMSConfig } from "@starknet-io/cms-config/src/main";
import NetlifyCmsWidgetUUID from "@starknet-io/netlify-cms-widgets/src/uuid";
import NetlifyCmsWidgetYouTube from "@starknet-io/netlify-cms-widgets/src/youtube";

export default function App() {
  React.useEffect(() => {
    // if (process.env.NODE_ENV === "development") {
    //   config.local_backend = true;
    // }

    // @ts-expect-error
    CMS.registerWidget([
      NetlifyCmsWidgetUUID.Widget(),
      NetlifyCmsWidgetYouTube.Widget(),
    ]);
    const branch =
      import.meta.env.VITE_GIT_BRANCH_NAME ?? CMSConfig.backend.branch;

    console.log("branch", branch);

    CMS.init({
      config: {
        ...CMSConfig as any,
        backend: {
          ...CMSConfig.backend,
          branch,
        },
      },
    });
  }, []);

  return <div />;
}
