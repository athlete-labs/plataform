import { lazy } from 'react';

const MainWalletApp = lazy(() => import('./MainWalletApp'));

const MainWalletAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'wallet/main',
      element: <MainWalletApp />,
    },
  ],
};

export default MainWalletAppConfig;
