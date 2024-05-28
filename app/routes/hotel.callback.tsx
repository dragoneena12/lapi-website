import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

import { getAuthenticator } from "@/services/auth.server";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  return await getAuthenticator(context).authenticate("auth0", request, {
    successRedirect: "/hotel",
    failureRedirect: "/hotel",
  });
};
