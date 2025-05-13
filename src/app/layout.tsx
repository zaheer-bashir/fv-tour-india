import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import DefaultLayout from "@/layout/default-layout";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bienvenido a Art of Travel India Holidays",
  description:
    "Discover the magic of India with our expertly curated tour packages. Explore vibrant cities, ancient heritage, breathtaking landscapes, and rich cultural experiences. Whether you seek adventure, spirituality, or relaxation, TOUR-OF-INDIA.COM offers unforgettable journeys tailored for every traveler.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16896171707"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J4CEWRP1HC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16896171707');
            gtag('config', 'G-J4CEWRP1HC');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        <DefaultLayout>{children}</DefaultLayout>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
                'send_to': 'AW-16896171707/Q9MuCPm2-sYaELu93Pg-',
                'value': 1.0,
                'currency': 'INR'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
