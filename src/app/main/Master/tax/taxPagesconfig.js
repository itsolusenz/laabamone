import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const TaxPage = lazy(() => import('./TaxPage'));

const taxPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'master/tax',
      element: <TaxPage />,
    },
  ],
 
};

export default taxPagesConfig;
