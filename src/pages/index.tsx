import React from 'react';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta
        title="Murat Geri Dönüşüm"
        description="Milli Servette Geri Dönüşüm | Murat Geri Dönüşüm"
      />
      <Navbar />
      <main className="flex min-h-screen items-center justify-center">
        Hello world.
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
