import React from 'react';
import { useTranslation } from 'next-i18next';

import ProductIMG1 from '@/public/assets/img/product-1.webp';
import ProductIMG2 from '@/public/assets/img/product-2.webp';
import Link from 'next/link';

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
    image: ProductIMG2.src,
    name: 'page-home.products.elements.1.name',
    description: 'page-home.products.elements.1.description',
    url: '/our-products/aluminum-scrap-purchase',
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
      <ul className="flex w-full max-w-theme flex-col items-center justify-start gap-16 p-5 py-16 lg:gap-32 lg:py-32">
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
    </section>
  );
}

export default Products;
