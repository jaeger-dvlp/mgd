import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import ProductIMG1 from '@/public/assets/img/product-1.webp';
import ProductIMG2 from '@/public/assets/img/product-2.webp';
import { BsBook } from 'react-icons/bs';

const AllProducts = [
  {
    id: 0,
    image: ProductIMG1.src,
    name: 'page-home.products.elements.0.name',
    description: 'page-home.products.elements.0.description',
    url: '/our-products/pure-aluminum-innots',
  },
  {
    id: 1,
    image: ProductIMG1.src,
    name: 'page-home.products.elements.2.name',
    description: 'page-home.products.elements.2.description',
    url: '/our-products/alloy-aluminum-innots',
  },
  {
    id: 2,
    image: ProductIMG2.src,
    name: 'page-home.products.elements.1.name',
    description: 'page-home.products.elements.1.description',
    url: '/our-products/aluminum-scrap-purchase',
  },
  {
    id: 3,
    image: ProductIMG2.src,
    name: 'page-home.products.elements.3.name',
    description: 'page-home.products.elements.3.description',
    url: '/our-products/raw-materials',
  },
];

function Products() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <section
      id="our-products"
      className="flex w-full flex-wrap items-center justify-center"
    >
      <section className="m-0 flex w-full max-w-theme flex-col items-center justify-center gap-8 p-5 py-16 lg:gap-16 ">
        <h2 className="text-center text-2xl font-bold text-black lg:text-4xl">
          {t('page-home.products.title')}
        </h2>
        <ul className="flex w-full flex-col items-center justify-start gap-16 lg:gap-32">
          {AllProducts.map((product, i) => (
            <li
              key={`h-product-${product.id}`}
              className="relative m-0 flex w-full flex-col items-center  justify-center gap-0 bg-gradient-to-br from-gray-500 to-black p-0 text-white shadow-xl shadow-black/50 lg:flex-row"
            >
              <img
                src={product.image}
                alt={t(product.name)}
                style={{
                  order: i % 2 === 0 ? 1 : 2,
                }}
                className="h-[200px] w-full object-cover object-center lg:min-h-[350px] lg:max-w-[35%]"
              />
              <section
                style={{
                  order: i % 2 === 0 ? 2 : 1,
                }}
                className="flex !h-full min-h-full w-full flex-col items-start justify-center gap-5 p-5 lg:p-10"
              >
                <h2 className="text-xl font-semibold lg:text-2xl">
                  {t(product.name)}
                </h2>
                <p className="text-sm lg:text-base">{t(product.description)}</p>
                <Link
                  locale={language}
                  href={product.url}
                  className="-mx-4 px-4 py-2 text-sm font-semibold hover:underline lg:text-base"
                >
                  {t('buttons.see-more')}
                </Link>
              </section>
            </li>
          ))}
        </ul>
        <a
          target="_blank"
          href="/assets/pdf/katalog.pdf"
          className="flex w-fit items-center justify-center gap-2 border border-black bg-black px-5 py-2 text-lg font-medium text-white transition-all duration-150 hover:bg-white hover:text-black"
        >
          <BsBook className="h-5 w-5" />
          <span>{t('page-home.products.see-catalog')}</span>
        </a>
      </section>
    </section>
  );
}

export default Products;
