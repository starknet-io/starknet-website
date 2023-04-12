import { OAuthApp } from "@octokit/oauth-app";
import { Env } from "./env";

export async function auth(request: Request, env: Env, ctx: ExecutionContext) {
  const app = new OAuthApp({
    clientType: "oauth-app",
    clientId: env.OAUTH_GITHUB_CLIENT_ID,
    clientSecret: env.OAUTH_GITHUB_CLIENT_SECRET,
  });

  const { url } = app.getWebFlowAuthorizationUrl({
    scopes: "repo,user",
  });

  return Response.redirect(url, 301);
}
