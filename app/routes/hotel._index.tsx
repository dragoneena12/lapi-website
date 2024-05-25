import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import Hotel from "@/features/hotel/components/Hotel";
import { authenticator } from "@/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { sdk, sdkWithToken } from "@/services/graphql.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const hotels = (await sdk().findHotels());
  const user = await authenticator.isAuthenticated(request)
  if (!user) {
    return json({ hotels, user: null, stays: 0});
  }
  const stays = (await sdkWithToken(user.accessToken).stayCount()).stayCount;
  return json({ hotels, user, stays });
}

export default function Page() {
  const {user, stays, hotels} = useLoaderData<typeof loader>();
  return (
    <Hotel user={user} stayCount={stays} hotels={hotels} />
  );
}
