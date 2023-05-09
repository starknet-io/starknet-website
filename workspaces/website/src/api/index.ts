import { Router } from "itty-router";
import { google } from "googleapis";
import { error, json, missing } from "itty-router-extras";
import { createCors } from "itty-cors";

// now let's create a router (note the lack of "new")
export const router = Router();

const { preflight, corsify } = createCors({
  origins: [
    "https://starknet-website-cms.netlify.app",
    "http://127.0.0.1:1234",
    "http://localhost:1234",
    "https://*.starknet-netlify-cms.pages.dev",
  ],
});

// @ts-expect-error
router.all("*", preflight);

// @ts-expect-error
router.get("/api/youtube", corsify, async (req) => {
  const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
  });

  if (typeof req.query.id !== "string") {
    return (error(422, { message: "Invalid id provided!" }));
  }

  const { data } = await youtube.videos.list({
    id: [req.query.id],
    part: ["snippet", "contentDetails"],
  });

  const item = data?.items?.[0];

  if (item == null) {
    return (
      missing({
        message: "Video not found!",
      })
    );
  }

  return (
    json({
      data: item,
    })
  );
});
