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
    CMS.registerPreviewTemplate("events", ({ entry }) => (
      <CustomPreview entry={entry} type={CustomPreviewType.EVENTS} />
    ));
    CMS.registerPreviewTemplate("jobs", ({ entry }) => (
      <CustomPreview entry={entry} type={CustomPreviewType.JOBS} />
    ));
    CMS.registerPreviewTemplate("tutorials", ({ entry }) => {
      return <CustomPreview entry={entry} type={CustomPreviewType.TUTORIALS} />;
    });
    CMS.registerPreviewTemplate("posts", ({ entry }) => {
      return <CustomPreview entry={entry} type={CustomPreviewType.POST} />;
    });
    CMS.registerPreviewTemplate("pages", ({ entry }) => {
      return <CustomPreview entry={entry} type={CustomPreviewType.PAGE} />;
    });
    CMS.registerPreviewTemplate("roadmap-posts", ({ entry }) => {
      return (
        <CustomPreview entry={entry} type={CustomPreviewType.ROADMAP_POST} />
      );
    });
    CMS.registerPreviewTemplate("announcements", ({ entry }) => {
      return (
        <CustomPreview entry={entry} type={CustomPreviewType.ANNOUNCEMENTS_POST} />
      );
    });
    CMS.registerPreviewTemplate("roadmap-versions", ({ entry }) => {
      return (
        <CustomPreview entry={entry} type={CustomPreviewType.ROADMAP_VERSION} />
      );
    });

    CMS.registerBackend("github-yuki", GitHubBackend);
    const branch =
      import.meta.env.VITE_GIT_BRANCH_NAME ?? CMSConfig.backend.branch;

    console.log("branch", branch);

    CMS.init({
      config: {
        ...CMSConfig,
        // @ts-expect-error
        backend: {
          ...CMSConfig.backend,
          branch,
        },
      },
    });
  }, []);

  return <div />;
}
