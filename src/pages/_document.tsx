import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=author@400,500,300,401&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
