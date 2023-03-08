import mdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "tailwindui.com",
      "starknet.io",
      "starkware.co",
      "images.unsplash.com",
    ],
    dangerouslyAllowSVG: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/qypnmzkhbc",
        permanent: false,
      },
      {
        source: "/sequencer-api",
        destination: "/en/developers",
        permanent: false,
      },
      {
        source: "/cairopal",
        destination: "/en/developers",
        permanent: false,
      },
      {
        source: "/cairo-fixed-point-math",
        destination: "/en/developers",
        permanent: false,
      },
      {
        source: "/app-faqs",
        destination: "/en/learn/frequently-asked-questions",
        permanent: false,
      },
      {
        source: "/faq",
        destination: "/en/learn/frequently-asked-questions",
        permanent: false,
      },
      {
        source: "/updates",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/hello-starknet",
        destination: "https://docs.starknet.io",
        permanent: false,
      },
      {
        source: "/privacy-policy",
        destination: "/en/privacy-policy",
        permanent: false,
      },
      {
        source: "/terms",
        destination: "/en/terms",
        permanent: false,
      },
      {
        source: "/starknet-terms-of-use",
        destination: "/en/terms",
        permanent: false,
      },
      {
        source: "/glossary",
        destination: "/en/learn/glossary",
        permanent: false,
      },
      {
        source: "/community/community-jobs/:path*",
        destination: "/en/jobs",
        permanent: false,
      },
      {
        source: "/community/community-links/:path*",
        destination: "/en/community",
        permanent: false,
      },
      {
        source: "/front-page-with-stars-demo",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/community/community-links",
        destination: "/en/community",
        permanent: false,
      },
      {
        source: "/starkgate",
        destination: "https://starkgate.starknet.io",
        permanent: false,
      },
      {
        source: "/community/events/starknet-hackathon-amsterdam",
        destination: "/en/events",
        permanent: false,
      },
      {
        source: "/community/community-jobs",
        destination: "/en/jobs",
        permanent: false,
      },
      {
        source: "/community",
        destination: "/en/community",
        permanent: false,
      },
      {
        source: "/building-on-starknet/audit-service-providers",
        destination: "https://docs.starknet.io",
        permanent: false,
      },
      {
        source: "/network",
        destination: "https://docs.starknet.io",
        permanent: false,
      },
      {
        source: "/docs/sharp.html",
        destination: "https://www.cairo-lang.org/docs/sharp.html",
        permanent: false,
      },
      {
        source: "/media-kit",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/building-on-starknet/tutorials",
        destination: "/en/tutorials",
        permanent: false,
      },
      {
        source: "/building-on-starknet/developer-tools",
        destination: "/en/developers/tools-and-resources",
        permanent: false,
      },
      {
        source: "/recorded-talks",
        destination: "/en/posts/stark-math",
        permanent: false,
      },
      {
        source: "/building-on-starknet/versions-release-notes",
        destination:
          "https://docs.starknet.io/documentation/starknet_versions/version_notes",
        permanent: false,
      },
      {
        source: "/governance/starknet-governance-posts",
        destination: "/en/posts/governance",
        permanent: false,
      },
      {
        source: "/what-is-starknet/stark-struck-podcast",
        destination: "/en/posts/stark-struck",
        permanent: false,
      },
      {
        source: "/community/events",
        destination: "/en/events",
        permanent: false,
      },
      {
        source: "/building-on-starknet",
        destination: "/en/developers",
        permanent: false,
      },
      {
        source: "/what-is-starknet",
        destination: "/en/tutorials",
        permanent: false,
      },
      {
        source: "/building-on-starknet/workshops",
        destination: "/en/tutorials",
        permanent: false,
      },
      {
        source: "/what-is-starknet/blog-posts",
        destination: "/en/posts",
        permanent: false,
      },
      {
        source: "/latest-updates",
        destination: "https://docs.starknet.io",
        permanent: false,
      },
      {
        source: "/community/events/community-calls",
        destination: "/en/posts/community-calls",
        permanent: false,
      },
      {
        source: "/faq/:path*",
        destination: "/en/learn/frequently-asked-questions",
        permanent: false,
      },
      {
        source: "/blog-posts/:path*",
        destination: "/en/posts",
        permanent: false,
      },
      {
        source: "/podcasts/:path*",
        destination: "/en/posts",
        permanent: false,
      },
      {
        source: "/community-links/:path*",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/bulletin-board/:path*",
        destination: "/en/developers/tools-and-resources",
        permanent: false,
      },
      {
        source: "/latest-posts/:path*",
        destination: "/en/posts",
        permanent: false,
      },
      {
        source: "/category/uncategorized",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/tag/12",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/author/marketing",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/delegate",
        destination: "https://starknet.karmahq.xyz",
        permanent: false,
      },
      {
        source: "/governance",
        destination: "https://starknet.karmahq.xyz",
        permanent: false,
      },
    ];
  },
  webpack(config, _context) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });

    return config;
  },
};

export default withMDX(nextConfig);
