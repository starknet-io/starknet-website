import { createIntlMiddleware } from "next-intl/server";

export default createIntlMiddleware();

export const config = {
  matcher: "/",
};
