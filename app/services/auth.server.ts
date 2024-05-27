import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { sessionStorage } from "@/services/session.server";
import { User } from "@/types/user";

export const authenticator = new Authenticator<User>(sessionStorage);

export const setStrategy = (hostname: string, clientID: string, clientSecret: string) => {
  const auth0Strategy = new Auth0Strategy(
    {
      callbackURL: hostname + "/hotel/callback",
      clientID: clientID,
      clientSecret: clientSecret,
      domain: "lapi.us.auth0.com",
    },
    async ({ accessToken, profile }) => {
      const user: User = {
        accessToken: accessToken,
        id: profile.id || "",
        name: profile.displayName || "",
        imageURL: profile.photos?.[0].value || "",
        roles: profile._json["https://lapi.tokyo/claims/roles"] || [],
      };
      return user
    }
  );
  
  authenticator.use(auth0Strategy);
}



