import { CmsCollection } from "../types";

export const SEOCollectionConfig = {
  crowdin: true,
  label: "SEO",
  name: "seo",
  files: [
    // {
    //   label: "Tutorials",
    //   name: "tutorials",
    //   file: `_data/seo/tutorials.yml`,
    //   crowdin: true,
    //   fields: [
    //     {
    //       label: "Page title",
    //       name: "title",
    //       widget: "string",
    //       crowdin: true,
    //     },
    //     {
    //       label: "Page subtitle",
    //       name: "sub-title",
    //       widget: "string",
    //       crowdin: true,
    //     },
    //   ],
    // },
    {
      label: "Events",
      name: "events-seo",
      file: `_data/seo/events-seo.yml`,
      crowdin: true,
      fields: [
        {
          label: "Page title",
          name: "title",
          widget: "string",
          crowdin: true,
        },
        {
          label: "Page subtitle",
          name: "sub-title",
          widget: "string",
          crowdin: true,
        },
      ],
    },
    // {
    //   label: "Jobs",
    //   name: "jobs",
    //   file: `_data/seo/jobs.yml`,
    //   crowdin: true,
    //   fields: [
    //     {
    //       label: "Page title",
    //       name: "title",
    //       widget: "string",
    //       crowdin: true,
    //     },
    //     {
    //       label: "Page subtitle",
    //       name: "sub-title",
    //       widget: "string",
    //       crowdin: true,
    //     },
    //   ],
    // },
  ],
} satisfies CmsCollection;
