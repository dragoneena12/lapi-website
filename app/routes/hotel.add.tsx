import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";
import { clientWithToken } from "@/services/graphql.server";
import HotelForm from "@/features/hotel/components/HotelForm";
import { getAuthenticator } from "@/services/auth.server";
import { graphql } from "@/generated";
import { AddHotelMutationVariables } from "@/generated/graphql";

const addHotel = graphql(`
  mutation addHotel(
    $name: String!
    $location: String!
    $carbonAwards: [String!]!
    $fullereneAwards: [String!]!
    $carbonNanotubeAwards: [String!]!
    $grapheneAwards: [String!]!
    $diamondAwards: [String!]!
  ) {
    addHotel(
      input: {
        name: $name
        location: $location
        carbonAwards: $carbonAwards
        fullereneAwards: $fullereneAwards
        carbonNanotubeAwards: $carbonNanotubeAwards
        grapheneAwards: $grapheneAwards
        diamondAwards: $diamondAwards
      }
    ) {
      id
      ownerID
      name
      location
      carbonAwards
      fullereneAwards
      carbonNanotubeAwards
      grapheneAwards
      diamondAwards
    }
  }
`);

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const user = await getAuthenticator(context).isAuthenticated(request);
  if (!user) {
    return redirect("/hotel");
  }
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const hotel = (
    await clientWithToken(context, user.accessToken).mutate({
      mutation: addHotel,
      variables: data as AddHotelMutationVariables,
    })
  ).data?.addHotel;
  return redirect(`/hotel/${hotel?.id}`);
};

export default function Page() {
  return <HotelForm edit={false} />;
}
