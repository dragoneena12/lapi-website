import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";

import { getAuthenticator } from "@/services/auth.server";

export const loader = async () => redirect("/hotel");

export const action = async ({ request, context }: ActionFunctionArgs) => {
  return await getAuthenticator(context).authenticate("auth0", request);
};
