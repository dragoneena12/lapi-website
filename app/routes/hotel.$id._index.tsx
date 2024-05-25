import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { sdk } from "@/services/graphql.server";
import HotelDetail from "@/features/hotel/components/HotelDetail";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const hotel = await sdk().getHotelDetail({ id: params.id });
  return json({ hotel });
}

export default function Page() {
  const {hotel} = useLoaderData<typeof loader>();
  return (
    <HotelDetail hotel={hotel} />
  );
}
