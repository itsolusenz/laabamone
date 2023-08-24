import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import ta from './navigation-i18n/ta';
import ta1 from './tamil/ta';
import authRoles from '../auth/authRoles';
i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
i18next.addResourceBundle('ta', 'navigation', ta);
i18next.addResourceBundle('ta', 'navigation', ta1);

const navigationConfig = [
  {
    id: 'Home',
    title: 'Home',
    translate: 'Home',
    type: 'item',
    icon: 'heroicons-outline:home',
    url: '/dashboard',
    size: '40',

  },

  {
    id: 'Calendar',
    title: 'Calendar',
    translate: 'Calendar',
    type: 'item',
    icon: 'heroicons-outline:calendar',
    url: 'calendar',
  },
  {
    id: 'Sales',
    title: 'Sales',
    translate: 'Sales',
    icon: 'heroicons-outline:tag',
    type: 'item',
    url: 'sales/new',

  },
  {
    id: 'Clients',
    title: 'Clients',
    translate: 'Clients',
    icon: 'heroicons-outline:emoji-happy',
    type: 'item',
    url: '/client',

  },
  {
    id: 'Clients',
    title: 'Clients',
    translate: 'Clients',
    icon: 'heroicons-outline:book-open',
    type: 'item',
    url: '/client',

  },
  {
    id: 'catelogue',
    title: 'Catelogue',
    translate: 'Catelogue',
    icon: 'heroicons-outline:book-open',
    type: 'item',
    url: '/apps/package',

  },
  {
    id: 'apps.profile',
    title: 'Profile',
    type: 'item',
    translate: 'profile',
    icon: 'heroicons-outline:user-circle',
    url: 'example',
  },
  {
    id: 'Reports',
    title: 'Reports',
    translate: 'Reports',
    type: 'item',
    icon: 'material-outline:moving',
    url: 'example',
  },
  {
    id: 'Business Settings',
    title: 'Business Settings',
    type: 'item',
    translate: 'Settings',
    icon: 'heroicons-outline:cog',
    url: '/settingpage',
  },
];

export default navigationConfig;
