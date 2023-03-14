import { NextRequest, NextResponse } from "next/server";
import { AuthorizationCode } from "simple-oauth2";
import { moduleOptionsByProvider, Provider } from "../config";

export async function GET(req: NextRequest) {
  const host = req.headers.get("host");
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const code = urlParams.get("code");
  const provider = urlParams.get("provider") as Provider;

  if (provider != null && moduleOptionsByProvider[provider] == null) {
    throw new Error(`Unsupported provider ${provider}`);
  }

  try {
    if (!code) throw new Error(`Missing code ${code}`);

    const client = new AuthorizationCode(moduleOptionsByProvider[provider]);
    const tokenParams = {
      code,
      redirect_uri: `https://${host}/callback?provider=${provider}`,
    };

    const accessToken = await client.getToken(tokenParams);
    const token = accessToken.token["access_token"] as string;

    const responseBody = renderBody("success", {
      token,
      provider,
    });

    return new NextResponse(responseBody, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  } catch (e: any) {
    return new NextResponse(renderBody("error", e), {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }
}

function renderBody(
  status: string,
  content: {
    token: string;
    provider: string;
  },
) {
  const authorization = JSON.stringify(
    ["authorization", content.provider, status, JSON.stringify(content)].join(
      ":",
    ),
  );

  const authorizing = JSON.stringify(
    ["authorizing", content.provider].join(":"),
  );

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

      window.opener.postMessage(${authorizing}, "*");
    </script>
    </body>
    </html>
  `;
}
