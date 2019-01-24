import Head from "next/head";
import Navbar from "./Navbar";
import GlobalStyles from "./GlobalStyles";

export default ({ children }) => (
  <div>
    <Head>
      <title>Ninja Labs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Rubik"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    {children}
    <GlobalStyles />
  </div>
);
