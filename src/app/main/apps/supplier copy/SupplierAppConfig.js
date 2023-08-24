import { lazy } from 'react';
import ContactView from './contact/ContactView';
import ContactForm from './contact/ContactForm';

const SupplierApp = lazy(() => import('./SupplierApp'));

const SupplierAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/supplier',
      element: <SupplierApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
      ],
    },
  ],
};

export default SupplierAppConfig;
