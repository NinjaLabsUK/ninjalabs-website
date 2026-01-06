import { Roboto_Mono } from "next/font/google";

import Navbar from "../components/Navbar";
import Container from "../components/Container/Container";
import "../styles/variables.css";
import "../styles/styles.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* <meta name="msapplication-TileColor" content="#ffffff" />
<meta
name="msapplication-TileImage"
content="/icons/ms-icon-144x144.png"
/>
<meta name="theme-color" content="#0f0f0f" /> */

export const metadata = {
  title: "Ninja Labs",
  description: "Built by Kieran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body>
        <div>
          <Navbar />
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
