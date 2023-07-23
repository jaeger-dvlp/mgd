import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadCrumbs from '@/components/misc/BreadCrumbs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import KK from '@/public/assets/img/mcook/kullanim-kilavuzu.webp';

import KKCover from '@/public/assets/img/mcook/kullanim-kilavuzu-kapak.webp';
import KK1 from '@/public/assets/img/mcook/kullanim-kilavuzu-1.webp';
import KK2 from '@/public/assets/img/mcook/kullanim-kilavuzu-2.webp';
import KK3 from '@/public/assets/img/mcook/kullanim-kilavuzu-3.webp';
import KK4 from '@/public/assets/img/mcook/kullanim-kilavuzu-4.webp';
import KK5 from '@/public/assets/img/mcook/kullanim-kilavuzu-5.webp';
import KK6 from '@/public/assets/img/mcook/kullanim-kilavuzu-6.webp';
import KK7 from '@/public/assets/img/mcook/kullanim-kilavuzu-7.webp';
import KK8 from '@/public/assets/img/mcook/afis.webp';

const KKImages: {
  id: number;
  src: string;
}[] = [
  {
    id: 0,
    src: KKCover.src,
  },
  {
    id: 1,
    src: KK1.src,
  },
  {
    id: 2,
    src: KK2.src,
  },
  {
    id: 3,
    src: KK3.src,
  },
  {
    id: 4,
    src: KK4.src,
  },
  {
    id: 5,
    src: KK5.src,
  },
  {
    id: 6,
    src: KK6.src,
  },
  {
    id: 7,
    src: KK7.src,
  },
  {
    id: 8,
    src: KK8.src,
  },
];

export default function Mcook(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title="Murat Geri Dönüşüm"
        description="Milli Servette Geri Dönüşüm | Murat Geri Dönüşüm"
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center font-theme">
        <BreadCrumbs
          paths={[
            {
              name: 'page-home.meta.title',
              path: '/',
            },
            {
              name: 'page-mcook.meta.title',
              path: '/mcook',
            },
          ]}
        />
        <section className="flex w-full max-w-theme flex-col items-start justify-center gap-10 p-5 py-20">
          <h2 className="text-center text-2xl font-bold text-black lg:text-4xl">
            MCOOK
          </h2>
          <img
            src={KK.src}
            alt="Mcook"
            className="w-full object-contain object-center"
          />
          <h2 className="mt-10 text-center text-2xl font-bold text-black lg:text-4xl">
            {t('page-mcook.text-0')}
          </h2>
          <ul className="flex w-full flex-col items-center justify-center gap-10">
            {KKImages.map((item) => (
              <li
                key={`h-mcook-${item.id}`}
                className="flex w-full items-center justify-center"
              >
                <img
                  src={item.src}
                  alt="Mcook"
                  className="w-full object-contain object-center"
                />
              </li>
            ))}
          </ul>
        </section>
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
