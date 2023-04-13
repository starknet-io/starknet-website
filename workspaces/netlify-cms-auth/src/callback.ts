import { OAuthApp } from "@octokit/oauth-app";
import { Env } from "./env";

const frontendOrigin = "*.starknet-netlify-cms.pages.dev";

export async function callback(
  request: Request,
  env: Env,
  ctx: ExecutionContext
) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code")!;
  const provider = "github";

  try {
    const app = new OAuthApp({
      clientType: "oauth-app",
      clientId: env.OAUTH_GITHUB_CLIENT_ID,
      clientSecret: env.OAUTH_GITHUB_CLIENT_SECRET,
    });

    const {
      authentication: { token },
    } = await app.createToken({ code });

    return new Response(
      postMessageHTML({
        status: "success",
        provider,
        data: { token, provider },
        origin: frontendOrigin,
      }),
      {
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      }
    );
  } catch (e: any) {
    return new Response(
      postMessageHTML({
        status: "error",
        provider,
        data: e,
        origin: frontendOrigin,
      }),
      {
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      }
    );
  }
}

interface PostMessageHTMLArgs {
  status: string;
  provider: string;
  data: any;
  origin: string;
}

function postMessageHTML({
  status,
  provider,
  data,
  origin,
}: PostMessageHTMLArgs) {
  const authorization = JSON.stringify(
    ["authorization", provider, status, JSON.stringify(data)].join(":")
  );

  const authorizing = JSON.stringify(["authorizing", provider].join(":"));

  return `
    <!DOCTYPE html>
    <html>
    <body>
    <script>
      function receiveMessage (message) {
        if (message.data === ${authorizing}) {
          window.opener.postMessage(
            ${authorization},
            message.origin
          );

          window.removeEventListener("message", receiveMessage, false);
        }
      }

      window.addEventListener("message", receiveMessage, false);

      window.opener.postMessage(${authorizing}, ${JSON.stringify(origin)});
    </script>
    </body>
    </html>
  `;
}
