import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { graphql } from "@/generated";
import Hotel from "@/features/hotel/components/Hotel";
import { getAuthenticator } from "@/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { client, clientWithToken } from "@/services/graphql.server";
import { ApolloError } from "@apollo/client/index";

const findHotels = graphql(`
  query findHotels {
    hotels {
      id
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

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const hotels = (await client(context).query({ query: findHotels })).data;
  const user = await getAuthenticator(context).isAuthenticated(request);
  if (!user) {
    return json({ hotels, user: null, stayCount: 0 });
  }
  try {
    const { stayCount } = (
      await clientWithToken(context, user.accessToken).query({ query: findMyStayCount })
    ).data;
    return json({ hotels, user, stayCount });
  } catch (error) {
    if (error instanceof ApolloError && error.networkError && "statusCode" in error.networkError && error.networkError.statusCode === 401) {
      await getAuthenticator(context).logout(request, {redirectTo: "/hotel"});
    } else {
      throw error;
    }
  }
};

export default function Page() {
  const { hotels, user, stayCount } = useLoaderData<typeof loader>();
  return <Hotel user={user} stayCount={stayCount} hotels={hotels} />;
}
