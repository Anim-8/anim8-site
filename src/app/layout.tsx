import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./styles/globals.scss";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/nav/Footer";
import Script from "next/script";

const merriweather = Merriweather({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Anim8",
  description: "Business Software & Consulting Solutions",
  icons: "/favicon.png"
};

export default function RootLayout(
  {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="matomo-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://anim8tech.matomo.cloud/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src='https://cdn.matomo.cloud/anim8tech.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />
      </head>
      <body className={`${merriweather.className} theme-dark`}>
        <Navigation />
        <main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
