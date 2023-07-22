import React from 'react';

import IngotIMG from '@/public/assets/img/ingot-ai-1.webp';
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

type Props = {
  paths: {
    name: string;
    path: string;
  }[];
};

function BreadCrumbs({ paths }: Props) {
  const { t } = useTranslation();

  const getPathName = (name: string) => {
    if (name.includes('.')) {
      return t(name);
    }

    return name;
  };

  return (
    <section
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${IngotIMG.src})`,
      }}
      className="m-0 grid h-fit min-h-[200px] w-full grid-cols-1 place-content-stretch place-items-stretch p-0"
    >
      <section className="grid min-h-full w-full grid-cols-1 place-content-center place-items-center bg-black/75">
        <section className="flex w-full max-w-theme flex-col items-start justify-center gap-5 px-5 py-10">
          <p className="breadcrumb text-2xl font-bold text-white">
            {getPathName(paths[paths.length - 1].name)}
          </p>
          <section className="flex w-full flex-wrap items-center justify-start gap-2">
            {paths.map((path, index) => (
              <section
                style={{
                  animationDelay: `${index === 0 ? 0.4 : index * 0.6}s`,
                }}
                className="breadcrumb flex w-fit items-center justify-start gap-2"
                key={path.path}
              >
                <Link
                  className="text-sm font-medium text-white hover:underline"
                  href={path.path}
                >
                  {getPathName(path.name)}
                </Link>
                {index !== paths.length - 1 && (
                  <BsChevronRight className="h-3 w-3 text-white" />
                )}
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

export default BreadCrumbs;
