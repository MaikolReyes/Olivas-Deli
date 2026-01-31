/* eslint-disable @next/next/no-img-element */
import { Lato, Montserrat, Open_Sans, Poppins } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import "swiper/css/navigation";
import "swiper/css";
import "./globals.css";

config.autoAddCss = false;

/* =======================
   Fonts
======================= */

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* =======================
  Metadata
======================= */

export const metadata: Metadata = {
  title: "Oliva's Deli",
  description:
    "Panes y postres artesanales, desayunos, catering y boxes especiales. Producción fresca y atención personalizada. Pedí en Oliva's Deli.",
};

/* =======================
  Root Layout
======================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`
        ${lato.variable}
        ${montserrat.variable}
        ${openSans.variable}
        ${poppins.variable}
      `}
    >
      <head>
        {/* ================= Meta Pixel ================= */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '2339855833200498');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-linear-to-br from-[#f6eef5] via-white to-[#ede3ec]">
        {/* Fallback NoScript Meta Pixel */}
        <noscript>

          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2339855833200498&ev=PageView&noscript=1"
            alt=""
          />
          
        </noscript>

        {/* Analytics */}
        <GoogleAnalytics />
        <Analytics />

        {/* Layout */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
