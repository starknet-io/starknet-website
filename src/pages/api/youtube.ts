import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
  });

  const { data } = await youtube.videos.list({
    id: (req.query.id as string).split(","),
  });

  const videos = data.items;

  res.status(200).json({ videos });
}
