import type { AppProps } from 'next/app';
import { MainLayout } from '@/layouts/MainLayout';
import '@/styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
