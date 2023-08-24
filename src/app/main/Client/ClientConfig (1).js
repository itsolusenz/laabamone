import i18next from 'i18next';

/*import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';*/
import ClientPage from './ClientPage';
import Notification from'./Notification';
import Address from'./Address';

import EditAddress from './EditAddress'
/*i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);*/

const ClientConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'client',
      element: <ClientPage />,
    },
    {
      path: 'notification',
      element: <Notification />,
    },
    {
      path: 'address',
      element: <Address />,
    },
    {
      path: 'editaddress',
      element: <EditAddress />,
    },
   
  ],
};

export default ClientConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;
*/
