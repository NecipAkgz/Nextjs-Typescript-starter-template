/* eslint-disable react/jsx-props-no-spreading */

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      openGraph={{
        type: "Yblşalsk",
        locale: 'tr-TR',
        url: 'www.google.com',
        site_name: 'Çiftlik_Gang',
      }}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
