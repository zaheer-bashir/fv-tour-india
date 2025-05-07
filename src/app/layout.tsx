import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
      <body className={montserrat.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
