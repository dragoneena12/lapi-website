import Checkin from "@/features/hotel/components/Checkin";
import { graphql } from "@/generated";
import { authenticator } from "@/services/auth.server";
import { clientWithToken } from "@/services/graphql.server";
import { ApolloError } from "@apollo/client/index";
import { ActionFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useActionData } from "@remix-run/react";

const checkin = graphql(`
  mutation checkin($hotelID: ID!, $otp: String!) {
    checkin(input: { hotelID: $hotelID, otp: $otp }) {
      id
    }
  }
`);

export const action = async ({ request, params }: ActionFunctionArgs) => {
  if (!params.id) {
    return redirect("/hotel");
  }
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return redirect("/hotel");
  }
  const formData = await request.formData();
  const otp = formData.get("otp");
  try{
    await clientWithToken(user.accessToken).mutate({
      mutation: checkin,
      variables: { hotelID: params.id, otp: otp as string },
    });
  } catch (e){
    if (e instanceof ApolloError) {
    return json({ errors: [e.message] });
    }
  }
  return redirect(`/hotel`);
};

export default function Page() {
  const data = useActionData<typeof action>();
  return <Checkin errors={data?.errors} />;
}
