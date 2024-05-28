import type { ActionFunctionArgs } from "@remix-run/cloudflare";

import { getAuthenticator } from "@/services/auth.server";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  await getAuthenticator(context).logout(request, {redirectTo: "/hotel"});
};
