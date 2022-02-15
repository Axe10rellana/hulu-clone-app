//importaciones
import React from "react";

//comonentes de next
import Head from "next/head";

//componentes
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const Layout = ({ title, children, description }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1ee984" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
        <link rel="favicon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>{title}</title>
      </Head>
      <Header />
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
