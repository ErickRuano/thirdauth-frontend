import Head from 'next/head'
import {Logo}  from '../components/Logo'
import Link from 'next/link';
// import { useUser, UserButton } from '@clerk/nextjs';
import githubLogo from '../assets/githubLogo.svg'

const App = ({children, name, button, description}) => {
    // const { firstName } = useUser();

    return (
        <div className="h-screen overflow-hidden  prose lg:prose-base max-w-none bg-gray-900">
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
            <div className='overflow-auto h-full w-full mx-auto py-5' >
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
        </div>
      );
}
  
export default App;