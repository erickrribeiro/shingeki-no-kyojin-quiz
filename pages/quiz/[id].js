import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function dynamicPage({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <Head>
        <title>{externalDb.title}</title>
      </Head>
      <QuizScreen db={externalDb} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  console.log('Infos do Next', context.query);

  const externalDb = await fetch(
    // `https://${projectName}.${githubUser}.vercel.app/api/db`,
    `https://${projectName}.${githubUser}.vercel.app/api/db`,
  ).then((res) => res.json());

  return {
    props: { externalDb },
  };
}
