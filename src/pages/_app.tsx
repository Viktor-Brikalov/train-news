import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Head from 'next/head';
import StoreProvider from '@/providers/StoreProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Новости</title>
    </Head>
    <StoreProvider initialState={pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
    </>
  )
}
