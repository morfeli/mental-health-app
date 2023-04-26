import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import type { NextComponentType } from "next";

import { MindScapeProvider } from "components/store/mindscape-context";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean }; // add auth type
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <MindScapeProvider>
        <Component {...pageProps} />
      </MindScapeProvider>
    </SessionProvider>
  );
}
