import { topLevelBlocks } from "../blocks";
import { CmsCollection } from "../types";

export const postsCollectionConfig = {
  crowdin: true,
  name: "posts",
  label: "Blog - Posts",
  label_singular: "Post",
  identifier_field: "id",
  folder: "_data/posts",
  create: true,
  format: "yml",
  slug: "{{title}}",
  preview_path: "/preview/posts/{{id}}",
  summary: "{{title}} [{{published_date | date('YYYY-MM-DD')}}]",
  sortable_fields: ["published_date", "title"],
  view_filters: [
    {
      field: 'category', 
      label: 'Community and Events',
      pattern: 'community-and-events'
    },
    {
      field: 'category', 
      label: 'Community Calls',
      pattern: 'community-calls'
    },
    {
      field: 'category', 
      label: 'Ecosystem',
      pattern: 'ecosystem'
    },
    {
      field: 'category', 
      label: 'Developers',
      pattern: 'engineering'
    },
    {
      field: 'category', 
      label: 'Foundation',
      pattern: '757155c6-ce07-49f1-af21-907b7e0b1cb1'
    },
    {
      field: 'category', 
      label: 'Governance',
      pattern: 'governance'
    },
    {
      field: 'category', 
      label: 'Stark Math',
      pattern: 'stark-math'
    },
    {
      field: 'category', 
      label: 'STARK Struck Podcast',
      pattern: 'stark-struck'
    },
  ],
  fields: [
    {
      name: "id",
      label: "id",
      widget: "uuid",
    },
    {
      name: "post_type",
      label: "Post Type",
      widget: "select",
      options: [
        {
          label: "Article",
          value: "article",
        },
        {
          label: "Video",
          value: "video",
        },
        {
          label: "Audio",
          value: "audio",
        },
      ],
      default: "article",
    },
    {
      name: "isFeatured",
      label: "Is featured post",
      widget: "boolean",
    },
    {
      name: "title",
      label: "Post Title",
      widget: "string",
      crowdin: true
    },
    {
      name: "toc",
      label: "Table of contents",
      widget: "boolean"
    },
    {
      name: "published_date",
      label: "Published Date",
      widget: "datetime",
    },
    {
      name: "video",
      label: "Video - youtube link",
      widget: "youtube",
      required: false,
    },
    {
      name: "image",
      label: "Featured Image",
      widget: "image",
    },
    {
      name: "category",
      label: "Category",
      widget: "relation",
      multiple: true,
      collection: "categories",
      search_fields: ["name"],
      value_field: "id",
      display_fields:(["name", "({{parentCategory}})"]),
    },
    {
      name: "topic",
      label: "Topic",
      widget: "relation",
      multiple: true,
      collection: "topics",
      search_fields: ["name"],
      value_field: "id",
      display_fields: ["name"],
    },
    {
      name: "short_desc",
      label: "Seo Description",
      widget: "text",
    },
    {
      name: "post_desc",
      label: "Post Description",
      widget: "text",
    },
    {
      required: false,
      name: "seoFocusKeywords",
      label: "Seo focus keywords",
      hint: "Enter the focus keywords separated by commas",
      widget: 'list',
      crowdin: true,
    },
    {
      required: false,
      name: "seoCanonicalUrl",
      label: "Seo Canonical url",
      hint: "If the article was lifted from somewhere else, you can link it here",
      widget: 'string',
      crowdin: true,
    },
    {
      name: "blocks",
      label: "Blocks",
      widget: "list",
      types: topLevelBlocks,
    }
  ],
} satisfies CmsCollection;
