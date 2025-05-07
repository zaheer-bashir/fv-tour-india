import React from "react";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default DefaultLayout;
