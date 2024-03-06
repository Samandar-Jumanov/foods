"use client"

import  MainHeader  from "../components/main-header/main-header";
import { SessionProvider } from "next-auth/react";
import './globals.css'

export default function RootLayout({
  children,
  params: { session, ...params},
}) {
  return (
    <html>
      <body>
        <SessionProvider session={session}>
        <MainHeader />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}


