import { useState } from 'react';
import Head from 'next/head'
import {Logo}  from '../components/Logo'
import ProgressBar from  '../components/ProgressBar'
import Link from 'next/link';
// import { useUser, UserButton } from '@clerk/nextjs';
import githubLogo from '../assets/githubLogo.svg'

const Layout = ({children, name, button, description, loading = false}) => {
    return (
        <div className="h-screen overflow-hidden flex flex-col prose lg:prose-base max-w-none bg-gray-900">
            <Head>
                <title>{name} - thirAuth, Web3 authentication</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='px-10 w-full mx-auto'>
                <nav className="w-full py-5 flex justify-between items-center">
                    <Logo />
                    <div className="flex gap-5 items-center">
                        <Link href="https://github.com/ErickRuano/thirdauth-frontend">
                            <a className='text-white text-base cursor-pointer hover:text-primary-600 font-bold'>
                                <img src={githubLogo.src} alt="" className='noMargin h-8'/>
                            </a>
                        </Link>
                        {/* <UserButton /> */}
                    </div>
                </nav>
            </div>
            {
                loading && <div className="h-1 w-full relative">
                    <ProgressBar />
                </div>
            }
            {
                !loading && <div className='overflow-y-scroll w-full mx-auto py-10 px-10 2xl:px-0' >
                <div className="px-10 lg:px-0 max-w-screen-2xl m-auto">
                    <div className="flex justify-between items-center">
                        <div className='flex flex-col items-start'>
                            <h1 className='noMargin'>{name}</h1>
                            <span className='text-gray-600'>{description}</span>
                        </div>
                        {button}
                    </div>
                    <div className="mb-10"></div>
                    {children}
                </div>
            </div>
            }
        </div>
      );
}
  
export default Layout;