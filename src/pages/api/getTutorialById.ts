import algoliasearch from 'algoliasearch';
import { NextApiRequest, NextApiResponse } from 'next';

const client = algoliasearch(process.env.ALGOLIA_APP_ID as string, process.env.ALGOLIA_SEARCH_API_KEY as string);
const index = client.initIndex(`web_tutorials_${process.env.ALGOLIA_INDEX}`);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: 'Tutorial ID is required' });
  }

  try {
    const tutorial = await index.getObject(id as string);
    res.status(200).json(tutorial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: (error as Error).message });
  }

}