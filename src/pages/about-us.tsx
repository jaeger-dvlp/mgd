import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadCrumbs from '@/components/misc/BreadCrumbs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function TR() {
  return (
    <>
      <h2>MURAT METAL HAKKIMIZDA</h2>
      <p>
        Murat Metal olarak alaşımlı ve saf alüminyum külçe üretim ve satışını
        yapan firmamız 30 senedir bu sektörde hizmet vermektedir.
      </p>
      <p>
        Kurumsallaşmasını tamamlamış olan firmamız yüksek kalite ve müşteri
        memnuniyetini en üst düzeyde tutarak müşterisine en iyi ürünü
        sunmaktadır. Yıllık 6000 ton kapasitesi olan firmamız ürünlerini genel
        piyasa fiyat koşulları içerisinde sunarken kalitesinden de ödün
        vermemektedir.
      </p>
      <p>
        Ürün kalitesini en üst düzeyde tutan firmamız çalışmakta olduğu
        firmalardan bu konuda takdir toplamış olmakla birlikte sektör içerisinde
        saygın bir konuma sahip olmuştur.
      </p>
      <p>
        Firmamız; beyaz eşya, otomotiv, mobilya aksesuarları ve yapı sektörüne
        hizmet veren metal enjeksiyon ve kum döküm firmalarına malzeme tedariki
        yapmaktadır. Bu hizmet süreci içerisinde müşteri firmanın tüm üretim
        aşamalarında yanında olan firmamız müşterisine her konuda destek
        verirken adeta müşterisinin alt firması gibi çalışarak müşteri
        memnuniyetini en üst düzeyde tutmaktadır.
      </p>
      <p> Farkımız; yüksek kalite bilinci ve şeffaf fiyat anlayışıdır.</p>
      <h2>VİZYONUMUZ</h2>
      <p>
        Sektörün bugününü iyi analiz eden, yarınını da bugünden planlayabilen,
        fark yaratmaya ve değer katmaya inanan, gerçekçi, yapılabilir,
        ölçülebilir hedeflerin takipçisi olan kurumsallık ve profesyonellik
        anlayışını sürdürmektir.
      </p>
      <h2>MİSYONUMUZ</h2>
      <p>
        Hedeflerimize ulaşma yolunda, çağdaş bilgi ve teknolojileri kullanarak,
        kuruluşumuzda kalite anlayışını, şeffaflığı, katılımcı yaklaşımı ilke
        edinmek ve tüm iş ortaklarımıza değer katacak şekilde bir yönetim şekli
        sunmak.
      </p>
    </>
  );
}

function EN() {
  return (
    <>
      <h2>ABOUT US</h2>
      <p>
        As Murat Metal, our company, which produces and sells alloy and pure
        aluminum ingots, has been serving in this sector for 30 years.
      </p>
      <p>
        Our company, which has completed its institutionalization, offers the
        best product to its customers by keeping high quality and customer
        satisfaction at the highest level. Our company, which has an annual
        capacity of 6000 tons, does not compromise its quality while offering
        its products within the general market price conditions.
      </p>
      <p>
        Our company, which keeps the product quality at the highest level, has
        gained appreciation from the companies it works with in this regard and
        has gained a respectable position in the sector.
      </p>
      <p>
        Our company supplies materials to metal injection and sand casting
        companies serving the white goods, automotive, furniture accessories and
        construction sectors. Our company, which is with the customer company at
        every stage of its production process, works as if it is the
        customer&apos;s sub-company and keeps customer satisfaction at the
        highest level by supporting its customer in every respect.
      </p>
      <p>
        Our difference is; It is the high quality awareness and transparent
        price understanding.
      </p>
      <h2>VISION</h2>
      <p>
        It is to continue the understanding of corporate and professionalism
        that believes in analyzing the present of the sector well, planning its
        future from today, believing in making a difference and adding value,
        and following realistic, feasible, measurable goals.
      </p>
      <h2>MISSION</h2>
      <p>
        In order to reach our goals, to use contemporary knowledge and
        technologies, to adopt the understanding of quality, transparency and
        participatory approach in our organization, and to offer a management
        style that will add value to all our business partners.
      </p>
    </>
  );
}

function AboutUs() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <>
      <Meta
        title={t('page-about-us.meta.title')}
        description={t('page-about-us.meta.description')}
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
              name: 'page-about-us.meta.title',
              path: '/about-us',
            },
          ]}
        />
        <section className="m-0 flex max-h-fit w-full flex-wrap items-center justify-center p-0">
          <section className="prose w-full max-w-theme p-5 py-10">
            {language === 'tr' ? <TR /> : <EN />}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
