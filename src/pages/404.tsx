import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export default function NotFound(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title="Murat Geri Dönüşüm"
        description="Milli Servette Geri Dönüşüm | Murat Geri Dönüşüm"
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 font-theme">
        <h1 className="whitespace-pre-wrap text-center text-4xl font-medium text-zinc-600">
          {t('page-404.text-0')}
        </h1>
        <p className="whitespace-pre-wrap text-center text-2xl font-medium text-black">
          {t('page-404.text-1')}
        </p>
        <Link
          href="/"
          className="whitespace-pre-wrap border border-black bg-black px-5 py-2 text-center text-lg font-medium text-white shadow-lg shadow-black/30 transition-all duration-150 hover:bg-white hover:text-black"
        >
          {t('page-404.text-2')}
        </Link>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
