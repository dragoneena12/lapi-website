import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import Home from "@/features/home/components/Home";

export const loader = async () => {
  const response = await fetch("https://zenn.dev/lapi/feed");
  const feed = await response.text();
  return json({ feed });
};

export default function Page() {
  const { feed } = useLoaderData<typeof loader>();
  return <Home feed={feed} />;
}
