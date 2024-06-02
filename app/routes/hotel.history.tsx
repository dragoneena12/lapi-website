import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { clientWithToken } from "@/services/graphql.server";
import { getAuthenticator } from "@/services/auth.server";
import StayHistory from "@/features/hotel/components/StayHistory";
import { graphql } from "@/generated";

const findMyStays = graphql(`
  query findMyStays {
    stays {
      id
      checkinTime
      hotel {
        name
      }
    }
  }
`);

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const user = await getAuthenticator(context).isAuthenticated(request);
  if (!user) {
    return redirect("/hotel");
  }
  const stays = (
    await clientWithToken(context, user.accessToken).query({ query: findMyStays })
  ).data;
  return json({ stays });
};

export default function Page() {
  const { stays } = useLoaderData<typeof loader>();
  return <StayHistory stays={stays} />;
}
