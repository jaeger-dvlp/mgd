import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import LogoBlack from '@/public/assets/img/logo-black.png';
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <section className="flex w-full flex-wrap items-center justify-center border-t border-t-black/30 bg-white font-theme">
        <section className="flex w-full max-w-2xl flex-col items-center justify-center p-5">
          <p className="text-center text-sm text-zinc-700">
            {t('footer.description')}
          </p>
          <section className="mt-5 flex w-full flex-wrap items-center justify-center gap-5">
            <Link
              href="/iletisim"
              className="flex items-center justify-center gap-2 border border-black/30 bg-white px-3 py-1 text-sm text-zinc-800 hover:bg-black hover:text-white"
            >
              <BsEnvelopeFill className="h-4 w-4" />
              <span>{t('footer.contact-button')}</span>
            </Link>
            <a
              href="tel:+90 212 486 37 73"
              className="flex items-center justify-center gap-2 border border-black/30 bg-white px-3 py-1 text-sm text-zinc-800 hover:bg-black hover:text-white"
            >
              <BsFillTelephoneFill className="h-4 w-4" />
              <span>+90 212 486 37 73</span>
            </a>
          </section>
        </section>
      </section>
      <footer className="m-0 flex min-h-[100px] w-full flex-wrap items-center justify-center bg-black p-0 font-theme">
        <section className="flex w-full max-w-theme flex-col items-center justify-center p-5">
          <Link href="/" className="relative">
            <img
              alt="Logo"
              src={LogoBlack.src}
              style={{
                filter: 'invert(1)',
              }}
              className="w-full max-w-[300px] object-contain p-1 opacity-80 transition-all duration-150"
            />
          </Link>
          <p className="mt-5 text-center text-xs text-zinc-400">
            {t('footer.all-rights-reserved')}
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
