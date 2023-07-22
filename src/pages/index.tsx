import React from 'react';
import Meta from '@/components/layout/Meta';
import Slider from '@/components/home/Slider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Products from '@/components/home/Products';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta
        title="Murat Geri Dönüşüm"
        description="Milli Servette Geri Dönüşüm | Murat Geri Dönüşüm"
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
