import Head from "next/head";

import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ninja Labs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
