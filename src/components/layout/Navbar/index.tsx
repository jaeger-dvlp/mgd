/* eslint-disable no-nested-ternary */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import ContactBar from '@/components/layout/Navbar/ContactBar';

import {
  NavbarLink,
  NavbarClass,
  MobileMenuProps,
} from '@/types/boilerplate.types';

import LogoBlack from '@/public/assets/img/logo-black.png';

const ClassNames: NavbarClass = {
  desktop:
    'text-black py-2 px-4 relative group hover:bg-black bg-white hover:text-white transition-all duration-200 uppercase',
  mobile: 'text-white',
};

const SubClassNames = {
  desktop:
    'text-black bg-white w-full text-left px-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-200 uppercase',
  mobile: 'text-white',
};

function MobileMenu({ isActive, children }: MobileMenuProps): JSX.Element {
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'}
        fixed left-0 top-0 z-[49] flex h-full min-h-screen w-full flex-col items-center justify-start bg-black px-5 transition-all duration-500 lg:hidden`}
    >
      <ul className="mt-[125px] flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto pb-[100px]">
        {children}
      </ul>
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const Router = useRouter();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  const NavbarLinks: NavbarLink[] = [
    {
      id: 0,
      name: 'navbar.home',
      url: '/',
      classNames: ClassNames,
    },
    {
      id: 1,
      name: 'navbar.our-products.title',
      url: '/#our-products',
      subLinks: [
        {
          id: 0,
          name: 'navbar.our-products.sub.alloy-aluminum-innots',
          url: '/our-products/alloy-aluminum-innots',
          classNames: SubClassNames,
        },
        {
          id: 1,
          name: 'navbar.our-products.sub.pure-aluminum-innots',
          url: '/our-products/pure-aluminum-innots',
          classNames: SubClassNames,
        },
        {
          id: 2,
          name: 'navbar.our-products.sub.aluminum-scrap-purchase',
          url: '/our-products/aluminum-scrap-purchase',
          classNames: SubClassNames,
        },
        {
          id: 3,
          name: 'navbar.our-products.sub.raw-materials',
          url: '/our-products/raw-materials',
          classNames: SubClassNames,
        },
        {
          id: 4,
          name: 'navbar.our-products.sub.catalog',
          url: '/assets/pdf/katalog.pdf',
          classNames: SubClassNames,
          external: true,
        },
      ],
      classNames: ClassNames,
    },
    {
      id: 2,
      name: 'navbar.catalog',
      url: '/assets/pdf/katalog.pdf',
      classNames: ClassNames,
      external: true,
    },
    {
      id: 3,
      name: 'navbar.mcook',
      url: '/mcook',
      classNames: ClassNames,
    },
    {
      id: 4,
      name: 'navbar.our-documents',
      url: '/our-documents',
      classNames: ClassNames,
    },
    {
      id: 5,
      name: 'navbar.about-us',
      url: '/about-us',
      classNames: ClassNames,
    },
    {
      id: 6,
      name: 'navbar.contact-us',
      url: '/contact-us',
      classNames: ClassNames,
    },
    {
      id: 7,
      name: language === 'en' ? '🇹🇷 TR' : '🇺🇸 EN',
      url: Router.asPath,
      classNames: ClassNames,
    },
  ];

  const getDesktopElements = (): JSX.Element[] => {
    const elements = NavbarLinks.map(
      ({
        url,
        name,
        id,
        subLinks,
        classNames: { desktop: className },
        external,
      }) => (
        <li
          className="relative flex h-fit w-fit items-center justify-center"
          key={`d-elm-${id}`}
        >
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {name.includes('.') ? t(name) : name}
            </a>
          ) : !subLinks ? (
            <Link
              {...(id === 7
                ? {
                    locale: language === 'en' ? 'tr' : 'en',
                  }
                : {
                    locale: language,
                  })}
              className={className}
              href={url}
            >
              {name.includes('.') ? t(name) : name}
            </Link>
          ) : (
            <span
              className={`${className} flex flex-wrap items-center justify-center !p-0`}
            >
              <Link
                {...(id === 7
                  ? {
                      locale: language === 'en' ? 'tr' : 'en',
                    }
                  : {
                      locale: language,
                    })}
                className="px-4 !py-2"
                href={url}
              >
                {name.includes('.') ? t(name) : name}
              </Link>
              {subLinks && (
                <ul className="invisible absolute top-full left-[-1px] z-[50] flex min-w-[300px] translate-y-[-10%] translate-x-[-10%] scale-75 flex-col items-start justify-center gap-0 border border-t-0 border-black/30 bg-white p-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                  {subLinks.map(
                    ({
                      url: subUrl,
                      name: subName,
                      id: subId,
                      classNames: { desktop: subClassName },
                      external: subExternal,
                    }) => (
                      <li
                        key={`d-elm-sub-${id}-${subId}`}
                        className="flex w-full items-start justify-start"
                      >
                        {subExternal ? (
                          <a
                            className={subClassName}
                            href={subUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {subName.includes('.') ? t(subName) : subName}
                          </a>
                        ) : (
                          <Link className={subClassName} href={subUrl}>
                            {subName.includes('.') ? t(subName) : subName}
                          </Link>
                        )}
                      </li>
                    )
                  )}
                </ul>
              )}
            </span>
          )}
        </li>
      )
    );

    return elements;
  };

  const getMobileElements = (): JSX.Element[] => {
    const elements = NavbarLinks.map(
      ({ url, name, id, classNames: { mobile: className }, external }) => (
        <li key={`m-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {name.includes('.') ? t(name) : name}
            </a>
          ) : (
            <Link
              {...(id === 7 && {
                locale: language === 'en' ? 'tr' : 'en',
              })}
              className={className}
              href={url}
            >
              {name.includes('.') ? t(name) : name}
            </Link>
          )}
        </li>
      )
    );

    return elements;
  };

  React.useEffect(() => {
    if (mobileMenu) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [Router]);

  return (
    <header className="relative left-0 top-0 z-[10] flex w-full flex-col items-center justify-center border-b border-b-black/30 bg-white font-theme shadow-xl shadow-zinc-700/10 lg:sticky">
      <ContactBar />
      <section className="flex w-full max-w-theme flex-row flex-wrap items-center justify-between gap-5 p-5 lg:flex-col lg:justify-center lg:pb-0">
        <Link href="/" className="relative z-[50]">
          <img
            alt="Logo"
            src={LogoBlack.src}
            className={`${mobileMenu ? 'invert' : 'invert-0'}
            relative z-[21] w-full max-w-[65vw] object-contain p-1 transition-all duration-500 md:max-w-[350px] lg:max-w-[350px]`}
          />
        </Link>
        <nav className="hidden w-full items-center justify-center gap-5 lg:flex">
          <ul className="flex w-fit items-end justify-center gap-0">
            {getDesktopElements()}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="z-[100] flex max-w-fit items-center justify-center lg:hidden"
        >
          <HiOutlineMenuAlt3
            className={`${
              mobileMenu ? ' rotate-180 text-white' : 'rotate-0 text-black'
            } h-8 w-8 text-center transition-all duration-500`}
          />
        </button>
      </section>
      <MobileMenu isActive={mobileMenu}>{getMobileElements()}</MobileMenu>
    </header>
  );
}
