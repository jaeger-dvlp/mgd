import React from 'react';
import { useRouter } from 'next/router';
import Wait from '@/common/utils/Wait.util';
import { AiOutlineLoading } from 'react-icons/ai';

import LogoBlack from '@/public/assets/img/logo-black.png';

function Loader(): JSX.Element | null {
  const Router = useRouter();
  const [loader, setLoader] = React.useState({
    inHTML: true,
    isActive: true,
  });

  const HideLoader = async () => {
    await Wait(500);
    setLoader({
      inHTML: true,
      isActive: false,
    });
    await Wait(500);
    setLoader({
      inHTML: false,
      isActive: false,
    });
  };

  const ShowLoader = async () => {
    setLoader({
      inHTML: true,
      isActive: true,
    });
  };

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => ShowLoader());
    Router.events.on('routeChangeComplete', () => HideLoader());
    Router.events.on('routeChangeError', () => HideLoader());

    return () => {
      Router.events.off('routeChangeStart', () => ShowLoader());
      Router.events.off('routeChangeComplete', () => HideLoader());
      Router.events.off('routeChangeError', () => HideLoader());
    };
  }, []);

  React.useEffect(() => {
    HideLoader();
  }, []);

  return (
    (loader.inHTML && (
      <div
        style={{
          transition: loader.isActive ? 'none' : 'all 0.5s',
        }}
        className={`
            ${loader.isActive ? 'visible opacity-100' : 'invisible opacity-0'}
            fixed left-0 top-0 !z-[999999] flex h-full w-full flex-col items-center justify-center gap-3 bg-white
            `}
      >
        <img
          src={LogoBlack.src}
          alt="Murat Geri Dönüşüm"
          className="w-full max-w-[250px]"
        />
        <AiOutlineLoading className="h-6 w-6 animate-spin rounded-full bg-black/20 p-1 text-black" />
      </div>
    )) ||
    null
  );
}

export default Loader;
