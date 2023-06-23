import { Router, createCors, error, json } from 'itty-router'
import { getPermissions } from '@starknet-io/cms-data/src/settings/permissions'

// now let's create a router (note the lack of "new")
export const apiRouter = Router({ base: "/api" });

const { preflight, corsify } = createCors({
  origins: [
    "https://starknet-website-cms.netlify.app",
    "http://127.0.0.1:1234",
    "http://localhost:1234",
    "https://*.starknet-netlify-cms.pages.dev",
  ],
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

apiRouter.get(
  "/permissions",
  async (req, event: WorkerGlobalScopeEventMap["fetch"]) => {
      // const response = await fetch(
      //   "https://starknet-website-cms-permissions.yukilabs.workers.dev/data/permissions/en.json"
      // );

      // const permissions = await response.json();
      const permissions = [
        {
          username: 'lorcan-codes',
          access: ['pages', 'posts', 'permissions']
        }
      ]

      if (permissions == null) {
        return corsify(
          error(404, {
            message: "No permissions found",
          })
        );
      }
  
      return corsify(
        json({permissions})
      );

    }
);
