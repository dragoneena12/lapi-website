import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { graphql } from "@/generated";
import Hotel from "@/features/hotel/components/Hotel";
import { authenticator } from "@/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { client, clientWithToken } from "@/services/graphql.server";

const findHotels = graphql(`
  query findHotels {
    hotels {
      id
      ownerID
      name
      location
    }
  }
`);

const findMyStayCount = graphql(`
  query stayCount {
    stayCount
  }
`);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const hotels = (await client().query({ query: findHotels })).data;
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return json({ hotels, user: null, stayCount: 0 });
  }
  const { stayCount } = (
    await clientWithToken(user.accessToken).query({ query: findMyStayCount })
  ).data;
  return json({ hotels, user, stayCount });
};

export default function Page() {
  const { hotels, user, stayCount } = useLoaderData<typeof loader>();
  return <Hotel user={user} stayCount={stayCount} hotels={hotels} />;
}
