"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { loadScript } from "src/utils/utils";
import { config } from "../config";
import { UUIDWidget } from "../widgets/uuid";
import { YoutubeWidget } from "../widgets/youtube";

interface Props {
  readonly backendBranch: string;
}

declare global {
  interface Window {
    CMS?: typeof import("@staticcms/core").default;
    react?: typeof React;
    "react-dom"?: typeof ReactDOM;
  }
}

export default function CMSPage({ backendBranch }: Props) {
  React.useEffect(() => {
    void (async () => {
      window["react"] = React;
      window["react-dom"] = ReactDOM;

      await Promise.all([
        loadScript(
          "https://unpkg.com/@staticcms/core@1.2.12/dist/static-cms-core.js",
        ),
        loadScript(
          "https://identity.netlify.com/v1/netlify-identity-widget.js",
        ),
      ]);

      // if (process.env.NODE_ENV === "development") {
      //   config.local_backend = true;
      // }

      window.CMS!.registerWidget([UUIDWidget(), YoutubeWidget()]);

      window.CMS!.init({
        config: {
          ...config,
          backend: {
            ...config.backend,
            branch: backendBranch,
          },
        },
      });
    })();
  }, [backendBranch]);

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: css,
      }}
    />
  );
}

const css = `
  .cms-wrapper  {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;
