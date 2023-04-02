import * as React from "react";
import CMS from "netlify-cms-app";
import { CMSConfig } from "@starknet-io/cms-config/src/main";
import NetlifyCmsWidgetUUID from "@starknet-io/netlify-cms-widgets/src/uuid";
import NetlifyCmsWidgetYouTube from "@starknet-io/netlify-cms-widgets/src/uuid";

export default function App() {
  React.useEffect(() => {
    void (async () => {
      // if (process.env.NODE_ENV === "development") {
      //   config.local_backend = true;
      // }

      // @ts-expect-error
      CMS.registerWidget([
        NetlifyCmsWidgetUUID.Widget(),
        NetlifyCmsWidgetYouTube.Widget(),
      ]);

      CMS.init({
        config: {
          ...CMSConfig,
          backend: {
            ...CMSConfig.backend,
            branch: 'tsotne/wip',
          },
        },
      });
    })();
  }, []);

  return (
    <div />
  );
}
