import {
  LoaderFunctionArgs,
  ActionFunctionArgs,
  json,
  redirect,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { client, clientWithToken } from "@/services/graphql.server";
import HotelForm from "@/features/hotel/components/HotelForm";
import { authenticator } from "@/services/auth.server";
import { graphql } from "@/generated";
import { EditHotelMutationVariables } from "@/generated/graphql";

const getHotelDetail = graphql(`
  query getHotelDetail($id: ID!) {
    hotel(id: $id) {
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

const editHotel = graphql(`
  mutation editHotel(
    $id: ID!
    $name: String!
    $location: String!
    $carbonAwards: [String!]!
    $fullereneAwards: [String!]!
    $carbonNanotubeAwards: [String!]!
    $grapheneAwards: [String!]!
    $diamondAwards: [String!]!
  ) {
    editHotel(
      input: {
        id: $id
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

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const hotel = (
    await client().query({
      query: getHotelDetail,
      variables: { id: params.id },
    })
  ).data;
  return json({ hotel });
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return redirect("/hotel");
  }
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  await clientWithToken(user.accessToken).mutate({
    mutation: editHotel,
    variables: { id: params.id, ...data } as EditHotelMutationVariables,
  });
  return redirect(`/hotel/${params.id}`);
};

export default function Page() {
  const { hotel } = useLoaderData<typeof loader>();
  if (!hotel) {
    return null;
  }
  return <HotelForm edit={true} hotel={hotel} />;
}
