import { getBlogPosts } from "@starknet-io/cms-data/src/settings/blog-posts";

export default async function handler(req, res) {
  const locale = req.query.locale || 'en';
  try {
    const blogPosts = await getBlogPosts(locale);
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}