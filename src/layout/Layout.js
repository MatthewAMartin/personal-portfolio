import React from 'react';
import Nav from '../components/Nav/Nav.tsx';
import Head from 'next/head';

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Head>
        <title>Matthew Martin | Personal Portfolio</title>
        <meta name="description" content="???" />
        {/* <link rel="icon" href="/images/rings.png" /> */}
      </Head>
      {/* <main>{children}</main>
      <Footer /> */}
    </>
  );
};
