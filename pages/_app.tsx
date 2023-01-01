import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../css/global.css';

interface MyAppInterface {
  Component: React.ComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppInterface) {
  return (
    <>
      <Head>
        <title>Book Worms App</title>
      </Head>
      <div className="grid wrapper">
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </div>
    </>
  );
}

export default MyApp;
