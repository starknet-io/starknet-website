import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";


export const CMSCors = Cors({
  methods: ["POST", "GET", "HEAD"],
  origin: [
    "https://starknet-website-cms.netlify.app",
    "http://127.0.0.1:1234",
    "http://localhost:1234",
    /^https:\/\/[-_\w]+\.starknet-netlify-cms\.pages\.dev$/,
  ],
});

export function runMiddleware(
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