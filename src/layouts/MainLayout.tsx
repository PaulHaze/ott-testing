import { useState } from 'react';
import Head from 'next/head';
import { NavBar } from '@/components';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => setShowNav((prev) => !prev);
  return (
    <>
      <Head>
        <title>OTT Testing</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      <div className="flex flex-grow">
        <div
          className={`ease-in-out transition-all duration-500 ${
            showNav ? 'min-w-[190px] w-[150px]' : 'min-w-[40px] w-[40px]'
          }`}
        >
          <NavBar showNav={showNav} handleNavClick={handleNavClick} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
