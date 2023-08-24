import Tabledata from './Tabledata';
import authRoles from '../../auth/authRoles';



const TableConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/master/supplier1',
      element: <Tabledata />,
    },
  ],
};

export default TableConfig;

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


