import Head from "next/head";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";

export default ({ children }) => (
  <div>
    <GlobalStyles />
    <Head>
      <title>Ninja Labs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
  </div>
);
