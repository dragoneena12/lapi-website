import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { sessionStorage } from "@/services/session.server";
import { User } from "@/types/user";
import { AppLoadContext } from "@remix-run/cloudflare";
import { Env } from "@/types/env";

export const getAuthenticator = (context: AppLoadContext) => {
  const authenticator = new Authenticator<User>(sessionStorage);

  const env = context.cloudflare.env as Env;
  const hostname = env.HOSTNAME;
  const auth0ClientID = env.AUTH0_CLIENT_ID;
  const auth0ClientSecret = env.AUTH0_CLIENT_SECRET;
  const auth0Strategy = new Auth0Strategy(
    {
      callbackURL: hostname + "/hotel/callback",
      clientID: auth0ClientID,
      clientSecret: auth0ClientSecret,
      domain: "lapi.us.auth0.com",
    },
    async ({ accessToken, profile }) => {
      const profileJson = profile._json  as {"https://lapi.tokyo/claims/roles": string[]};
      const user: User = {
        accessToken: accessToken,
        id: profile.id || "",
        name: profile.displayName || "",
        imageURL: profile.photos?.[0].value || "",
        roles: profileJson["https://lapi.tokyo/claims/roles"] || [],
      };
      return user;
    }
  );

  authenticator.use(auth0Strategy);
  return authenticator;
};
