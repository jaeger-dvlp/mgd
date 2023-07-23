import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { usePopup } from '@/contexts/Popup.context';
import BreadCrumbs from '@/components/misc/BreadCrumbs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// doc images = 11
import Doc1 from '@/public/assets/img/doc-img/belge-1.webp';
import Doc2 from '@/public/assets/img/doc-img/belge-2.webp';
import Doc3 from '@/public/assets/img/doc-img/belge-3.webp';
import Doc4 from '@/public/assets/img/doc-img/belge-4.webp';
import Doc5 from '@/public/assets/img/doc-img/belge-5.webp';
import Doc6 from '@/public/assets/img/doc-img/belge-6.webp';
import Doc7 from '@/public/assets/img/doc-img/belge-7.webp';
import Doc8 from '@/public/assets/img/doc-img/belge-8.webp';
import Doc9 from '@/public/assets/img/doc-img/belge-9.webp';
import Doc10 from '@/public/assets/img/doc-img/belge-10.webp';
import Doc11 from '@/public/assets/img/doc-img/belge-11.webp';

const DocImages: {
  id: number;
  src: string;
  alt: string;
}[] = [
  {
    id: 0,
    src: Doc1.src,
    alt: 'Document',
  },
  {
    id: 1,
    src: Doc2.src,
    alt: 'Document',
  },
  {
    id: 2,
    src: Doc3.src,
    alt: 'Document',
  },
  {
    id: 3,
    src: Doc4.src,
    alt: 'Document',
  },
  {
    id: 4,
    src: Doc5.src,
    alt: 'Document',
  },
  {
    id: 5,
    src: Doc6.src,
    alt: 'Document',
  },
  {
    id: 6,
    src: Doc7.src,
    alt: 'Document',
  },
  {
    id: 7,
    src: Doc8.src,
    alt: 'Document',
  },
  {
    id: 8,
    src: Doc9.src,
    alt: 'Document',
  },
  {
    id: 9,
    src: Doc10.src,
    alt: 'Document',
  },
  {
    id: 10,
    src: Doc11.src,
    alt: 'Document',
  },
];

function OurDocuments() {
  const { t } = useTranslation();
  const { activateImageViewer } = usePopup();

  return (
    <>
      <Meta
        title={t('page-aluminum-scrap-purchase.meta.title')}
        description={t('page-aluminum-scrap-purchase.meta.description')}
      />
      <Navbar />
      <main className="flex w-full flex-wrap items-start justify-center font-theme">
        <BreadCrumbs
          paths={[
            {
              name: 'page-home.meta.title',
              path: '/',
            },
            {
              name: 'page-our-documents.meta.title',
              path: '/our-documents',
            },
          ]}
        />
        <section className="flex w-full flex-wrap items-center justify-center">
          <section className="m-0 flex w-full max-w-theme flex-col gap-0 px-5 py-20">
            <section className="flex w-full flex-wrap items-center justify-center gap-10">
              {DocImages.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    activateImageViewer({
                      image: item.src,
                      maxWidth: '100%',
                      maxHeight: '100%',
                    })
                  }
                  className="flex h-fit w-full max-w-[250px] items-center justify-center self-center shadow-lg shadow-black/30 transition-all duration-200 hover:scale-110 hover:shadow-black/50"
                >
                  <img
                    className="h-full w-full border object-contain object-center"
                    src={item.src}
                    alt={item.alt}
                  />
                </button>
              ))}
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default OurDocuments;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
