import React from "react";
import CMS from "netlify-cms-app";
import { CMSConfig } from "@starknet-io/cms-config/src/main";
import NetlifyCmsWidgetUUID from "@starknet-io/netlify-cms-widgets/src/uuid";
import NetlifyCmsWidgetYouTube from "@starknet-io/netlify-cms-widgets/src/youtube";
import CustomPreview, { CustomPreviewType } from "./CustomPreview";
import { GitHubBackend } from "@starknet-io/netlify-cms-backend-github/src";
import NetlifyCmsWidgetMonth from "@starknet-io/netlify-cms-widgets/src/month";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function App() {
  React.useEffect(() => {
    // @ts-expect-error
    CMS.registerWidget([
      NetlifyCmsWidgetUUID.Widget(),
      NetlifyCmsWidgetYouTube.Widget(),
      NetlifyCmsWidgetMonth.Widget(),
    ]);
    CMS.registerEventListener({
      name: 'preSave',
      handler: ({ entry }) => {
        if (entry.get('collection') === 'events') {
          const startDate = new Date(entry.get('data').get('start_date'));
          const month = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;
          return entry.get('data').set('month', month);
        }
      },
    });
    
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
    CMS.registerPreviewTemplate("roadmap-posts", ({ entry, getAsset }) => {
      return (
        <CustomPreview
          entry={entry}
          type={CustomPreviewType.ROADMAP_POST}
          getAsset={getAsset}
        />
      );
    });
    CMS.registerPreviewTemplate("announcements", ({ entry, getAsset }) => {
      return (
        <CustomPreview
          entry={entry}
          type={CustomPreviewType.ANNOUNCEMENTS_POST}
          getAsset={getAsset}
        />
      );
    });
    CMS.registerPreviewTemplate("roadmap-versions", ({ entry, getAsset }) => {
      return (
        <CustomPreview
          entry={entry}
          type={CustomPreviewType.ROADMAP_VERSION}
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
