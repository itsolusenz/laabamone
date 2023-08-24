import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const ClientgroupPage = lazy(() => import('./ClientgroupPage'));

const clientgroupPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'master/clientgroup',
      element: <ClientgroupPage />,
    },
  ],
 
};

export default clientgroupPagesConfig;
