import { Open_Sans, Bebas_Neue } from "next/font/google";

import Navbar from "../components/Navbar";
import Container from "../components/Container/Container";
import "../styles/variables.css";
import "../styles/styles.css";

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: "400",
}); */

/* <meta name="msapplication-TileColor" content="#ffffff" />
<meta
name="msapplication-TileImage"
content="/icons/ms-icon-144x144.png"
/>
<meta name="theme-color" content="#0f0f0f" /> */

export const metadata = {
  title: "Ninja Labs",
  description: "Built by Kieran, a place to showcase my work!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
