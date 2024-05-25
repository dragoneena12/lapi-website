import { LoaderFunctionArgs, ActionFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { sdk, sdkWithToken } from "@/services/graphql.server";
import HotelForm from "@/features/hotel/components/HotelForm";
import { authenticator } from "@/services/auth.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const hotel = await sdk().getHotelDetail({ id: params.id });
  return json({ hotel });
}

export const action = async ({request, params}: ActionFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const user = await authenticator.isAuthenticated(request)
  if (!user) {
    return redirect("/hotel");
  }
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await sdkWithToken(user.accessToken).editHotel({ id: params.id, ...data });
  return redirect(`/hotel/${params.id}`);
}

export default function Page() {
  const {hotel} = useLoaderData<typeof loader>();
  if (!hotel) {
    return null;
  }
  return (
    <HotelForm edit={true} hotel={hotel} />
  );
}
