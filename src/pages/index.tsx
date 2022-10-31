/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CHANGE THIS</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      <div className="h-[100vh] bg-gradient-to-br from-green-300/50 to-sky-800/50 flex items-center justify-center">
        <div className="bg-white p-md flex justify-center flex-col w-11/12 rounded-lg shadow-2xl">
          <h1 className="bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800 text-transparent font-bold text-center">
            Im your new Tailwind Project!
          </h1>
          <p className="text-[#504e63] text-center">
            Delete this and make something great!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
