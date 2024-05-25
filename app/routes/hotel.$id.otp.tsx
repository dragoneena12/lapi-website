import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { sdkWithToken } from "@/services/graphql.server";
import { authenticator } from "@/services/auth.server";
import ShowHotelKey from "@/features/hotel/components/ShowHotelKey";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const user = await authenticator.isAuthenticated(request)
  if (!user) {
    return redirect("/hotel");
  }
  const hotelKey = (await sdkWithToken(user.accessToken).getHotelKey({id: params.id})).hotelKey;
  return json({ hotelKey });
}


export default function Page() {
  const {hotelKey} = useLoaderData<typeof loader>();
  return (
    <ShowHotelKey hotelKey={hotelKey} />
  );
}
