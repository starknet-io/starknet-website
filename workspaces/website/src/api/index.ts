import { Router, createCors, error, json } from 'itty-router'

// now let's create a router (note the lack of "new")
export const apiRouter = Router({ base: "/api" });

export const { preflight, corsify } = createCors({
  origins: ['*'],
});

apiRouter.all("*", preflight);

apiRouter.get(
  "/youtube",
  async (req, event: WorkerGlobalScopeEventMap["fetch"]) => {
    if (typeof req.query.id !== "string") {
      return corsify(error(422, { message: "Invalid id provided!" }));
    }

    const query = new URLSearchParams();

    query.set("version", "v3");
    // TODO fix env for cf pages
    query.set("key", YOUTUBE_API_KEY);
    query.set("id", req.query.id as string);
    query.set("part", "snippet");
    query.append("part", "contentDetails");

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?${query}`
    );

    const data: any = await response.json();

    const item = data?.items?.[0];

    if (item == null) {
      return corsify(
        error(404, {
          message: "Video not found!",
        })
      );
    }

    return corsify(
      json({
        data: item,
      })
    );
  }
);
