import Head from "next/head";
import Header from "./Header";

export default ({ children }) => (
  <div>
    <Head>
      <title>Ninja Labs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
  </div>
);
