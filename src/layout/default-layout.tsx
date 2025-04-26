import React from "react";
import { Footer, TopHeader } from "@/components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <TopHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
