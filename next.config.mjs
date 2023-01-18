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
    return [{
      source: '/',
      destination: '/en',
      permanent: false
    }]
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
