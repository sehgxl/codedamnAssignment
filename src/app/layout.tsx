import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>Codedamn</title>
        </Head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
