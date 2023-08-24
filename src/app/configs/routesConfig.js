import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import ClientConfig from '../main/Client/ClientConfig';
import MasterConfigs from '../main/Master/MasterConfigs';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import ExampleConfig from '../main/example/ExampleConfig';
import Settconfig from '../main/settings/SettingsConfig';
import SignInPage from '../main/sign-in/SignInPage';



import appsConfigs from '../main/apps/appsConfigs';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import userInterfaceConfigs from '../main/user-interface/UserInterfaceConfigs';
import Forgotpassword from '../main/forgot-password/ForgotPasswordConfig';
import TableConfig from '../main/datatable/TableConfig';
import TeamConfig from '../main/team/TeamConfig';
const routeConfigs = [
  ...appsConfigs,
  ...dashboardsConfigs,
  ...MasterConfigs,
  ...userInterfaceConfigs,
  ExampleConfig, Settconfig, TeamConfig, SignOutConfig, SignInConfig, ClientConfig, Forgotpassword, TableConfig, SignUpConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),

  {
    path: '/',
    element: <Navigate to="/calendar" />,
    auth: settingsConfig.defaultAuth,
  },

  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: ':cid',
    element: <Navigate to="sign-in" />

  },
  /*{
    path: '*',
    element: <Navigate to="404" />,
  },*/
];

export default routes;
