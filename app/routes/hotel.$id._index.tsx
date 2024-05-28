import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { client } from "@/services/graphql.server";
import HotelDetail from "@/features/hotel/components/HotelDetail";
import { graphql } from "@/generated";

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

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const hotel = (
    await client(context).query({
      query: getHotelDetail,
      variables: { id: params.id },
    })
  ).data;
  return json({ hotel });
};

export default function Page() {
  const { hotel } = useLoaderData<typeof loader>();
  return <HotelDetail hotel={hotel} />;
}
