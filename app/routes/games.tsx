import { Outlet } from "@remix-run/react";
import Games from "@/features/games/components/Games";

export default function Page() {
  return (
    <>
      <Games />
      <Outlet />
    </>
  );
}
