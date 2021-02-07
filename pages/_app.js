import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

`;

const { theme } = db;

// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Shingeki no Kyojin | Quiz</title>
        <meta
          name="description"
          content="O melhor quiz em português sobre atack ao titã."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Shingeki no Kyojin | Quiz."
          key="ogtitle"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="Teste os seus conhecimentos sobre Shingeki no Kyojin e vamos ver quantos pontos você fazer."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://images8.alphacoders.com/108/1081458.jpg"
          key="ogimage"
        />
        <meta
          property="og:url"
          content="https://shingeki-no-kyojin-quiz.vercel.app"
          key="ogurl"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="Teste os seus conhecimentos sobre Shingeki no Kyojin e vamos ver quantos pontos você fazer."
          key="twcard"
        />
        <meta name="twitter:creator" content="@erickribeiro" key="twhandle" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          data-ad-client="ca-pub-9240799799016979"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
