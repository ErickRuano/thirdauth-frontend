import '../styles/globals.css'
import Head from 'next/head'

// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { useRouter } from 'next/router';
import Session from './_session';

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication. Use this naming strategy:
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js

const publicPages = ['/'];

// Put the ethereum chain ids of the chains you want to support
const supportedChainIds = [1, 4, 137];

/**
 * Include the connectors you want to support
 * injected - MetaMask
 * magic - Magic Link
 * walletconnect - Wallet Connect
 * walletlink - Coinbase Wallet
 */
const connectors = {
  injected: {},
  magic: {
    apiKey: "pk_...", // Your magic api key
    chainId: 1, // The chain ID you want to allow on magic
  },
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

function MyApp({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();
  // console.log(pathname);
  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  // If the current route is listed as public, render it directly
  // Otherwise, use Clerk to require authentication
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      {/* <ClerkProvider> */}
      <ThirdwebWeb3Provider connectors={connectors} supportedChainIds={supportedChainIds} >
        {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
              <Session>
                  <Component {...pageProps} />
              </Session>
          </>
        )}
      </ThirdwebWeb3Provider>
      {/* </ClerkProvider> */}
    </>
  );
}

export default MyApp;
