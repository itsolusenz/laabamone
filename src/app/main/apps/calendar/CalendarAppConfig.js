import { lazy } from 'react';
import i18next from 'i18next';
const CalendarApp = lazy(() => import('./CalendarApp'));
import en from '../../../../app/configs/navigation-i18n/en';
import ta from '../../../../app/configs/navigation-i18n/ta';

//import CalendarApp from './CalendarApp';

i18next.addResourceBundle('en', 'CalendarApp', en);
i18next.addResourceBundle('ta', 'CalendarApp', ta);
const CalendarAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/calendar',
      element: <CalendarApp />,
    },
    {
      path: 'calendar',
      element: <CalendarApp />,
    },
  ],
};

export default CalendarAppConfig;
