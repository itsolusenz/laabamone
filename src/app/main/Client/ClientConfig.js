import i18next from 'i18next';

import en from './i18n/en';
import ta from './i18n/ta';
import ClientPage from './ClientPage';
//import Notification from'./Notification';
import Address from'./Address';

import EditAddress from './EditAddress'
i18next.addResourceBundle('en', 'ClientPage', en);
i18next.addResourceBundle('ta', 'ClientPage', ta);

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
