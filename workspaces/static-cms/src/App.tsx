import * as React from "react";
import { CMSConfig } from "./config";
import { UUIDWidget } from "./widgets/uuid";
import { YoutubeWidget } from "./widgets/youtube";
// import CMS from "@staticcms/core";
import CMS from "netlify-cms-app";

export default function App() {
  React.useEffect(() => {
    void (async () => {
      // if (process.env.NODE_ENV === "development") {
      //   config.local_backend = true;
      // }

      // CMS.registerWidget([UUIDWidget(), YoutubeWidget()]);

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
