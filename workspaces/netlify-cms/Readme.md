## Deployment
the CMS is deployed to cloudflare pages with the configuration below:

| Configuration | Value                |
|---------------|----------------------|
| Name          | starknet-netlify-cms |
| usage model   | Bundled              |

### environment variables and secrets
#### in github
| Name                   | Type       | Description                                                |
|------------------------|------------|------------------------------------------------------------|
| VITE_LIVE_PREVIEW_URL  | Variable   | declared in the pipeline (netlify-cms.yml)                 |
| VITE_GIT_BRANCH_NAME   | Variable   | declared in the pipeline (netlify-cms.yml)                 |
| VITE_API_BASE_URL      | Variable   | declared in the pipeline (netlify-cms.yml)                 |
| VITE_DATA_URL          | Variable   | declared in the pipeline (netlify-cms.yml)                 |
| VITE_BACKEND_AUTH_URL  | Variable   | CMS auth url -- declared in the pipeline (netlify-cms.yml) |
