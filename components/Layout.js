import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import { SPACING, COLOURS } from "../styles";
import { ICONS } from "../consts";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Ninja Labs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      {ICONS.map((attributes, key) => (
        <link key={`icon-${key}`} {...attributes} />
      ))}
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/icons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <div
      style={{
        width: "100%",
        background: COLOURS.primary,
        padding: SPACING.small,
        textAlign: "center"
      }}
    >
      Under construction!
    </div>
    <Navbar />
    {children}
    <Footer />
    <div id="modal"></div>
    <GlobalStyles />
  </>
);

export default Layout;
