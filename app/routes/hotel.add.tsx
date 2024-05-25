import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";
import { sdkWithToken } from "@/services/graphql.server";
import HotelForm from "@/features/hotel/components/HotelForm";
import { authenticator } from "@/services/auth.server";

export const action = async ({request}: ActionFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request)
  if (!user) {
    return redirect("/hotel");
  }
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const hotel = await sdkWithToken(user.accessToken).addHotel({ ...data });
  return redirect(`/hotel/${hotel.addHotel.id}`);
}

export default function Page() {
  return (
    <HotelForm edit={false} />
  );
}
