import { CmsCollection } from "../types";

export const SEOCollectionConfig = {
  crowdin: true,
  label: "SEO",
  name: "seo",
  files: [
    {
      label: "Home",
      name: "home",
      file: `_data/seo/home.yml`,
      crowdin: true,
      fields: [
        {
          label: "Hero text",
          name: "heroText",
          widget: "string",
          crowdin: true,
        },
      ],
    },
    {
      label: "Footer",
      name: "footer",
      file: `_data/seo/footer.yml`,
      crowdin: true,
      fields: [
        {
          label: "Footer text",
          name: "footerText",
          widget: "string",
          crowdin: true,
        },
      ],
    },
    {
      label: "Tutorials",
      name: "tutorials-seo",
      file: `_data/seo/tutorials.yml`,
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
          name: "subtitle",
          widget: "string",
          crowdin: true,
        },
      ],
    },
    {
      label: "Events",
      name: "events-seo",
      file: `_data/seo/events.yml`,
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
          name: "subtitle",
          widget: "string",
          crowdin: true,
        },
      ],
    },
    {
      label: "Jobs",
      name: "jobs-seo",
      file: `_data/seo/jobs.yml`,
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
          name: "subtitle",
          widget: "string",
          crowdin: true,
        },
      ],
    },
    {
      label: "Search",
      name: "search",
      file: `_data/seo/search.yml`,
      crowdin: true,
      fields: [
        {
          label: "Search text",
          name: "title",
          widget: "string",
          crowdin: true,
        },
        {
          label: "Cancel text",
          name: "cancel",
          widget: "string",
          crowdin: true,
        },
      ],
    },
    {
      label: "Language center",
      name: "language",
      file: `_data/seo/language.yml`,
      crowdin: true,
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          crowdin: true,
        },
        {
          label: "Sub Title",
          name: "subtitle",
          widget: "string",
          crowdin: true,
        },
        {
          label: "Description",
          name: "description",
          widget: "string",
          crowdin: true,
        },
        {
          label: "Call to action",
          name: "callToAction",
          widget: "string",
          crowdin: true,
        },
      ],
    },
  ],
} satisfies CmsCollection;
