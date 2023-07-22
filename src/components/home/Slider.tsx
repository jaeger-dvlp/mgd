import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { TFunction, useTranslation } from 'next-i18next';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import IngotIMG from '@/public/assets/img/ingot-ai-1.webp';

import 'swiper/css';

const Slides = [
  {
    id: 0,
    image: IngotIMG.src,
    component: ({ t }: { t: TFunction }) => (
      <section className="flex w-full  flex-col items-start justify-start gap-5">
        <p className="text-xl">{t('page-home.slider.slides.0.text-0')}</p>
        <p className="text-4xl font-bold">
          {t('page-home.slider.slides.0.text-1')}
        </p>
        <p className="text-2xl">{t('page-home.slider.slides.0.text-2')}</p>
      </section>
    ),
  },
  {
    id: 1,
    image: IngotIMG.src,
    component: ({ t }: { t: TFunction }) => (
      <section className="flex w-full  flex-col items-start justify-start gap-5">
        <p>{t('page-home.slider.slides.1.text-0')}</p>
      </section>
    ),
  },
  {
    id: 2,
    image: IngotIMG.src,
    component: ({ t }: { t: TFunction }) => (
      <section className="flex w-full  flex-col items-start justify-start gap-5">
        <p>{t('page-home.slider.slides.2.text-0')}</p>
      </section>
    ),
  },
  {
    id: 3,
    image: IngotIMG.src,
    component: ({ t }: { t: TFunction }) => (
      <section className="flex w-full  flex-col items-start justify-start gap-5">
        <p>{t('page-home.slider.slides.3.text-0')}</p>
      </section>
    ),
  },
  {
    id: 4,
    image: IngotIMG.src,
    component: ({ t }: { t: TFunction }) => (
      <section className="flex w-full  flex-col items-start justify-start gap-5">
        <p>{t('page-home.slider.slides.4.text-0')}</p>
      </section>
    ),
  },
];

function Slider() {
  const { t } = useTranslation();
  return (
    <section className="relative grid h-fit w-full grid-cols-1 bg-black text-white lg:min-h-[600px]">
      <button type="button" className="home-slider-button-prev">
        <BsChevronLeft />
      </button>
      <button type="button" className="home-slider-button-next">
        <BsChevronRight />
      </button>
      <Swiper
        loop
        speed={1500}
        centeredSlides
        slidesPerView={1}
        spaceBetween={0}
        updateOnWindowResize
        autoplay={{
          delay: 3550,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.home-slider-button-next',
          prevEl: '.home-slider-button-prev',
        }}
        className="h-full w-full"
      >
        {Slides.map((slide) => {
          const SlideComponent = slide.component;
          return (
            <SwiperSlide
              key={`h-slide${slide.id}`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${slide.image})`,
              }}
              className="flex h-full w-full flex-wrap items-center justify-center"
            >
              <div className="flex h-full w-full items-center justify-center bg-black/70 p-5">
                <div className="slide-text-anim flex h-full w-full max-w-theme flex-wrap items-center justify-start p-5 ">
                  <div className="max-w-3xl">
                    <SlideComponent t={t} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Slider;
