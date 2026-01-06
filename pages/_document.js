import Document, { Html, Head, Main, NextScript } from "next/document";

import { ICONS } from "../consts";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Built by Kieran, a place to showcase my work!"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#0f0f0f" />
          <link rel="manifest" href="/manifest.json" />
          {ICONS.map((attributes, key) => (
            <link key={`icon-${key}`} {...attributes} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
