import { lazy } from 'react';

const ProjectDashboardApp = lazy(() => import('./ProjectDashboardApp'));

const ProjectDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/project',
      element: <ProjectDashboardApp />,
    },
    {
      path: 'dashboard',
      element: <ProjectDashboardApp />,
    },
  ],
};

export default ProjectDashboardAppConfig;
