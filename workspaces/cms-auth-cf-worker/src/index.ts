import { auth } from "./auth";
import { callback } from "./callback";
import { Env } from "./env";

async function fetch(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/auth") {
    return auth(request, env, ctx);
  }

  if (url.pathname === "/callback") {
    return callback(request, env, ctx);
  }

  return new Response("Page not found!", {
    status: 404,
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetch };
