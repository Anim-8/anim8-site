import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./styles/globals.scss";
import Navigation from "./components/nav/Navigation";
import KeyValuePair from "@/models/KeyValuePair";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Anim8",
  description: "Manufacturing Software and Process Control Consulting & Solutions",
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const topLevelLinks:KeyValuePair[] = [
    {key: "Collaborate", value: "collaborate"},
    {key: "Services", value: "services"},
    {key: "About", value: "about"}
  ]
  return (
    <html lang="en">
      <body className={`${merriweather.className} theme-dark`}>
        <Navigation links={topLevelLinks} />
        <main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">{children}</main>
        {/* <div>Footer</div> */}
      </body>
    </html>
  );
}
