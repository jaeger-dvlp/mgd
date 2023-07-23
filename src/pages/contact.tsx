import React from 'react';
import { useForm } from 'react-hook-form';
import Meta from '@/components/layout/Meta';
import Wait from '@/common/utils/Wait.util';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { usePopup } from '@/contexts/Popup.context';
import BreadCrumbs from '@/components/misc/BreadCrumbs';
import { BsCursorFill, BsFillTelephoneFill } from 'react-icons/bs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ContactDetailsTR(): JSX.Element {
  return (
    <>
      <h2 className="text-left text-xl font-semibold text-black">
        İletişim Bilgileri
      </h2>
      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        Geri Dönüşüm Merkezi
      </h3>
      <p className="text-left text-sm text-zinc-700">
        İsdök Sanayi Sitesi / 9.Blok / No: 10 <br />
        Başakşehir / İstanbul
      </p>
      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        Hurda İşleme Merkezi
      </h3>
      <p className="text-left text-sm text-zinc-700">
        İ.O.S.B. Pik Dökümcüler Sanayi Sitesi B4 / Blok 15 <br />
        Başakşehir / İstanbul
      </p>
      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        Merkez Telefon
      </h3>
      <a
        href="tel:+90 212 486 37 73"
        className="text-left text-sm text-zinc-700 hover:underline"
      >
        Tel : +90 212 486 37 73
      </a>

      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        E-Posta Adresi
      </h3>
      <a
        href="mailto:info@muratgeridonusum.com"
        className="text-left text-sm text-zinc-700 hover:underline"
      >
        info@muratgeridonusum.com
      </a>
    </>
  );
}

function ContactDetailsEN(): JSX.Element {
  return (
    <>
      <h2 className="text-left text-xl font-semibold text-black">
        Contact Details
      </h2>
      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        Recycling Center
      </h3>
      <p className="text-left text-sm text-zinc-700">
        İsdök Sanayi Sitesi / 9.Block / No: 10 <br />
        Başakşehir / İstanbul
      </p>
      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        Scrap Processing Center
      </h3>
      <p className="text-left text-sm text-zinc-700">
        İ.O.S.B. Pik Dökümcüler Sanayi Sitesi B4 / Block 15 <br />
        Başakşehir / İstanbul
      </p>
      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        Center Phone
      </h3>
      <a
        href="tel:+90 212 486 37 73"
        className="text-left text-sm text-zinc-700 hover:underline"
      >
        Tel : +90 212 486 37 73
      </a>

      <h3 className="mt-5 text-left text-lg font-semibold text-black">
        E-Mail Address
      </h3>
      <a
        className="text-left text-sm text-zinc-700 hover:underline"
        href="mailto:info@muratgeridonusum.com"
      >
        info@muratgeridonusum.com
      </a>
    </>
  );
}

function FormError({
  message,
}: {
  message: string | undefined;
}): JSX.Element | null {
  if (!message) return null;

  return <span className="text-left text-sm text-red-400">{message}</span>;
}

export default function Contact(): JSX.Element {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { activateAlertPopup } = usePopup();

  const formSubmit = async (data) => {
    console.log(data);
    activateAlertPopup('Gönderiliyor..', 'loading');
    await Wait(1000);
    activateAlertPopup('ToDo : Mesajınız Gönderildi', 'success');
  };

  return (
    <>
      <Meta
        title="Murat Geri Dönüşüm"
        description="Milli Servette Geri Dönüşüm | Murat Geri Dönüşüm"
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <BreadCrumbs
          paths={[
            {
              name: 'page-home.meta.title',
              path: '/',
            },
            {
              name: 'page-contact.meta.title',
              path: '/contact',
            },
          ]}
        />
        <section className="m-0 flex w-full max-w-theme flex-col items-center justify-center py-10 px-5">
          <section className="flex w-full max-w-xl flex-col items-center justify-center gap-3">
            <p className="text-sm text-zinc-700">{t('page-contact.text-0')}</p>
            <a
              href="tel:+90 212 486 37 73"
              className="flex items-center justify-center gap-2 border border-black/30 bg-white px-3 py-1 text-sm text-zinc-800 transition-all duration-150 hover:bg-black hover:text-white"
            >
              <BsFillTelephoneFill className="h-4 w-4" />
              <span>+90 212 486 37 73</span>
            </a>
            <p className="mt-10 whitespace-pre-wrap text-center text-sm">
              {t('page-contact.text-1')}
            </p>
          </section>
          <section className="m-0 mt-10 flex w-full flex-wrap gap-10 p-0 lg:gap-0">
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="grid w-full grid-cols-1 place-content-start place-items-center gap-5 lg:w-1/2 lg:pr-5"
            >
              <section className="flex w-full flex-col items-start justify-start gap-2">
                <input
                  type="text"
                  className=" min-h-[50px] w-full border border-zinc-700 px-3 py-1 placeholder:text-zinc-700"
                  {...register('fullName', {
                    required: {
                      value: true,
                      message: t('page-contact.form.errors.required'),
                    },
                  })}
                  placeholder={t('page-contact.form.full-name')}
                />
                <FormError
                  message={errors.fullName?.message as string | undefined}
                />
              </section>
              <section className="flex w-full flex-col items-start justify-start gap-2">
                <input
                  type="email"
                  className=" min-h-[50px] w-full border border-zinc-700 px-3 py-1 placeholder:text-zinc-700"
                  {...register('email', {
                    required: {
                      value: true,
                      message: t('page-contact.form.errors.required'),
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: t('page-contact.form.errors.email-invalid'),
                    },
                  })}
                  placeholder={t('page-contact.form.email')}
                />
                <FormError
                  message={errors.email?.message as string | undefined}
                />
              </section>
              <section className="flex w-full flex-col items-start justify-start gap-2">
                <input
                  type="text"
                  className=" min-h-[50px] w-full border border-zinc-700 px-3 py-1 placeholder:text-zinc-700"
                  {...register('subject', {
                    required: {
                      value: true,
                      message: t('page-contact.form.errors.required'),
                    },
                  })}
                  placeholder={t('page-contact.form.subject')}
                />
                <FormError
                  message={errors.subject?.message as string | undefined}
                />
              </section>
              <section className="flex w-full flex-col items-start justify-start gap-2">
                <textarea
                  className="min-h-[150px] w-full border border-zinc-700 px-3 py-1 placeholder:text-zinc-700"
                  {...register('message', {
                    required: {
                      value: true,
                      message: t('page-contact.form.errors.required'),
                    },
                  })}
                  placeholder={t('page-contact.form.message')}
                />
                <FormError
                  message={errors.message?.message as string | undefined}
                />
              </section>
              <section className="flex w-full items-start justify-start">
                <button
                  type="submit"
                  className="flex w-fit items-center justify-center gap-2 border border-black bg-black px-5 py-2 text-white transition-all duration-150 hover:bg-white hover:text-black"
                >
                  <BsCursorFill className="h-4 w-4" />
                  <span>{t('page-contact.form.submit')}</span>
                </button>
              </section>
            </form>
            <section className="flex w-full flex-col items-start justify-start lg:w-1/2 lg:pl-5">
              {language === 'tr' ? <ContactDetailsTR /> : <ContactDetailsEN />}
            </section>
          </section>
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
