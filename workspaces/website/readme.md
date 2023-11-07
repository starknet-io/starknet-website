[Cloudflare Workers](https://workers.cloudflare.com/) with:
 - Vite
 - `vite-plugin-ssr`
 - React
 - [`react-streaming`](https://github.com/brillout/react-streaming)
 - Universal `fetch()`


## Docs

See [vite-plugin-ssr.com/cloudflare-workers](https://vite-plugin-ssr.com/cloudflare-workers).


## Run

```bash
git clone git@github.com:brillout/vite-plugin-ssr
cd vite-plugin-ssr/examples/cloudflare-workers-react-full/
npm install
```

Develop:

> For increased development speed, we use an Express.js development server instead of a worker.

```bash
npm run dev
```

Preview the worker locally:

> You'll need to login/create a Cloudflare account.

```bash
npm run preview
```

Deploy the worker to Cloudflare:
```bash
npm run deploy
```


## Universal `fetch()`

Note how we define a fetch function at `pageContext.fetch` that is universal: it works for development as well as for the production worker.

The trick is to provide a different `fetch()` implementation at [worker/ssr.ts](worker/ssr.ts) and [dev-server/index.js](dev-server/index.js).


## Deployment
the starknet website is deployed to cloudflare pages with the configuration below:

| Configuration | Value             |
|---------------|-------------------|
| Name          | starknet-websites |
| usage model   | Unbound           |

### enviroment variables and secrets
#### in github
| Name                        | Type   | Description                                                   |
|-----------------------------|--------|---------------------------------------------------------------|
| ALGOLIA_APP_ID              | Secret | algolia app token                                             |
| VITE_ALGOLIA_SEARCH_API_KEY | Secret | algolia api search key token                                  |
| CF_STREAM_URL               | Secret | the cloudflare video stream url                               |
| VITE_ED_VIDEO_ID_1          | Secret | the cloudflare video 1 ID  (found in cloudflare video stream) |
| VITE_ED_VIDEO_ID_2          | Secret | the cloudflare video 2 ID  (found in cloudflare video stream) |
| VITE_ED_VIDEO_ID_3          | Secret | the cloudflare video 3 ID  (found in cloudflare video stream) |
| VITE_ED_VIDEO_ID_4          | Secret | the cloudflare video 4 ID  (found in cloudflare video stream) |
#### in Cloudflare pages
| Name | Type   | Description     |
|------|--------|-----------------|
| YOUTUBE_API_KEY | Secret | youtube api key |

### Multimedia
#### Videos
Videos are hosted in cloudflare stream service, under videos we have all the video used in starknet.io
#### Images
Images are using cloudflare optimisation service (found under: cloudflare starknet.io domain > speed > optimization > image optimization) with the configuration below enabled
- Polish
- Protocol HTTP/2
- Protocol HTTP/2 to Origin
- Protocol TLS 1.3
