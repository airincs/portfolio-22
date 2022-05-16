import React from "react";
import Navbar from "./navbar/Navbar";
import ModelContainer from "./general/ModelContainer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gradient-to-tl from-orange-100 to-red-200 overflow-y-auto">
      <Navbar />
      <div className="font-custom1 smooth-scroll container mx-auto px-4 md:px-16 min-h-screen overflow-y-hidden max-w-4xl">
        <ModelContainer />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
