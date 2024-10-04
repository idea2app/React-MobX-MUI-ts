import { i18n } from './model/Translation';

const { t } = i18n;

export const mainNavLinks = () => [
  { href: '#/', title: t('home_page') },
  { href: '#/scroll-list', title: t('scroll_list') },
  { href: '#/chart', title: t('chart') },
  { href: '#/downloader', title: t('downloader') },
  {
    href: 'https://github.com/idea2app/React-MobX-MUI-ts',
    title: t('source_code')
  }
];
