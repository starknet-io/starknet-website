import { getPostById } from "@starknet-io/cms-data/src/posts";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const locale = req.query.locale || 'en';
  try {
    const blogPosts = await getPostById(req.query.id, locale);
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}