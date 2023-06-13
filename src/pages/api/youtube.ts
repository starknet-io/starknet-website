import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { CMSCors, runMiddleware } from "./(utils)/middleware";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await runMiddleware(req, res, CMSCors);

  const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
  });

  if (typeof req.query.id !== "string") {
    res.status(422).json({ message: "Invalid id provided!" });

    return;
  }

  const { data } = await youtube.videos.list({
    id: [req.query.id],
    part: ["snippet", "contentDetails"],
  });

  const item = data?.items?.[0];

  if (item == null) {
    res.status(404).json({ message: "Video not found!" });

    return;
  }

  res.status(200).json({
    data: item,
  });
}
