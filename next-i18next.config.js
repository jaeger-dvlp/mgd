/** @type {import('next-i18next').UserConfig} */

const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['tr', 'en'],
    localePath: path.resolve('./public/assets/locales'),
    fallbackLng: 'en',
  },
};
