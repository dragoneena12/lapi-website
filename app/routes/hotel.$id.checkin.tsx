import Checkin from "@/features/hotel/components/Checkin";
import { authenticator } from "@/services/auth.server";
import { sdkWithToken } from "@/services/graphql.server";
import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";

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
  await sdkWithToken(user.accessToken).checkin({ hotelID: params.id, ...data });
  return redirect(`/hotel`);
}

export default function Page() {
  return (
    <Checkin />
  );
}
