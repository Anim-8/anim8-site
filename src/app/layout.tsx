import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./styles/globals.scss";
import Navigation from "./components/nav/Navigation";
import KeyValuePair from "@/models/KeyValuePair";
import Footer from "./components/nav/Footer";

const merriweather = Merriweather({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Anim8",
  description: "Business Software & Consulting Solutions",
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} theme-dark`}>
        <Navigation />
        <main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
