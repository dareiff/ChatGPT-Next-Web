import { Analytics } from "@vercel/analytics/react";
import PlausibleProvider from "next-plausible";
import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <PlausibleProvider
        domain="myfrienddereks.com"
        selfHosted={true}
        customDomain="https://io.fun-club.xyz"
      >
        <Home />
      </PlausibleProvider>
      {serverConfig?.isVercel && (
        <>
          <Analytics />
        </>
      )}
    </>
  );
}
