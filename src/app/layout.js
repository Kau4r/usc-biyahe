import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/client";

import Providers from "./components/providers";

export const metadata = {
 title: "biyahe",
 description: "biyahe ta bai!",
};

export default function RootLayout({ children }) {
 const { data: session, status } = useSession();

 if (status === "loading") {
  return <p>Loading...</p>;
 }

 return (
  <html lang="en">
    <body>
      <Providers>
        <SessionProvider session={session}>{children}</SessionProvider>
      </Providers>
    </body>
  </html>
 );
}
