import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MindScapeProvider } from "components/store/mindscape-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MindScapeProvider>
      <Component {...pageProps} />;
    </MindScapeProvider>
  );
}
