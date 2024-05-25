import type { LoaderFunctionArgs } from "@remix-run/node";

import { authenticator } from "@/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await authenticator.authenticate("auth0", request, {
    successRedirect: "/hotel",
    failureRedirect: "/hotel",
  });
};
