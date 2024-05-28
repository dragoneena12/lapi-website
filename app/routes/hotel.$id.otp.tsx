import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { clientWithToken } from "@/services/graphql.server";
import { getAuthenticator } from "@/services/auth.server";
import ShowHotelKey from "@/features/hotel/components/ShowHotelKey";
import { graphql } from "@/generated";

const getHotelKey = graphql(`
  query getHotelKey($id: ID!) {
    hotelKey(id: $id) {
      key
    }
  }
`);

export const loader = async ({ request, params, context }: LoaderFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const user = await getAuthenticator(context).isAuthenticated(request);
  if (!user) {
    return redirect("/hotel");
  }
  const hotelKey = (
    await clientWithToken(context, user.accessToken).query({
      query: getHotelKey,
      variables: { id: params.id },
    })
  ).data.hotelKey;
  return json({ hotelKey });
};

export default function Page() {
  const { hotelKey } = useLoaderData<typeof loader>();
  return <ShowHotelKey hotelKey={hotelKey} />;
}
