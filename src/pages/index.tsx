import type { NextPage } from 'next';
import Head from 'next/head';

function Home(): NextPage {
  return (
    <div>
      <Head>
        <title>OTT Testing</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      <div className="flex-col min-h-[100vh] bg-gradient-to-br from-green-300/10 to-sky-800/10 flex items-center">
        <div className="w-11/12 mt-10 bg-white rounded-lg shadow-xl h-max p-md">
          <h1 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800">
            OTT Testing
          </h1>
        </div>
        <div className="px-4 mt-10 space-y-4">
          <p className="text-[#524e70] tracking-wide text-lg">
            A site that will systematically work through every single way of
            testing a React that I can find.
          </p>
          <p className="text-[#524e70] tracking-wide text-lg">
            Select various testing methodoligies from the column on the right.
            React Testing Library, Jest, Cypress and Playwright will be the main
            libraries used.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
