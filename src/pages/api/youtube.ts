import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
  origin: ["https://starknet-website-cms.netlify.app", "http://localhost:1234"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await runMiddleware(req, res, cors);

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
    part: ["snippet"],
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
