import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Slider from '@/components/home/Slider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Products from '@/components/home/Products';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('page-home.meta.title')}
        description={t('page-home.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-wrap items-start justify-center font-theme">
        <Slider />
        <Products />
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
