import React from "react";
import CMS from "netlify-cms-app";
import { CMSConfig } from "@starknet-io/cms-config/src/main";
import NetlifyCmsWidgetUUID from "@starknet-io/netlify-cms-widgets/src/uuid";
import NetlifyCmsWidgetYouTube from "@starknet-io/netlify-cms-widgets/src/youtube";
import CustomPreview, { CustomPreviewType } from "./CustomPreview";
import { GitHubBackend } from "@starknet-io/netlify-cms-backend-github/src";

export default function App() {
  React.useEffect(() => {
    // @ts-expect-error
    CMS.registerWidget([
      NetlifyCmsWidgetUUID.Widget(),
      NetlifyCmsWidgetYouTube.Widget(),
    ]);
    CMS.registerPreviewTemplate("events", ({ entry, getAsset }) => (
      <CustomPreview
        entry={entry}
        type={CustomPreviewType.EVENTS}
        getAsset={getAsset}
      />
    ));
    CMS.registerPreviewTemplate("jobs", ({ entry, getAsset }) => (
      <CustomPreview
        entry={entry}
        type={CustomPreviewType.JOBS}
        getAsset={getAsset}
      />
    ));
    CMS.registerPreviewTemplate("tutorials", ({ entry, getAsset }) => {
      return (
        <CustomPreview
          entry={entry}
          type={CustomPreviewType.TUTORIALS}
          getAsset={getAsset}
        />
      );
    });
    CMS.registerPreviewTemplate("posts", ({ entry, getAsset }) => {
      return (
        <CustomPreview
          entry={entry}
          type={CustomPreviewType.POST}
          getAsset={getAsset}
        />
      );
    });
    CMS.registerPreviewTemplate("pages", ({ entry, getAsset }) => {
      return (
        <CustomPreview
          entry={entry}
          type={CustomPreviewType.PAGE}
          getAsset={getAsset}
        />
      );
    });
    CMS.registerBackend("github-yuki", GitHubBackend);
    const branch =
      import.meta.env.VITE_GIT_BRANCH_NAME ?? CMSConfig.backend.branch;

    console.log("branch", branch);

    CMS.init({
      config: {
        ...(CMSConfig as any),
        backend: {
          ...CMSConfig.backend,
          branch,
        },
      },
    });
  }, []);

  return <div />;
}
