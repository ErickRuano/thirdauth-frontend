import Head from 'next/head'
import {Logo}  from '../components/Logo'
import Link from 'next/link';
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { useState } from "react"

import metaLogo from '../assets/metaMaskLogo.svg'

export default function Home() {
  const { address, chainId, connectWallet, disconnectWallet, provider } = useWeb3();
  const { switchNetwork } = useSwitchNetwork();
  const [email, setEmail] = useState("");
  
  const [jwt, setJwt] = useState(null);
  const [username, setUsername] = useState(null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <Head>
        <title>thirdAuth, Web3 authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="max-w-screen-xl w-full py-5 flex justify-between items-center">
        <Logo />
        <Link href="https://github.com/ErickRuano/thirdauth-frontend">
          <a className='text-white text-base cursor-pointer hover:text-primary-600 font-bold'>GitHub</a>
        </Link>
      </nav>

      <main className="flex w-full max-w-screen-xl flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Web3{' '}
          <span className="text-6xl font-bold text-primary-500" >
             authentication
          </span>
        </h1>

        <p className="text-2xl">
          Powered by thirdweb and vercel
        </p>
        {
          address ? (
            <>
              Address: {address}
              <br />
              Chain ID: {chainId}
              <br />

              <button onClick={() => switchNetwork(1)}>
                Switch to Mainnet
              </button>

              <button onClick={() => switchNetwork(4)}>
                Switch to Rinkeby
              </button>

              <button onClick={disconnectWallet}>
                Disconnect
              </button>

              <span>
                {console.log(provider)}
              </span>
            </>
          ) : (
            <>

              <button onClick={() => connectWallet("injected")} className='btn bg-white px-4 py-3 text-gray-900 mt-10'>
                <img src={metaLogo.src} className='w-6 mr-3' alt="MetaMask Logo" />
                Connect MetaMask
              </button>
            </>
          )
        }
        {/* <button className="mt-5 px-4 py-3 font-semibold text-center text-white transition duration-200 ease-in-out bg-primary-500 rounded-md cursor-pointer hover:bg-primary-800">
          <Link href="/dashboard">
            <a>Get started</a>
          </Link>
        </button> */}

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/ErickRuano/thirdauth-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by UNKNOWN
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" /> */}
        </a>
      </footer>
    </div>
  )
}
