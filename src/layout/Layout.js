import React from 'react';
import Nav from '../components/Nav/Nav.tsx';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const Layout = ({ metaDescription, metaTitle, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Matthew Martin | Personal Portfolio" />
        <meta property="og:url" content={`https://matthewmartin.io${router.asPath}`} />
        <meta property="og:locale" content="en-GB" />
        <link rel="canonical" href={`https://matthewmartin.io${router.asPath}`} />
        {/* <meta property="og:image" content={metaImage} />
        <meta property="og:image:type" content="image/jpeg" /> */}
        {/* <link rel="icon" href={config.favicon} type="image/ico" /> */}
      </Head>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
