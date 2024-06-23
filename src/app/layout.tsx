import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Richard Byers Software Engineer",
  metadataBase: new URL("https://www.rickybyers.com/"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Eric Huang", url: "https://github.com/erich2s" },
    { name: "黄士崧", url: "https://github.com/erich2s" },
    { name: "Richard Byers", url: "https://github.com/Richard-Byers" },
    
  ],
  description: "Richard Byers' personal portfolio website",
  openGraph: {
    title: "Richard Byers Software Engineer",
    description: "Richard Byers' personal portfolio website",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Eric Huang's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
