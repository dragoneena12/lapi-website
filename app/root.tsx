import type { LoaderFunctionArgs, MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styles from "./root.scss?url"
import classes from "./root.module.scss";
import { setStrategy } from "./services/auth.server";
import { setEndpoint } from "./services/graphql.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "lapi.tokyo" },
    {
      name: "description",
      content: "Lapi's personal website.",
    },
  ];
};

export const loader = ({ context }: LoaderFunctionArgs) => {
  const auth0ClientSecret = context.cloudflare.env.AUTH0_CLIENT_SECRET
  setStrategy(auth0ClientSecret);
  const apiEndpoint = context.cloudflare.env.API_ENDPOINT
  setEndpoint(apiEndpoint);
  return null
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <div className={classes.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
