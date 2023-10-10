import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@/store';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Новости</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}
