import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { authenticator } from "@/services/auth.server";

export const loader = async () => redirect("/hotel");

export const action = async ({ request }: ActionFunctionArgs) => {
  return await authenticator.authenticate("auth0", request);
};
