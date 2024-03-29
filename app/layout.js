import { Inter } from "next/font/google";

import Head from "next/head";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Illford Technologies",
  description: "Illford Technologies private Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito+Sans:opsz@6..12&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
