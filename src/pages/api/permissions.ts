import { getPermissions } from "@starknet-io/cms-data/src/settings/permissions";
import { NextApiRequest, NextApiResponse } from "next";
import { CMSCors, runMiddleware } from "./(utils)/middleware";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await runMiddleware(req, res, CMSCors);
    const permissions = await getPermissions();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
