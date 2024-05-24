import type { MetaFunction } from "@remix-run/cloudflare";
import type { LinksFunction } from "@remix-run/node";
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
