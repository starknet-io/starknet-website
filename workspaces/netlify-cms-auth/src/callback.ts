import { OAuthApp } from "@octokit/oauth-app";
import { Env } from "./env";

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
        data: { token, provider },
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
        data: e,
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
  status: "success" | "error";
  data: any;
}

function postMessageHTML({ status, data }: PostMessageHTMLArgs) {
  return `
    <!DOCTYPE html>
    <html>
    <body>
    <script>
      function receiveMessage (message) {
        const allowedOrigin = (
          message.origin === 'http://localhost:1234' ||
          message.origin === 'http://127.0.0.1:1234' ||
          /^https:\\/\\/[-_\\w]+\\.starknet-netlify-cms\\.pages\\.dev$/.test(message.origin)
        );

        if (!allowedOrigin) return;
        if (message.data !== "authorizing:github") return;

        window.opener.postMessage(
          ${JSON.stringify(
            `authorization:github:${status}:${JSON.stringify(data)}`
          )},
          message.origin
        );

        window.removeEventListener("message", receiveMessage, false);
      }

      window.addEventListener("message", receiveMessage, false);

      window.opener.postMessage("authorizing:github", "*");
    </script>
    </body>
    </html>
  `;
}
