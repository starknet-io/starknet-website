import * as React from "react";
import CMS from "@staticcms/core";
import { CMSConfig } from "@starknet-io/cms-config/src/main";
import { UUIDWidget } from "@starknet-io/static-cms-widgets/src/uuid";
import { YoutubeWidget } from "@starknet-io/static-cms-widgets/src/youtube";

export default function App() {
  React.useEffect(() => {
    void (async () => {
      // if (process.env.NODE_ENV === "development") {
      //   config.local_backend = true;
      // }

      CMS.registerWidget([UUIDWidget(), YoutubeWidget()]);

      CMS.init({
        config: {
          ...CMSConfig,
          backend: {
            ...CMSConfig.backend,
            branch: "tsotne/wip",
          },
        },
      });
    })();
  }, []);

  return <div />;
}
