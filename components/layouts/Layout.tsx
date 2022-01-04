import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
