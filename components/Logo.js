import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
        <a className='text-white text-base cursor-pointer hover:text-primary-600 font-bold no-underline'>
            <span className={`inline-flex items-center`}>
              {/* <img src={LogoImage.src} alt="" /> */}
              {/* <span className='text-5xl text-white'>3</span> */}
              {/* {AppConfig.site_name} */}
              <span className='text-4xl text-white'>third</span>
              <span className='text-4xl font-bold text-primary-500'>Auth</span>
            </span>
        </a>
    </Link>
  );
};

export { Logo };
