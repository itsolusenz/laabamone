import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const ClientPage = lazy(() => import('./ClientPage'));
const Supplierpage = lazy(() => import('./Supplierpage'));
const categoryPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'master/category',
      element: <ClientPage />,
    },
    {
      path: 'master/supplier1',
      element: <Supplierpage />,
    },
  ],

};

export default categoryPagesConfig;
