import { ModuleOptions } from "simple-oauth2";

export type Provider = "github";

export const moduleOptionsByProvider = {
  github: {
    client: {
      id: process.env.OAUTH_GITHUB_CLIENT_ID as string,
      secret: process.env.OAUTH_GITHUB_CLIENT_SECRET as string,
    },
    auth: {
      tokenHost: "https://github.com",
      tokenPath: "/login/oauth/access_token",
      authorizePath: "/login/oauth/authorize",
    },
  },
} satisfies Record<Provider, ModuleOptions>;

export const scopeByProvider = {
  github: "repo,user",
} satisfies Record<Provider, string>;
