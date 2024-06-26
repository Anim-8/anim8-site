import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./styles/globals.scss";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/nav/Footer";
import Head from "next/head";

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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="${process.env.NEXT_PUBLIC_MATOMO_URL}";
                _paq.push(['setTrackerUrl', u + 'matomo.php']);
                _paq.push(['setSiteId', '${process.env.NEXT_PUBLIC_MATOMO_SITE_ID}']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u + 'matomo.js'; s.parentNode.insertBefore(g, s);
              })();
            `,
          }}
        />
      </Head>
      <body className={`${merriweather.className} theme-dark`}>
        <Navigation />
        <main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
