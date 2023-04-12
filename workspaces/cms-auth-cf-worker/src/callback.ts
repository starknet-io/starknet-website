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
      postMessageHTML("success", provider, { token, provider }),
      {
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      }
    );
  } catch (e: any) {
    return new Response(postMessageHTML("error", provider, e), {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }
}

function postMessageHTML(
  status: string,
  provider: string,
  data: any,
  origin: string = "*"
) {
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
