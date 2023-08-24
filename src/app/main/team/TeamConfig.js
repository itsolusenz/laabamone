
import TeamApp from './teamApp';


const TeamConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'team',
      element: <TeamApp />,
    },
  ],
};

export default TeamConfig;

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
