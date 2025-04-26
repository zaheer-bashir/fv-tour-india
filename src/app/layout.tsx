import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import DefaultLayout from "@/layout/default-layout";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tours India",
  description: "Tours India",
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
