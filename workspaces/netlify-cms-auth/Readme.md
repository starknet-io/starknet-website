## Deployment
the CMS auth has a [url callback whitelist](src/callback.ts?plain=63) and is deployed to cloudflare worker with the configuration below:

| Configuration | Value             |
|---------------|-------------------|
| Name          | netlify-cms-auth  |
| usage model   | Unbound           |

### environment variables and secrets
#### in cloudflare
| Name                       | Type    | Description                                     |
|----------------------------|---------|-------------------------------------------------|
| OAUTH_GITHUB_CLIENT_ID     | Secret  | github Oauth client ID (under starknet org)     |
| OAUTH_GITHUB_CLIENT_SECRET | Secret  | github Oauth client Secret (under starknet org) |

