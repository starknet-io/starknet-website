import { AuthorizationCode } from "simple-oauth2";
import { randomBytes } from "crypto";
import { Provider, moduleOptionsByProvider, scopeByProvider } from "../config";
import { NextRequest, NextResponse } from "next/server";

export const randomString = () => randomBytes(4).toString("hex");

export async function GET(req: NextRequest) {
  const host = req.headers.get("host");
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const provider = urlParams.get("provider") as Provider;

  if (provider != null && moduleOptionsByProvider[provider] == null) {
    throw new Error(`Unsupported provider ${provider}`);
  }

  const client = new AuthorizationCode(moduleOptionsByProvider[provider]);

  const authorizationUri = client.authorizeURL({
    redirect_uri: `https://${host}/callback?provider=${provider}`,
    scope: scopeByProvider[provider],
    state: randomString(),
  });

  return NextResponse.redirect(authorizationUri, 301);
}
