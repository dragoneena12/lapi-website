import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { sdkWithToken } from "@/services/graphql.server";
import { authenticator } from "@/services/auth.server";
import StayHistory from "@/features/hotel/components/StayHistory";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request)
  if (!user) {
    return redirect("/hotel");
  }
  const stays = await sdkWithToken(user.accessToken).findMyStays();
  return json({ stays });
}


export default function Page() {
  const {stays} = useLoaderData<typeof loader>();
  return (
    <StayHistory stays={stays} />
  );
}